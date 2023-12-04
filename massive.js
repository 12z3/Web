let arr = [];
const a = [[5, 7, 34], [44, 25, 42], [45, 89, 99]];
//const a = [5, 7, 34, 44, 25, 42, 45, 89, 99];

// printArr(a);
printEl(a, 99);

function printArr(a) {
    for (let i = 0; i < a.length; i++) {
        let tmp = [];
        for (let j = 0; j < a[i].length; j++) {
            tmp.push(a[i][j]);
        }
        console.log(`${tmp}`);
    }
}

function printEl(a, el) {
    for (let i = 0; i < a.length; i++) {
        let tmp = [];
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] === el) {
                tmp.push(a[i][j])
            } else {
                tmp.push(' x')
            }
        }
        console.log(" " + `${' ' + tmp}` + " ");
    }
}