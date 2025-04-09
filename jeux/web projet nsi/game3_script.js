var x = 0;
var bingo = false;
var timer = 0;
var validation = false;
let randomlist = [];
let checked = ['middle'];
let tirees = [];

function randomNb() {
    var min = 1;
    var max = 50;
    var random = Math.floor(Math.random() * (max - min)) + min;
    document.write("<h2>" + random + "</h2>");
    randomlist.push(random);
    console.log(randomlist, randomlist);
};

function changeColor(div) {
    if (div.style.background == "rgba(255, 22, 22, 0.7)" == true) {
        div.style.background = "rgba(255, 255, 255, 0.1)";
        x--;
        var removed = checked.indexOf(div.id);
        if (removed !== -1) {
            checked.splice(removed, 1);
        }
    } else {
        div.style.background = "rgba(255, 22, 22, 0.7)";
        x++;
        checked.push(div.id);
    }
    console.log(x, bingo, div.id, checked);

    // le 'if' est à réécrire correctement et ensuite c'est bon
    if((((checked.indexOf('1') !== -1) && (checked.indexOf('2') !== -1) && (checked.indexOf('3') !== -1) && (checked.indexOf('4') !== -1) && (checked.indexOf('5') !== -1)) && ((verification(randomlist[0]) == true) && (verification(randomlist[1]) == true) && (verification(randomlist[2]) == true) && (verification(randomlist[3]) == true) && (verification(randomlist[4]) == true))) || (((checked.indexOf('6') !== -1) && (checked.indexOf('7') !== -1) && (checked.indexOf('8') !== -1) && (checked.indexOf('9') !== -1) && (checked.indexOf('10') !== -1)) && ((verification(randomlist[5]) == true) && (verification(randomlist[6]) == true) && (verification(randomlist[7]) == true) && (verification(randomlist[8]) == true) && (verification(randomlist[9]) == true))) || (((checked.indexOf('11') !== -1) && (checked.indexOf('12') !== -1) && (checked.indexOf('middle') !== -1) && (checked.indexOf('14') !== -1) && (checked.indexOf('15') !== -1)) && ((verification(randomlist[10]) == true) && (verification(randomlist[11]) == true) && (verification(randomlist[12]) == true) && (verification(randomlist[13]) == true) && (verification(randomlist[14]) == true))) || (((checked.indexOf('16') !== -1) && (checked.indexOf('17') !== -1) && (checked.indexOf('18') !== -1) && (checked.indexOf('19') !== -1) && (checked.indexOf('20') !== -1)) && ((verification(randomlist[15]) == true) && (verification(randomlist[16]) == true) && (verification(randomlist[17]) == true) && (verification(randomlist[18]) == true) && (verification(randomlist[19]) == true))) || (((checked.indexOf('21') !== -1) && (checked.indexOf('22') !== -1) && (checked.indexOf('23') !== -1) && (checked.indexOf('24') !== -1) && (checked.indexOf('25') !== -1)) && ((verification(randomlist[20]) == true) && (verification(randomlist[21]) == true) && (verification(randomlist[22]) == true) && (verification(randomlist[23]) == true) && (verification(randomlist[24]) == true)))  || (((checked.indexOf('1') !== -1) && (checked.indexOf('6') !== -1) && (checked.indexOf('11') !== -1) && (checked.indexOf('16') !== -1) && (checked.indexOf('21') !== -1)) && ((verification(randomlist[0]) == true) && (verification(randomlist[10]) == true) && (verification(randomlist[15]) == true) && (verification(randomlist[23]) == true) && (verification(randomlist[24]) == true))) || (((checked.indexOf('2') !== -1) && (checked.indexOf('7') !== -1) && (checked.indexOf('12') !== -1) && (checked.indexOf('17') !== -1) && (checked.indexOf('22') !== -1)) && ((verification(randomlist[0]) == true) && (verification(randomlist[5]) == true) && (verification(randomlist[10]) == true) && (verification(randomlist[15]) == true) && (verification(randomlist[20]) == true))) || (((checked.indexOf('3') !== -1) && (checked.indexOf('8') !== -1) && (checked.indexOf('middle') !== -1) && (checked.indexOf('18') !== -1) && (checked.indexOf('23') !== -1)) && ((verification(randomlist[1]) == true) && (verification(randomlist[6]) == true) && (verification(randomlist[11]) == true) && (verification(randomlist[16]) == true) && (verification(randomlist[21]) == true))) || (((checked.indexOf('4') !== -1) && (checked.indexOf('9') !== -1) && (checked.indexOf('14') !== -1) && (checked.indexOf('19') !== -1) && (checked.indexOf('24') !== -1)) && ((verification(randomlist[2]) == true) && (verification(randomlist[7]) == true) && (verification(randomlist[12]) == true) && (verification(randomlist[17]) == true) && (verification(randomlist[22]) == true))) || (((checked.indexOf('5') !== -1) && (checked.indexOf('10') !== -1) && (checked.indexOf('15') !== -1) && (checked.indexOf('20') !== -1) && (checked.indexOf('25') !== -1)) && ((verification(randomlist[3]) == true) && (verification(randomlist[8]) == true) && (verification(randomlist[13]) == true) && (verification(randomlist[18]) == true) && (verification(randomlist[23]) == true))) || (((checked.indexOf('1') !== -1) && (checked.indexOf('7') !== -1) && (checked.indexOf('middle') !== -1) && (checked.indexOf('19') !== -1) && (checked.indexOf('25') !== -1)) && ((verification(randomlist[4]) == true) && (verification(randomlist[9]) == true) && (verification(randomlist[14]) == true) && (verification(randomlist[19]) == true) && (verification(randomlist[24]) == true))) || (((checked.indexOf('5') !== -1) && (checked.indexOf('9') !== -1) && (checked.indexOf('middle') !== -1) && (checked.indexOf('17') !== -1) && (checked.indexOf('21') !== -1)))) {
        var bingobutton = document.getElementById("bingobutton");
        bingobutton.style.opacity = "1";
        bingobutton.style.visibility = "visible";
    } else {
        var bingobutton = document.getElementById("bingobutton");
        bingobutton.style.opacity = "0";
        bingobutton.style.visibility = "hidden";
    }
};

// et je dois finir cette fonction du bingo qui marque la fin qd tu gagnes (faut je fasse quand tu perds aussi)
function bingo_f() {
    var bingobutton = document.getElementById("bingobutton");
    bingobutton.style.backgroundColor = "#fff"
};

function tirage() {
    var tirage = document.getElementById("tirage");
    var min = 1;
    var max = 50;
    var random = Math.floor(Math.random() * (max - min)) + min;
    tirees.push(random)
    tirage.innerHTML = random;
    var button = document.getElementById("start");
    button.style.pointerEvents = 'none'
    timer++;
    console.log(tirees);
    if (timer > 50) {
        clearInterval('1');
        var tirage = document.getElementById("tirage");
        tirage.innerHTML = "START";
        var button = document.getElementById("start");
        button.style.pointerEvents = 'all'
        timer = 0;
        tirees = [];
    }
};

function verification(tested) {
    for(var i = 0; i < (tirees.length + 1); i++) {
        if(tested == tirees[i]) {
            return true;
        } 
    }
};