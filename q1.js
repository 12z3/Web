let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//[[1,2,3], [4,5,6], [7,8,9]] === 1,2,3,4,5,6,7,8,9 ;)))))
let b = [];
let el = 9;
let size = a.length;


for (let i = 0; i < size; i++) {
    let idx = 0;
    if (a[i].includes(9)) {
        idx = a.indexOf(9);
        if (i !== idx) {
            console.log("x");
        } else console.log(`${a[idx]}`)
    } else {
        a[i] = ["x", "x", "x"];
        console.log(`${a[i]}`);
    }
}



