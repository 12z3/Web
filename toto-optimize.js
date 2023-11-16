let allCnt = 1;
let allMatches = 0;
let all = 55;
let ab = [1, 4, 6, 17, 23, 33];

console.log("\n" + 'Target: ' + `${ab}` + "\n")

while (allCnt <= all) {
    console.log('Target: ' + `${ab}`)
    console.log('Your choice: ' + `${allCnt++}`);
    compareResults(ab, generateDigitsOPT2())
    console.log();
}
console.log("All matches: " + `${allMatches}` + " of " + 20);


function generateDigitsOPT() {
    let tmpRes = [];
    let res = [];
    let cnt = 3;
    let allDigits = 6;

    while (cnt > 0) {
        let tmpSet = new Set();
        for (let i = 0; i < allDigits; i++) {
            let newEl = getDigit();
            if (!tmpSet.has(newEl)) {
                tmpSet.add(newEl);
            } else {
                i--;
            }
            tmpRes = Array.from(tmpSet);
            tmpRes.sort((a, b) => a - b);
        }
        res.push(tmpRes);
        console.log(`${Math.abs(cnt - 4)}: ${tmpRes}`);
        cnt--;
    }
    console.log();
    console.log(`${res.join('  ')}`);
}

function getDigit() { return Math.floor(Math.random() * 49) + 1; }

function printRes(arr) {
    for (let item of arr) {
        console.log(`${arr}`);
    }
}

function generateDigitsOPT1() {
    let tmpRes = [];
    let res = [];
    let cnt = 3;
    let allDigits = 6;

    while (cnt > 0) {
        let tmpSet = new Set();
        while (tmpSet.size < 6) {
            let newEl = getDigit();
            tmpSet.add(newEl);
            allDigits--;
        }
        tmpRes = Array.from(tmpSet);
        tmpRes.sort((a, b) => a - b);
        res.push(tmpRes);
        console.log(`${Math.abs(cnt - 4)}: ${tmpRes}`);
        cnt--;
    }
    console.log();
    console.log(`${res.join('  ')}`);
}

function generateDigitsOPT2() {
    let tmpRes = [];
    let res = [];
    let cntChoices = 8;
    let cntDigits = 6;
    let allNumbers = new Set();
    let idx = 1;

    console.log('--------------------');
    while (cntChoices > 0) {
        let tmpSet = new Set();
        while (tmpSet.size < 6) {
            let newEl = getDigit();
            if (!allNumbers.has(newEl)) {
                tmpSet.add(newEl);
                allNumbers.add(newEl);
            }
        }
        tmpRes = Array.from(tmpSet);
        tmpRes.sort((a, b) => a - b);
        res.push(tmpRes);
        console.log(`${(idx++)}: ${tmpRes}`);
        cntChoices--;
    }
    console.log();
    console.log(`${res.join('  ')}`);
    console.log('----------------------------------------------------');
    return res;
}

function compareResults(x, arr) {
    let cntMatches = 0;
    let idxA;

    for (let j = 0; j < arr.length; j++) {
        cntMatches = 0;
        let tmp = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[j][i] === x[i]) {
                tmp.push(x[i]);
                idxA = i;
                cntMatches++;
            } else continue;
        }
        if (cntMatches > 4) {
            console.log('Matches: ' + `${idxA}: ${arr[j]} -> ${tmp.join(' ')}`);
            console.log('----------------------------------------------------');
            allMatches++;
        }
    }
}


function getDigit() {
    return Math.floor(Math.random() * 49) + 1;

    function printCompareRes(idx, arr, tmp) {
        console.log('Matches: ' + `${idx++}: ${arr[j]} -> ${tmp.join(' ')}`);
        console.log('----------------------------------------------------');

    }
}

