let number1 = [2,4,5,6];

number1.forEach((item, index) => {
    return item += 2;
});

// number1.map((item, index) => {
//     return item * 2;
// });

number2 = [{a: 1}, {a:2}, {a: 3}];


// number2.forEach(function (item) {
//     return item.a = 3;
// });

// number2.map(function (item) {
//     return item.a = 3;
// });

number2.reverse();
console.log("number 2 list:", number2);
