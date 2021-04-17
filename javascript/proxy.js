
let target = {a: 1};
let obj = new Proxy(target, {
    get: function () {
        return 3;
    }
});

// Proxy起作用只针对Proxy实例，而不是目标对象
console.log("target proxy:", obj.a, target.a);

// 可取消的proxy实例
let{proxy, revoke} = Proxy.revocable(target, {
    get: function(target, p, receiver) {
        return "proxy";
    }
});
console.log("proxy get value:", proxy.a);
revoke();
console.log("proxy get value after revoke:", proxy.a);
