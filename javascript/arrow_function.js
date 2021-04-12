


const person = {
    name: "Mack",
    a: () => {
        console.log("person name is:", this.name, "this:", this);
        return this.name;
    },
    b: function () {
        console.log("person b name:", this.name, "this", this)
    }
};

const person2 = {
    name: "Tom"
}

person.a();
person.b();
person.b.call(person2);
person.a.call(person2);
var id = "Global";

function a() {
    console.log("a value:", this.id);
}

let b = () => {
    console.log("b value:", this.id);
}

a();
b();
a.call({id: 'Obj'});
b.call({id: 'Obj'});
