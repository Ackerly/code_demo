// 简单的Promise
function handleString(str) {
    return new Promise(function (resolve, reject) {
        try {
            str.split();
            resolve();
        } catch (e) {
            reject();
        }
    })
};

handleString("name").then(function () {
    console.log("handle string success");
}).catch(function (e) {
    console.log("handle string error:", e)
});


let p1 = Promise.resolve(3);
let p2 = Promise.reject();
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then(values => {
    console.log(values); // 永远走不到这里
}).catch(function(err) {
    console.log(err); // 2
});

Promise.all([1,2,3]).then(function () {
    console.log("promise success")
}).catch(function(e) {
    console.log("promise error:", e)
});
