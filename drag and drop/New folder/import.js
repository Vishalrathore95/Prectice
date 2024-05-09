let complete = false;

let prom = new Promise(function(resolve, reject) {
    if (complete) {
        resolve("successful");
    } else {
        reject("failed");
    }
});

prom.then(function(result) {
    console.log("Promise resolved:", result);
}).catch(function(error) {
    console.log("Promise rejected:", error);
});
