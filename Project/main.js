
const img = document.getElementById('firstImage');
const colors = document.getElementsByClassName('skateColor');

const choiceTypeMoves = { Dance: 120, Skate: 150 };
const colorChoice = { white: 0, pink: 0, purple: 0, black: 0, brown: 0 };
let price = 0;


for (let i = 0; i < colors.length; i++) {
    let color = colors[i];

    color.addEventListener('click', function () {
        img.setAttribute('src', 'images/' + this.id + '.png')
    })
}
const elementTotal = document.getElementById('total');


function showDance() {
    document.getElementById('danceDetails').style.display = "block";
    document.getElementById('skateDetails').style.display = "none";
}

function showSkate() {
    document.getElementById('skateDetails').style.display = "block";
    document.getElementById('danceDetails').style.display = "none"
}

let buttons = [];

["danceChoice", "skateChoice"].forEach(id => buttons.push(document.getElementById(id)));

buttons.forEach(button => button.addEventListener('click', updateChoice));



document.getElementById("danceChoice").addEventListener('click', showDance);

document.getElementById("skateChoice").addEventListener('click', showSkate);

const receit = {};

function addFromReceit(receit) {
    const costs = Object.values(receit)
    let totalCost = 0;
    for (let i = 0; i < costs.length; i++) totalCost += costs[i];

    return totalCost;
    //return Object.values(receit).reduce((acc,next)=> acc+=next,0)
}


function updateChoice(e) {
    const choice = e.target.name;
    const value = e.target.value;

    receit[choice] = choiceTypeMoves[value];


    elementTotal.textContent = addFromReceit(receit);

}

