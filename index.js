

//---------------------------------//
//----Curtain Panel Controller-----//
//---------------------------------//


let topCurtain = document.querySelector('.top-curtain');
let bottomCurtain = document.querySelector('.bottom-curtain');
let curtainPanel = document.querySelector('.curtain-panel');

function toggleCurtain() {
    topCurtain.classList.toggle('active');
    bottomCurtain.classList.toggle('active');
}
curtainPanel.addEventListener('click', toggleCurtain())



let icon = document.getElementById('icon-1');
icon.onclick = function() {
    let oneCard = document.querySelector('.one-card');
    oneCard.classList.toggle('active');
    toggleCurtain()
}