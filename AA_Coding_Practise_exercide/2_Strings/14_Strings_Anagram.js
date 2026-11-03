function areAnagrams(str1, str2) {
  // Step 1: Convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Step 2: Sort the letters of both strings
  let sorted1 = str1.split("").sort().join("");
  let sorted2 = str2.split("").sort().join("");

  // Step 3: Compare the sorted strings
  return sorted1 === sorted2;
}

// Example usage:
let word1 = "silent";
let word2 = "listen";

if (areAnagrams(word1, word2)) {
  console.log(`${word1} and ${word2} are anagrams`);
} else {
  console.log(`${word1} and ${word2} are not anagrams`);
}
