function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

// 类式继承,将子类的原型指向父类

// 构造函数继承，子类调用父类构造函数，绑定当前作用域

// 组合继承，类式继承+构造函数继承，，先用构造函数继承，在将原型指向父类

// 寄生组合式继承
