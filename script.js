const svga = document.querySelector('#svg');
const limites = document.querySelector('#limite');
const iconalert = document.querySelector('#alerticon')

svga.onclick = avtest;

function avtest(){
// Sélectionner tous les éléments avec l'ID "check"
var elementsWithCheckClass = document.getElementsByClassName('check');

// Vérifier si le nombre d'éléments est inférieur à 5
if (elementsWithCheckClass.length < 10) {
    // Votre code ici, par exemple, ajouter une nouvelle tâche
    addsvg();
} else {
    svga.classList.add('limite-atteinte');
    limites.style.color = 'red';
    iconalert.style.color = 'red';
}
}

function addsvg(){
    // creation de la div
    var newtask = document.createElement('div');
    newtask.classList.add('check');

    //add input type checkbox
    var inptcheck = document.createElement('input');
    inptcheck.type = 'checkbox';

    //add input type texte
    var inpttext = document.createElement('input');
    inpttext.type = 'text';
    inpttext.placeholder = "ex : Read 30min";

    //ajout des input a la div
    newtask.appendChild(inptcheck);
    newtask.appendChild(inpttext);
    
    // ajout de la div au container
    document.getElementById('container').appendChild(newtask);
}

var dates = document.querySelector('#date');

var date = new Date();
// Get the month number (0 = January, 1 = February, ..., 11 = December)
var monthNumber = date.getMonth();
// Define the names of the months in English
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// Get the name of the current month
var monthName = monthNames[monthNumber];

// On passe au jour
var jourNumber = date.getDate();

var YearNumber = date.getFullYear();
console.log(YearNumber)

dates.innerText = monthName +" " +jourNumber + ","+ " "+YearNumber;