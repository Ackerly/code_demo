let numberList = [];

for (let i = 0; i < 100; i++) {
    numberList.push(Math.floor(Math.random() * 1000));
}
;

console.log("sort number before:", numberList);


function quickSort(arr, left, right) {
    let len = arr.length;
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? len - 1 : right;

    if (left < right) {
        let partIndex = partition(arr, left, right);
        quickSort(arr, left, partIndex - 1);
        quickSort(arr, partIndex + 1, right);
    }

    return arr;

}

// 设置基准值
function partition(arr, left, right) {
    let pivot = left;
    let index = left + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++
        }
    }
    swap(arr, pivot, index - 1);

    return index - 1;
}

function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

try {
    quickSort(numberList);
} catch (e) {
    console.log("runing quick sort fail:", e)
}

console.log("sort number after:", numberList);
