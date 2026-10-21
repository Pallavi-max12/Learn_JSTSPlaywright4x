let responseCode = 404;
switch (responseCode) {
    case 200:
        console.log("200 OK success");
        break;
    case 404:
        console.log("404 Not Found");
        break;
    case 500:
        console.log("500 Server Error");
        break;
    default:
        console.log("No status code match found")


}