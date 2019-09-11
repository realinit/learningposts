/**
 *  @desc 
 * How to can cancel a DOM request before complete or whenever you want 
 * @Author Nitin Tyagi
 * @Email nitin.1992tyagi@gmail.com
 * */
const controller = new AbortController()
const signal = controller.signal
/*
// Register a listenr.
signal.addEventListener("abort", () => {
    console.log("aborted!")
})
*/
function beginFetching() {
    console.log('Now fetching');
    const urlToFetch = "https://example.com/delay/3";
    fetch(urlToFetch, {
        method: 'get',
        signal: signal,
    }).then(function (response) {
            console.log(`Fetch complete. (Not aborted)`);
        }).catch(function (err) {
            /**
             * here we can  catch error after aborting request. 
             * */
            console.error(` Err: ${err}`);
        });
}

function abortFetching() {
    console.log('Now aborting');
    // Abort.
    controller.abort()
}