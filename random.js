let idxA = 1;
let res = [];
const choice = 3;
const digitsCnt = 6;


generateMassive();
printArr(res);
printArrLine(res);

function generateMassive() {
    let arr;
    for (let j = 0; j < choice; j++) {
        arr = [];
        for (let i = 0; i < digitsCnt; i++) {
            let el = getEl();
            if (arr.includes(el) || res.includes(el)) {
                i--;
            } else {
                arr.push(el);
            }
        }
        res.push(arr);
    }
    arr.sort();
}

// function generateMassive1() {
//     for (let j = 0; j < choice; j++) {
//         let arr = [];
//         for (let i = 1; i <= digitsCnt; i++) {
//             getEl();
//             removeDuplicatedEl(el, arr);
//         }
//         res.push(arr);
//     }
// }

function removeDuplicatedEl(el, arr) {
    let newEl;
    let cnt = 0;
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === el) {
            newEl = getEl();
            arr[i] = newEl;
            //arr.splice(idx1, idx1 - 1, newEl);
        } else arr.push(el);
}

function getEl() {
    return el = (Math.floor(Math.random() * 49) + 1);
}

function printResult(arr) {
    console.log(`${idx++}: ${arr}; \n`);
}

function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${idxA++}: ${arr[i]} `);
    }
    printNewLine();
}

function printArrLine(arr) {
    console.log(`0: ${arr.join("   ")}`);
    printNewLine();
}

function printNewLine() { console.log(` `) }

function isElExistInArr(massive, el) {
    return (massive.includes(el));
}