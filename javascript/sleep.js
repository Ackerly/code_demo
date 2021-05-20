/*
* sleep方法的实现
* */
// 方法一：
function sleep(time) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}
sleep(5000).then((time) => {console.log(`你睡了${time / 1000}s`)})

// 方法二：
function* sleepGenerator(time) {
    yield new Promise(function (resolve, reject) {
        setTimeout(resolve, time)
    })
}
sleepGenerator(1000).next().value.then(()=>{console.log(`sleepGenerator`)})

// 方法三：
function sleepAsync(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}
async function output() {
    let out = await sleep(1000);
    console.log("use async come true sleep ");
    return out;
}

// ES5
function sleepCall(callback, time) {
    if (typeof callback === 'function')
        setTimeout(callback, time)
}

function output1() {
    console.log("use callback come true sleep")
}
sleep(output1, 1000)

// 拓展：实现sleepBefore
function Person(name) {
    if (this instanceof Person) {
        this.queues = [];
        this.queues.push({
            delay: 0,
            cb: () => console.log(`this is ${name}`)
        })
        setTimeout(() => {this.run()})
    } else {
        return new Person(name);
    }
}

Person.prototype.run = async function() {
    for (let i = 0,len=this.queues.length;i<len;i++) {
        let item = this.queues[i];
        if(item.delay) {
            await  this.toPromise(item.cb, item.delay)
        } else {
            await item.cb()
        }
    }
}

Person.prototype.toPromise = function (cb, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            cb();
            resolve();
        }, delay)
    })
};

Person.prototype.sleep = function (delay) {
    this.queues.push({
        delay,
        cb: () => console.log(`sleep after ${delay}`)
    })
    return this
};

Person.prototype.eat = function (food) {
    this.queues.push({
        delay: 0,
        cb: () => console.log(`eat ${food}`)
    })
    return this
};

Person.prototype.sleepFirst = function (delay) {
    this.queues.unshift({
        delay: delay,
        cb: () => console.log(`sleep before ${delay}`)
    })
    return this
}
