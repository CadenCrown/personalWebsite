

//---------------------------------//
//----Curtain Panel Controller-----//
//---------------------------------//


let topCurtain = document.querySelector('.top-curtain');
let bottomCurtain = document.querySelector('.bottom-curtain');
let curtainPanel = document.getElementById('curtain-panel');

curtainDown = true;
curtainPanel.onclick = function() {
    topCurtain.classList.toggle('active');
    bottomCurtain.classList.toggle('active');
    if (curtainDown == true) {
        curtainDown = false;
    } else {
        if (checkIfAllCardsClosed(cardActivityArray)===false) {
            cardArray[getActiveCardIndex(cardActivityArray)].classList.toggle('active');
            updateCardActivityArray(getActiveCardIndex(cardActivityArray));
            cardActivityArray = [educationActive, workActive, skillsActive, hobbiesActive, gamesActive];
        }
        curtainDown = true;
    }
    console.log(curtainDown);
};

//----------------------------------------------------------------------------//
//----Cards-------------------------------------------------------------------//
//----------------------------------------------------------------------------//
var educationCard = document.getElementById('education-card');
var workCard = document.getElementById('work-card');
var skillsCard = document.getElementById('skills-card');
var hobbiesCard = document.getElementById('hobbies-card');
var gamesCard = document.getElementById('games-card');
var cardArray = [educationCard, workCard, skillsCard, hobbiesCard, gamesCard];

var educationActive = false;
var workActive = false;
var skillsActive = false;
var hobbiesActive = false;
var gamesActive = false;
var cardActivityArray = [educationActive, workActive, skillsActive, hobbiesActive, gamesActive];


function checkIfAllCardsClosed(inputArray) {
    var checker = arr => arr.every(val => val === false);
    return checker(inputArray)
}

function getActiveCardIndex(inputArray) {
    for (let i=0; i<inputArray.length; i++) {
        if(inputArray[i]===true) {
            var activeCardIndex = i;
        } else {
            continue
        }
    }
    return activeCardIndex
}

function updateCardActivityArray(index) {
    if (index === 0) {
        educationActive = false;
    } else if (index === 1) {
        workActive = false;
    } else if (index === 2) {
        skillsActive = false;
    } else if (index === 3) {
        hobbiesActive = false;
    } else if (index === 4) {
        gamesActive = false;
    }
}


//---------------------------------//
//----Education Card Controller----//
//---------------------------------//
let educationIcon = document.getElementById('education-icon');
educationIcon.onclick = function() {
    if (curtainDown == true) {
        topCurtain.classList.toggle('active');
        bottomCurtain.classList.toggle('active');
        curtainDown = false;
    }
    if (checkIfAllCardsClosed(cardActivityArray)===false) {
        cardArray[getActiveCardIndex(cardActivityArray)].classList.toggle('active');
        updateCardActivityArray(getActiveCardIndex(cardActivityArray));
    }
    educationActive = true;
    cardActivityArray = [educationActive, workActive, skillsActive, hobbiesActive, gamesActive];
    educationCard.classList.toggle('active');
}

//---------------------------------//
//----Work Card Controller---------//
//---------------------------------//
let workIcon = document.getElementById('work-icon');
workIcon.onclick = function() {
    if (curtainDown == true) {
        topCurtain.classList.toggle('active');
        bottomCurtain.classList.toggle('active');
        curtainDown = false;
    }
    if (checkIfAllCardsClosed(cardActivityArray)===false) {
        cardArray[getActiveCardIndex(cardActivityArray)].classList.toggle('active');
        updateCardActivityArray(getActiveCardIndex(cardActivityArray));
    }
    workActive = true;
    cardActivityArray = [educationActive, workActive, skillsActive, hobbiesActive, gamesActive];
    workCard.classList.toggle('active');
}

//---------------------------------//
//----Skills Card Controller-------//
//---------------------------------//
let skillsIcon = document.getElementById('skills-icon');
skillsIcon.onclick = function() {
    if (curtainDown == true) {
        topCurtain.classList.toggle('active');
        bottomCurtain.classList.toggle('active');
        curtainDown = false;
    }
    if (checkIfAllCardsClosed(cardActivityArray)===false) {
        cardArray[getActiveCardIndex(cardActivityArray)].classList.toggle('active');
        updateCardActivityArray(getActiveCardIndex(cardActivityArray));
    }
    skillsActive = true;
    cardActivityArray = [educationActive, workActive, skillsActive, hobbiesActive, gamesActive];
    skillsCard.classList.toggle('active');
}

//---------------------------------//
//----Hobbies Card Controller------//
//---------------------------------//
let hobbiesIcon = document.getElementById('hobbies-icon');
hobbiesIcon.onclick = function() {
    if (curtainDown == true) {
        topCurtain.classList.toggle('active');
        bottomCurtain.classList.toggle('active');
        curtainDown = false;
    }
    if (checkIfAllCardsClosed(cardActivityArray)===false) {
        cardArray[getActiveCardIndex(cardActivityArray)].classList.toggle('active');
        updateCardActivityArray(getActiveCardIndex(cardActivityArray));
    }
    hobbiesActive = true;
    cardActivityArray = [educationActive, workActive, skillsActive, hobbiesActive, gamesActive];
    hobbiesCard.classList.toggle('active');
}

//---------------------------------//
//----Games Card Controller--------//
//---------------------------------//
let gamesIcon = document.getElementById('games-icon');
gamesIcon.onclick = function() {
    if (curtainDown == true) {
        topCurtain.classList.toggle('active');
        bottomCurtain.classList.toggle('active');
        curtainDown = false;
    }
    if (checkIfAllCardsClosed(cardActivityArray)===false) {
        cardArray[getActiveCardIndex(cardActivityArray)].classList.toggle('active');
        updateCardActivityArray(getActiveCardIndex(cardActivityArray));
    }
    gamesActive = true;
    cardActivityArray = [educationActive, workActive, skillsActive, hobbiesActive, gamesActive];
    gamesCard.classList.toggle('active');
}
