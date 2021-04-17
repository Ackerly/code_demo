// 简单的发布订阅者实现事件管理器
class EventManager {
    constructor () {
        // 缓存列表，存放event和fn
        this.list = {};
    }

    // 添加
    on(event, target, fn) {
        if (!this.list[event]) this.list[event] = {};

        this.list[event][target] = fn;
    }

    // 发布
    emit(event) {
        if (this.list[event]) {
            for (let fn of Object.values(this.list[event])) {
                if (fn) fn();
            }
        }
    }

    off(event, target){
        if (!this.list[event]) return;

        if (this.list[event][target]) {
            delete this.list[event][target];
        }
    }
}

let eventManager = new EventManager();

eventManager.on("custom", "id0", function () {
    console.log("event manger custom");
});

eventManager.on("custom", "id1", function () {
    console.log("event manger remove");
});

eventManager.emit("custom");

eventManager.off("custom", "id1", function () {
    console.log("event manger remove");
});

eventManager.emit("custom", "id2");
