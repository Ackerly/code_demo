// 简单的柯里化
function curry(f) {
    return function (a) {
        return function (b) {
            return f(a,b);
        }
    }
}

function sum(a, b) {
    console.log("sum a and b:", a + b);
    return a + b;
}

let curriedSum = curry(sum);

curriedSum(1)(2);


// 高级柯里化
function advancedCurry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return  function(...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}


function sum2(a, b, c) {
    console.log("sum2 a,", a, "b:", b, "c:", c);
    // return a + b + c;
}

let currideSum2 =  advancedCurry(sum2);
currideSum2(1,2,4);
currideSum2(1)(2,5);
