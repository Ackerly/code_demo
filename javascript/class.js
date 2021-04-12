class  Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log("person name is:", this.name);
    }

    _getPerson() {
        console.log("get person name is:", this.name);
    }
}

new Person("jack").getName();

new Person("mack")._getPerson();

// 原型式继承
function People(first, last, age, gender, interests) {
    this.name = {
        first,
        last,
    }

    this.age = age;
    this.gender = gender;
    this.interests = interests;
}
People.prototype.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
};

function Teacher(first, last, age, gender, interests, subject) {
    People.call(this, first, last, age, gender, interests);

    this.subject = subject;
}

Teacher.prototype = Object.create(People.prototype);

Teacher.prototype.constructor
