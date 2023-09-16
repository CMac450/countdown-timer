//countdown to 14 days in the future. once timer reaches 00:00:00:00 then reset to 14 days

let todayDate = new Date(); //'September 19, 2023'
let day = todayDate.getDate();
let month = todayDate.getMonth();
let year = todayDate.getFullYear();
let time = todayDate.getT
let dayValue = day + 14;

let thirtyDayMonths = [3,5,8,10]; ////[3,5,8,10] [4,6,9,11]
let thirtyOneDayMonths = [0,2,4,6,7,9,11]; //jan starts at 0 ////[0,2,4,6,7,9,11] [1,3,5,7,8,10,12]

let countDownDate;
let distanceBetweenDates;

console.log(dayValue);

if (thirtyDayMonths.includes(month) && dayValue > 30) {
    //get difference between days
    let difference = dayValue - 30;
    countDownDate = new Date(year, month+1, difference);
    distanceBetweenDates = countDownDate - todayDate;

    // console.log(`todayDate: ${todayDate}`);
    // console.log(`countDownDate: ${countDownDate}`);

    // console.log(`distanceBetweenDates: ${distanceBetweenDates}`)
    // console.log(`month: ${month}`);
    // console.log('HIT 1');

} else if(thirtyDayMonths.includes(month) && dayValue < 30) {
    console.log(`month: ${month}`);
    console.log('HIT 2');
}else if (thirtyDayMonths.includes(month) && dayValue == 30) {
    countDownDate = new Date(year, month, dayValue);
    distanceBetweenDates = countDownDate - todayDate;
}


if (thirtyOneDayMonths.includes(month) && dayValue > 31) {
    //get difference between days
    let difference = dayValue - 30;
    console.log(`month: ${month}`);
    console.log('HIT 3');

} else if(thirtyOneDayMonths.includes(month) && dayValue < 31) {
    console.log(`month: ${month}`);
    console.log('HIT 4');
} else {
    console.log(`month: ${month}`);
    console.log(`dayValue: ${dayValue}`);
    console.log('HIT 5');
}

const x = setInterval(function() {
    //calculate time for days, hours, minutes, seconds
    let d = Math.floor(distanceBetweenDates / (1000 * 60 * 60 * 24));
    let h = Math.floor((distanceBetweenDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distanceBetweenDates % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distanceBetweenDates % (1000 * 60)) / 1000);


    document.getElementById("day-num").innerHTML = d;
    document.getElementById("hour-num").innerHTML = h;
    document.getElementById("min-num").innerHTML = m;
    document.getElementById("sec-num").innerHTML = s;
}, 1000);