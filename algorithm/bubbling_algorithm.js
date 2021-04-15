let numberList = [];

for (let i = 0; i < 100; i++) {
    numberList.push(Math.floor(Math.random() * 1000));
};

console.log("sort number before:", numberList);

// 降序
// numberList.sort(function (a,b) {
//     return b - a;
// });

function bubblingSort(arr, isAscending = true) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = i + 1; k < arr.length; k++) {
            // 是否交换
            let isExchange = isAscending ? arr[i] > arr[k] : arr[i] < arr[k];
            if (isExchange) {
                let nextValue = arr[k];
                arr[k] = arr[i];
                arr[i] = nextValue;
            }
        }
    }
}

bubblingSort(numberList);
console.log("sort number after:", numberList);

bubblingSort(numberList, false);
console.log("sort number isAscending is false after:", numberList);
