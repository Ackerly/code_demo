let obj = {
    a: 1,
    b: 2,
};

// 遍历key
for (let key in obj) {
    console.log("obj traverse value:", key)
}

// entries返回键值对数组，利用这个进行遍历
for (const [key, value] of Object.entries(obj)) {
    console.log("obj key value:", key, "obj value:", value)
}

// 遍历key
for (let key of Object.keys(obj)) {
    console.log("obj key value:", key)
}

// 遍历value
for (let value of Object.values(obj)) {
    console.log("obj value:", value)
}

// 遍历对象自有属性，不包括继承自原型的属性
for (let key of Object.getOwnPropertyNames(obj)) {
    console.log("obj key value:", key)
}

// 冻结对象,冻结后不是添加，修改，删除属性
Object.freeze(obj);
obj.c = 3;
delete  obj.b;
console.log("after freeze obj:", obj); // { a: 1, b: 2 }
