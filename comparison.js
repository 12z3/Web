const arr = [1, 2, 3, 4, 5, 6];
const brr = [2, 3, 7, 4, 12, 3];
const crr = [];
let idx = 0;

compassion(arr, brr);
print(crr);

function compassion(arr, brr) {
    isValidArray(arr, brr);
    for (let i = 0; i < arr.length; i++) {
        if (brr.includes(arr[i])) {
            crr[idx++] = arr[i];
        }
    }
}


function compassion2(arr, brr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < brr.length; j++) {
            if (arr[i] === brr[j]) {
                crr[j] = arr[i];
            }
        }
    }
}

function isValidArray(arr, brr) {
    if (arr.length !== brr.length) {
        console.log(`The length of array are different ${arr.length} !== ${brr.length}`);
        return;
    }
}

function print(arr) { console.log(`${arr} \n`) }