function calcSum(num) {
    return num == 1 ? 1 : num + calcSum(num - 1)
}

let total = calcSum(70);
console.log("number calc:", total);
