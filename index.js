let countHome = 0;
let countGuest = 0;

function addHome1() {
    countHome += 1;
    if (countHome > countGuest) {
        document.getElementById("title-guest").style.color = "#BE123C";
        document.getElementById("title-home").style.color = "#10B981";
    } else if (countHome < countGuest) {
        document.getElementById("title-home").style.color = "#BE123C";
        document.getElementById("title-guest").style.color = "#10B981";
    } else {
        document.getElementById("title-home").style.color = "#EEEEEE";
        document.getElementById("title-guest").style.color = "#EEEEEE";        
    }
    document.getElementById("score-home").textContent = countHome;
    console.log(countHome);    
}
function addHome2() {
    countHome += 2;
    if (countHome > countGuest) {
        document.getElementById("title-guest").style.color = "#BE123C";
        document.getElementById("title-home").style.color = "#10B981";
    } else if (countHome < countGuest) {
        document.getElementById("title-home").style.color = "#BE123C";
        document.getElementById("title-guest").style.color = "#10B981";
    } else {
        document.getElementById("title-home").style.color = "#EEEEEE";
        document.getElementById("title-guest").style.color = "#EEEEEE";        
    }
    document.getElementById("score-home").textContent = countHome;
}
function addHome3() {
    countHome += 3;
    if (countHome > countGuest) {
        document.getElementById("title-guest").style.color = "#BE123C";
        document.getElementById("title-home").style.color = "#10B981";
    } else if (countHome < countGuest) {
        document.getElementById("title-home").style.color = "#BE123C";
        document.getElementById("title-guest").style.color = "#10B981";
    } else {
        document.getElementById("title-home").style.color = "#EEEEEE";
        document.getElementById("title-guest").style.color = "#EEEEEE";        
    }
    document.getElementById("score-home").textContent = countHome;
}



function addGuest1() {
    countGuest += 1;
    if (countHome > countGuest) {
        document.getElementById("title-guest").style.color = "#BE123C";
        document.getElementById("title-home").style.color = "#10B981";
    } else if (countHome < countGuest) {
        document.getElementById("title-home").style.color = "#BE123C";
        document.getElementById("title-guest").style.color = "#10B981";
    } else {
        document.getElementById("title-home").style.color = "#EEEEEE";
        document.getElementById("title-guest").style.color = "#EEEEEE";        
    }
    document.getElementById("score-guest").textContent = countGuest;
    console.log(countGuest);
}
function addGuest2() {
    countGuest += 2;
    if (countHome > countGuest) {
        document.getElementById("title-guest").style.color = "#BE123C";
        document.getElementById("title-home").style.color = "#10B981";
    } else if (countHome < countGuest) {
        document.getElementById("title-home").style.color = "#BE123C";
        document.getElementById("title-guest").style.color = "#10B981";
    } else {
        document.getElementById("title-home").style.color = "#EEEEEE";
        document.getElementById("title-guest").style.color = "#EEEEEE";        
    }
    document.getElementById("score-guest").textContent = countGuest;
}
function addGuest3() {
    countGuest += 3;
    if (countHome > countGuest) {
        document.getElementById("title-guest").style.color = "#BE123C";
        document.getElementById("title-home").style.color = "#10B981";
    } else if (countHome < countGuest) {
        document.getElementById("title-home").style.color = "#BE123C";
        document.getElementById("title-guest").style.color = "#10B981";
    } else {
        document.getElementById("title-home").style.color = "#EEEEEE";
        document.getElementById("title-guest").style.color = "#EEEEEE";        
    }
    document.getElementById("score-guest").textContent = countGuest;
}

function reset() {
    countGuest = 0;
    countHome = 0;
    document.getElementById("score-guest").textContent = countGuest;
    document.getElementById("score-home").textContent = countHome;
    document.getElementById("title-home").style.color = "#EEEEEE";
    document.getElementById("title-guest").style.color = "#EEEEEE";    
}