let url = "https://staging.vwo.com/api/login?retry=true";
let n = url.length;
console.log(n);

for(i=0; i<n; i++) {
    console.log(i, url.at(i));
}