
getTime();

function getTime() {
    let currentDate = new Date().toLocaleDateString("bg-BG");
    let date = new Date();

    let cHour = date.getHours();
    let cMinute = date.getMinutes();
    let cSeconds = date.getSeconds();

    console.log(`${currentDate} The Time is: ${cHour}:${cMinute}:${cSeconds}`);
}
