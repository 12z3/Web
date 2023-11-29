const a1 = [1, 2, 3, 5, 4, 3, 2, 1];
const a = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3];
const a2 = [2, 6, 5, 8, 11];


//sumOfElOfArr(5);
// sum2Set(14);
// sum2Map(14);

//sum3Map(6);
// sum3A(5);
sum3AN(5);


function sum3AN(target) {
    let set1 = new Set();
    let map1 = new Map();
    let res = [];

    for (let i = 0; i < a.length; i++) {
        let d1 = a[i];
        let sum2 = target - d1;
        for (let j = i + 1; j < a.length; j++) {
            let tmp = [];
            let d2 = sum2 - a[j];

            if (map1.has(d2)) {
                tmp.push(d1);
                tmp.push(d2);
                tmp.push(a[j]);
                set1.add(tmp);
            } else {
                map1.set(a[j], j);
            }
        }
    }
    console.log(set1);
}


function sum3A(target) {
    let map1 = new Map();
    let res = [];

    for (let i = 0; i < a.length; i++) {
        let d1 = a[i];
        let sum2 = target - d1;
        for (let j = i + 1; j < a.length; j++) {
            let tmp = [];
            let d2 = sum2 - a[j];

            if (map1.has(d2)) {
                tmp.push(d1);
                tmp.push(d2);
                tmp.push(a[j]);
                res.push(tmp);
            } else {
                map1.set(a[j], j);
            }
        }
    }
    console.log(res.join('   '));
}

function sum3Map(target) {
    let sum3 = new Map();
    let isMatch = false;

    for (let i = 0; i < a.length; i++) {
        let dig1 = a[i];
        let sum = target - dig1;
        for (let j = i + 1; j < a.length; j++) {
            let res1 = sum2MapIdx(sum, j);
            if (res1.length === 0) continue;
            console.log(`${dig1} + : ` + res1.join(' - '));
        }
    }
}



function sum2Map(target) {
    let resM = [];
    let map = new Map();

    for (let i = 0; i < a.length; i++) {
        let tmpM = [];
        let findingDigits = target - a[i];
        if (map.has(findingDigits)) {
            tmpM.push(a[i]);
            tmpM.push(findingDigits);
            resM.push(tmpM);
        } else {
            map.set(a[i], i);
        }
    }
    console.log("Used MAP: " + resM.join('   '));
}

function sum2Set(target) {
    let correctDigits = new Set(a);
    let resS = [];

    for (let i = 0; i < a.length; i++) {
        let tmpS = [];
        let xDigit = target - a[i];
        if (correctDigits.has(xDigit)) {
            tmpS.push(xDigit);
            tmpS.push(a[i]);
            if (!resS.includes(tmpS)) resS.push(tmpS);
        }
    }

    console.log("Used SET: " + resS.join('  '));
}



function sumOfElOfArr(target) {
    let cnt = 0;
    let sum;
    let allResults = [];

    for (let i = 0; i < a.length; i++) {
        let tmp = [];
        tmp.push(a[i]);
        sum = a[i];
        for (let j = i + 1; j < a.length; j++) {
            sum += a[j];
            tmp.push(a[j]);
            if (sum === target) {
                //console.log(`${tmp}`)
                allResults.push(tmp);
                break;
            }
        }
    }
    console.log(allResults.join('  '));
}

function sum2MapIdx(target, idx) {
    let resM = [];
    let map = new Map();

    for (let i = idx; i < a.length; i++) {
        let tmpM = [];
        let findingDigits = target - a[i];
        if (map.has(findingDigits)) {
            tmpM.push(a[i]);
            tmpM.push(findingDigits);
            resM.push(tmpM);
        } else {
            map.set(a[i], i);
        }
    }
    return resM;
}