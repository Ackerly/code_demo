const person = {
    name: "Tom",
    getName: function () {
        console.log("name is:", this.name);
        return this.name
    }
}

const getName = person.getName;
console.log(getName()); // undefined
person.getName(); // Tom


// 使用bind绑定调用对象
const bindGetName = getName.bind(person);

bindGetName(); // Tom


// 修改参数
function addition(x = 5, y = 0) {
    console.log("addition value:", x + y);
    return x + y;
}

addition(); // 5

const plus10 = addition.bind(null, 10);

plus10(); // 10
plus10(10); // 20
plus10(10, 10); // 20

const  plus15 = addition.bind(null, 10, 20);
plus15(); // 30
plus15(5) // 30
