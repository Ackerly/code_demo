function eventLoop() {
    console.log("1");
    setTimeout(function () {
     console.log("2");
    });
    new Promise(function (resolve) {
        console.log("3");
        resolve();
    }).then(function () {
        console.log("4")
    });
    console.log("5");
}
eventLoop();
