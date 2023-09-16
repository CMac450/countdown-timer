//countdown to 14 days in the future
let startCountdown = setInterval(function() {
    let todayDate = new Date();
    let day = todayDate.getDate();
    let month = todayDate.getMonth();
    let year = todayDate.getFullYear();
    let dayValue = day + 14;
    
    let thirtyDayMonths = [3, 5, 8, 10];
    let thirtyOneDayMonths = [0, 2, 4, 6, 7, 9, 11]; //jan starts at 0
    
    let countDownDate;
    let distanceBetweenDates;
    
    // Set the date we're counting down to
    if (thirtyDayMonths.includes(month) && dayValue > 30) {
        let difference = dayValue - 30;
        countDownDate = new Date(year, month + 1, difference);
        distanceBetweenDates = countDownDate - todayDate;
    } else if (thirtyDayMonths.includes(month) && dayValue < 30) {
        let difference = 30 - dayValue;
        countDownDate = new Date(year, month, difference);
        distanceBetweenDates = countDownDate - todayDate;
    } else if (thirtyDayMonths.includes(month) && dayValue == 30) {
        countDownDate = new Date(year, month, dayValue);
        distanceBetweenDates = countDownDate - todayDate;
    }  
    
    if (thirtyOneDayMonths.includes(month) && dayValue > 31) {
        let difference = dayValue - 31;
        countDownDate = new Date(year, month + 1, difference);
        distanceBetweenDates = countDownDate - todayDate;
    
    } else if (thirtyOneDayMonths.includes(month) && dayValue < 31) {
        let difference = 31 - dayValue;
        countDownDate = new Date(year, month, difference);
        distanceBetweenDates = countDownDate - todayDate;
    
    } else if (thirtyOneDayMonths.includes(month) && dayValue == 31) {
        countDownDate = new Date(year, month, dayValue);
        distanceBetweenDates = countDownDate - todayDate;
    }

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