export let BASE_URL = "ttps://api.example.com";

export function formatTestName(name){
    return "TC" + name.toUpperCase();
}

export function formatTestName2(name) {
    return "TC_" + name.toUpperCase();
}