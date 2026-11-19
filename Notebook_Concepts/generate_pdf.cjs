const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('../23_Playwright/node_modules/playwright');

const notebookPath = path.join(__dirname, 'JavaScript_Last_Minute_Revision.ipynb');
const pdfPath = path.join(__dirname, 'JavaScript_Last_Minute_Revision.pdf');
const notebook = JSON.parse(fs.readFileSync(notebookPath, 'utf8'));

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function renderMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const output = [];
  let paragraph = [];
  let listType = null;
  let codeLines = null;

  const flushParagraph = () => {
    if (paragraph.length) output.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
    paragraph = [];
  };
  const closeList = () => {
    if (listType) output.push(`</${listType}>`);
    listType = null;
  };

  for (const line of lines) {
    if (line.startsWith('```')) {
      flushParagraph();
      closeList();
      if (codeLines) {
        output.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
        codeLines = null;
      } else {
        codeLines = [];
      }
      continue;
    }
    if (codeLines) {
      codeLines.push(line);
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    const bullet = line.match(/^\s*-\s+(.+)$/);
    const numbered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (heading || bullet || numbered || /^>\s?/.test(line) || /^---+$/.test(line) || !line.trim()) {
      flushParagraph();
    }

    if (heading) {
      closeList();
      const level = heading[1].length;
      output.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
    } else if (bullet || numbered) {
      const nextType = bullet ? 'ul' : 'ol';
      if (listType !== nextType) {
        closeList();
        output.push(`<${nextType}>`);
        listType = nextType;
      }
      output.push(`<li>${inlineMarkdown((bullet || numbered)[1])}</li>`);
    } else if (/^>\s?/.test(line)) {
      closeList();
      output.push(`<blockquote>${inlineMarkdown(line.replace(/^>\s?/, ''))}</blockquote>`);
    } else if (/^---+$/.test(line)) {
      closeList();
      output.push('<hr>');
    } else if (!line.trim()) {
      closeList();
    } else {
      closeList();
      paragraph.push(line.trim());
    }
  }
  flushParagraph();
  closeList();
  return output.join('\n');
}

const markdownCells = notebook.cells
  .filter(cell => cell.cell_type === 'markdown');
const markdownContent = markdownCells
  .map(cell => Array.isArray(cell.source) ? cell.source.join('') : cell.source)
  .join('\n');

if (!markdownContent.trim()) {
  throw new Error(`No Markdown content found in ${notebookPath}`);
}

const sections = markdownCells
  .map(cell => `<section class="cell">${renderMarkdown(cell.source.join(''))}</section>`)
  .join('\n');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>JavaScript: Last-Minute Revision</title>
<style>
  @page { size: A4; margin: 16mm 17mm 18mm; }
  * { box-sizing: border-box; }
  body { margin: 0; color: #202b34; font: 10pt/1.48 "Trebuchet MS", Arial, sans-serif; }
  .cell { border-left: 3px solid #197c78; padding: 0 0 3mm 5mm; margin: 0 0 5mm; }
  .cell:first-child { border: 0; padding: 17mm 0 11mm; margin-bottom: 10mm; border-bottom: 1px solid #c9d8d5; }
  h1, h2, h3 { font-family: Georgia, "Times New Roman", serif; line-height: 1.18; color: #153c42; break-after: avoid; }
  h1 { font-size: 30pt; max-width: 150mm; margin: 0 0 7mm; }
  h2 { font-size: 17pt; margin: 0 0 3mm; }
  h3 { font-size: 12pt; margin: 3mm 0 1mm; }
  p { margin: 0 0 2.2mm; }
  ul, ol { margin: 1mm 0 3mm; padding-left: 6mm; }
  li { margin: 0 0 1mm; padding-left: 0.6mm; }
  li::marker { color: #197c78; }
  strong { color: #153c42; }
  blockquote { margin: 3mm 0; padding: 2.5mm 4mm; border-left: 2px solid #d48748; background: #f7f3eb; color: #374b4c; }
  code { font-family: Consolas, "Courier New", monospace; font-size: 9pt; color: #174e50; background: #edf3f1; padding: 0.2mm 0.8mm; }
  pre { margin: 2mm 0 3mm; padding: 3mm 4mm; background: #eef3f1; border: 1px solid #d6e1de; border-radius: 2mm; white-space: pre-wrap; overflow-wrap: anywhere; break-inside: avoid; }
  pre code { padding: 0; background: transparent; color: #24383b; font-size: 8.5pt; line-height: 1.38; }
  hr { border: 0; border-top: 1px solid #d5dfdc; margin: 4mm 0; }
  .cell:not(:first-child) h2::before { content: ""; display: inline-block; width: 3mm; height: 3mm; margin-right: 2mm; background: #d48748; vertical-align: 1px; }
  @media print { .cell { orphans: 3; widows: 3; } }
</style>
</head>
<body>${sections}</body>
</html>`;

async function main() {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({
      viewport: { width: 1100, height: 1400 },
      deviceScaleFactor: 1
    });
    await page.setContent(html, { waitUntil: 'load' });
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true
    });
  } finally {
    await browser.close();
  }
  const { size } = fs.statSync(pdfPath);
  if (size === 0) {
    throw new Error(`Generated PDF is empty: ${pdfPath}`);
  }
  console.log(`Created ${pdfPath} (${size} bytes)`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});