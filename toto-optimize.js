generateDigitsOPT2()

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
    let cnt = 3;
    let allDigits = 6;
    let allNumbers = new Set();

    while (cnt > 0) {
        let tmpSet = new Set();
        while (tmpSet.size < 6) {
            let newEl = getDigit();
            if (!allNumbers.has(newEl)) {
                tmpSet.add(newEl);
                allNumbers.add(newEl);
                allDigits--;
            }
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

function getDigit() {
    return Math.floor(Math.random() * 49) + 1;
}
