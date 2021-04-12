const person = {
    name: "Tom",
    getName: function () {
        console.log(this.name);
        this.name;
    }
};

person.getName(); //Tom

const person1 = person.getName;
person1(); // undefined


const person2 = person.getName;

person2.call(person); // Tom


function  plus(x = 3, y = 5) {
    console.log("plus x value:", x, "y value:", y);
}

plus();// undefined
plus.call(null, 6,8);
