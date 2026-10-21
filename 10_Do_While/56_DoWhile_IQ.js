let retry = 0;
do {
    console.log("Executing the code....");
    console.log("retrying", retry);
    retry++ ;
}
while (retry < 3)