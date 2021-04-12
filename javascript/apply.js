const person = {
    name: "Tom",
    getName: function () {
        console.log("person name is:", this.name);
    }
};

person.getName();  // Tom

const  person2 = person.getName;
person2();  // undefined

const person3 = person.getName;
person3.apply(person);  //Tom


function  add(x, y) {
    console.log("add x:", x, "y:", y);
}

add(4, 5); // 4,5
add.apply(null, [5,6]); //5,6
