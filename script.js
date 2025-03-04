const months=[31,28,31,30,31,30,31,31,30,31,30,31];
function ageCalculate(){
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);

    if(isNaN(inputDate)){
        alert("Please enter a Valid date");
        displayResult("-","-","-");
        return;
    }

    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear()
    };

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if(
        birthDetails.year > currentYear ||
        (birthDetails.year ===currentYear && birthDetails.month > currentMonth) ||
        (birthDetails.year === currentYear && birthDetails.month === currentMonth && birthDetails.date > currentDate)
    )
    {
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }

    let birthYear = currentYear - birthDetails.year;
    let birthMonth = currentMonth - birthDetails.month;
    let birthDate = currentDate - birthDetails.date;

    if(birthDate < 0){
        birthMonth--;
        birthDate += months[(currentMonth - 2 + 12) % 12];
    }
    if(birthMonth < 0){
        birthMonth +=12;
        birthYear--;;
    }
    displayResult(birthYear, birthMonth, birthDate);
}

function displayResult(years, months, days){
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
}

function leapChecker(year){
    if(year % 4 ===0 && (year % 100 !== 0 || year%400 === 0 )) {
        months[1] = 29;
    } else {
        months[1] = 28;
    }
}