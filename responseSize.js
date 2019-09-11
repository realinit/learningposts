/**
 * @desc 
 * How to check respose size of a request 
 * @Author Nitin Tyagi
 * @Email nitin.1992tyagi@gmail.com
 * */
function beginFetching() {
    console.log('Now fetching');
    const urlToFetch = "https://example.com/delay/3";
    fetch(urlToFetch, {
        method: 'get'
    }).then(function (response) {
            console.log("Response Payload Size ", Buffer.byteLength(JSON.stringify(response))/1024," kbytes")
    }).catch(function (err) {
        /**
         * here we can  catch error after aborting request. 
         * */
        console.error(` Err: ${err}`);
    });
}
beginFetching();