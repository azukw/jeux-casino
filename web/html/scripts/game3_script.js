var x = 0;
var bingo = false;
var timer = 0;
var validation = false;
var WoL = null; // Win Or Lose, 'true' pour win et 'false' pour lose
let randomlist = [];
let checked = ['middle'];
let tirees = [];
var betmoneyvar = 10;
var walletmoneyvar = 100;
let hist = [];


function randomNb() {
    var min = 1;
    var max = 50;
    var random = Math.floor(Math.random() * (max - min)) + min;
    document.write("<h2>" + random + "</h2>");
    randomlist.push(random);
};

function changeColor(div) {
    if ((div.style.background == "rgba(255, 22, 22, 0.7)") == true) {
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

    if ((((checked.indexOf('1')!==-1) && (checked.indexOf('2')!==-1) && (checked.indexOf('3')!==-1) && (checked.indexOf('4')!==-1) && (checked.indexOf('5')!==-1))  &&  ((verification(randomlist[0])==true) && (verification(randomlist[1])==true) && (verification(randomlist[2])==true) && (verification(randomlist[3])==true) && (verification(randomlist[4])==true))) || (((checked.indexOf('6')!==-1) && (checked.indexOf('7')!==-1) && (checked.indexOf('8')!==-1) && (checked.indexOf('9')!==-1) && (checked.indexOf('10')!==-1))  &&  ((verification(randomlist[5])==true) && (verification(randomlist[6])==true) && (verification(randomlist[7])==true) && (verification(randomlist[8])==true) && (verification(randomlist[9])==true))) || (((checked.indexOf('11')!==-1) && (checked.indexOf('12')!==-1) && (checked.indexOf('middle')!==-1) && (checked.indexOf('14')!==-1) && (checked.indexOf('15')!==-1))  &&  ((verification(randomlist[10])==true) && (verification(randomlist[11])==true) && (verification(randomlist[12])==true) && (verification(randomlist[13])==true) && (verification(randomlist[14])==true))) || (((checked.indexOf('16')!==-1) && (checked.indexOf('17')!==-1) && (checked.indexOf('18')!==-1) && (checked.indexOf('19')!==-1) && (checked.indexOf('20')!==-1))  &&  ((verification(randomlist[15])==true) && (verification(randomlist[16])==true) && (verification(randomlist[17])==true) && (verification(randomlist[18])==true) && (verification(randomlist[19])==true))) || (((checked.indexOf('21')!==-1) && (checked.indexOf('22')!==-1) && (checked.indexOf('23')!==-1) && (checked.indexOf('24')!==-1) && (checked.indexOf('25')!==-1))  &&  ((verification(randomlist[20])==true) && (verification(randomlist[21])==true) && (verification(randomlist[22])==true) && (verification(randomlist[23])==true) && (verification(randomlist[24])==true))) || (((checked.indexOf('1')!==-1) && (checked.indexOf('6')!==-1) && (checked.indexOf('11')!==-1) && (checked.indexOf('16')!==-1) && (checked.indexOf('21')!==-1))  &&  ((verification(randomlist[0])==true) && (verification(randomlist[5])==true) && (verification(randomlist[10])==true) && (verification(randomlist[15])==true) && (verification(randomlist[20])==true))) || (((checked.indexOf('2')!==-1) && (checked.indexOf('7')!==-1) && (checked.indexOf('12')!==-1) && (checked.indexOf('17')!==-1) && (checked.indexOf('22')!==-1))  &&  ((verification(randomlist[1])==true) && (verification(randomlist[6])==true) && (verification(randomlist[11])==true) && (verification(randomlist[16])==true) && (verification(randomlist[21])==true))) || (((checked.indexOf('3')!==-1) && (checked.indexOf('8')!==-1) && (checked.indexOf('middle')!==-1) && (checked.indexOf('18')!==-1) && (checked.indexOf('23')!==-1))  &&  ((verification(randomlist[2])==true) && (verification(randomlist[7])==true) && (verification(randomlist[12])==true) && (verification(randomlist[17])==true) && (verification(randomlist[22])==true))) || (((checked.indexOf('4')!==-1) && (checked.indexOf('9')!==-1) && (checked.indexOf('14')!==-1) && (checked.indexOf('19')!==-1) && (checked.indexOf('24')!==-1))  &&  ((verification(randomlist[3])==true) && (verification(randomlist[8])==true) && (verification(randomlist[13])==true) && (verification(randomlist[18])==true) && (verification(randomlist[23])==true))) || (((checked.indexOf('5')!==-1) && (checked.indexOf('10')!==-1) && (checked.indexOf('15')!==-1) && (checked.indexOf('20')!==-1) && (checked.indexOf('25')!==-1))  &&  ((verification(randomlist[4])==true) && (verification(randomlist[9])==true) && (verification(randomlist[14])==true) && (verification(randomlist[19])==true) && (verification(randomlist[24])==true))) || (((checked.indexOf('1')!==-1) && (checked.indexOf('7')!==-1) && (checked.indexOf('middle')!==-1) && (checked.indexOf('19')!==-1) && (checked.indexOf('25')!==-1))  &&  ((verification(randomlist[0])==true) && (verification(randomlist[6])==true) && (verification(randomlist[12])==true) && (verification(randomlist[18])==true) && (verification(randomlist[24])==true))) || (((checked.indexOf('5')!==-1) && (checked.indexOf('9')!==-1) && (checked.indexOf('middle')!==-1) && (checked.indexOf('17')!==-1) && (checked.indexOf('21')!==-1))  &&  ((verification(randomlist[4])==true) && (verification(randomlist[8])==true) && (verification(randomlist[12])==true) && (verification(randomlist[16])==true) && (verification(randomlist[20])==true)))) {
        var bingobutton = document.getElementById("bingobutton");
        bingobutton.style.opacity = "1";
        bingobutton.style.visibility = "visible";
    } else {
        var bingobutton = document.getElementById("bingobutton");
        bingobutton.style.opacity = "0";
        bingobutton.style.visibility = "hidden";
    }
};

function bingo_f() {
    WoL = true;
    var bingobutton = document.getElementById("bingobutton");
    var end = document.getElementById("end");
    var endScreen = document.getElementById("endScreen");
    bingobutton.style.backgroundColor = "rgba(155, 22, 22, 0.5)";
    bingobutton.style.pointerEvents = "none";

    if (WoL === true) {
        clearAllInterval();
        const msgfin = document.getElementById('msgfin');
        endScreen.style.backgroundColor = "rgba(200, 30, 30, 0.9)"
        endScreen.style.opacity = "1";
        endScreen.style.visibility = "visible";
        end.style.opacity = "1";
        end.style.visibility = "visible";
        msgfin.innerHTML = '<span> YOU WIN! </span>';
        reset_tirage();
    }
};

function tirage() {
    var tirage = document.getElementById("tirage");
    var min = 1;
    var max = 50;
    var random = Math.floor(Math.random() * (max - min)) + min;
    tirees.push(random)
    tirage.innerHTML = random;
    historique(random);
    var button = document.getElementById("placebutton");
    button.style.pointerEvents = 'none'
    timer++;

    if (timer > 50) {
        clearInterval('1');
        clearAllInterval();
        var tirage = document.getElementById("tirage");
        tirage.innerHTML = "00";
        var button = document.getElementById("placebutton");
        button.style.pointerEvents = 'all'
        timer = 0;
        tirees = [];
        WoL = false;
        if (WoL === false) {
            var msgfin = document.getElementById('msgfin');
            endScreen.style.backgroundColor = "rgba(150, 140, 150, 0.9";
            endScreen.style.opacity = "1";
            endScreen.style.visibility = "visible";
            end.style.opacity = "1";
            end.style.visibility = "visible";
            msgfin.innerHTML = '<span> PERDU! </span>';
        }
    }
};

function delayTirage() {
    setTimeout(tirage, 1000);
}

function verification(tested) {
    for(var i = 0; i < (tirees.length + 1); i++) {
        if(tested == tirees[i]) {
            return true;
        } 
    }
};

function game() {
    var placebutton = document.getElementById('placebutton');
    var morebutton = document.getElementById('more');
    var minusbutton = document.getElementById('minus');
    var go = document.getElementById('tirage');
    placebutton.style.pointerEvents = "none";
    placebutton.style.backgroundColor = "#222"
    morebutton.style.pointerEvents = "none";
    morebutton.style.backgroundColor = "#222"
    minusbutton.style.pointerEvents = "none";
    minusbutton.style.backgroundColor = "#222"
    countdown();
};

function clearAllInterval() {
    for (var i = 0; i < 10; i++) {
        clearInterval(i);
    }
};

function clearAllTimeout() {
    for (var i = 0; i < 10; i++) {
        clearTimeout(i);
    }
    return true
}

function exitEnd() {
    var end = document.getElementById("end");
    var endScreen = document.getElementById("endScreen");
    var bingobutton = document.getElementById("bingobutton");
    end.style.opacity = "0";
    end.style.visibility = "hidden";
    endScreen.style.opacity = "0";
    endScreen.style.visibility = "hidden";
    bingobutton.style.backgroundColor = "";
    bingobutton.style.pointerEvents = "all";
    bingobutton.style.opacity = "";
    bingobutton.style.visibility = "";
    window.location.reload();
};

function exitReload() {
    var reload = document.getElementById("reload");
    var reloadScreen = document.getElementById("reloadScreen");
    reload.style.opacity = "";
    reload.style.visibility = "";
    reloadScreen.style.opacity = "";
    reloadScreen.style.visibility = "";
}

function reloadPage() {
    var reload = document.getElementById("reload");
    var reloadScreen = document.getElementById("reloadScreen");
    reload.style.opacity = "1";
    reload.style.visibility = "visible";
    reloadScreen.style.opacity = "1";
    reloadScreen.style.visibility = "visible";
};

function reset_tirage() {
    var tirage = document.getElementById("tirage");
    var min = 0;
    var max = 0;
    var random = Math.floor(Math.random() * (max - min)) + min;
    var button = document.getElementById("start");
    button.style.pointerEvents = 'none'
    timer++;

    if (timer > 2) {
        clearInterval('1');
        clearAllInterval();
        var tirage = document.getElementById("tirage");
        tirage.innerHTML = "00";
        var button = document.getElementById("placebutton");
        button.style.pointerEvents = 'all'
        timer = 0;
        tirees = [];
    }
};

function betmore() {
    const betmoney = document.getElementById("bet_money");
    const walletmoney = document.getElementById("wallet_money");
    if (walletmoneyvar >= 10) {
        betmoneyvar = betmoneyvar + 10;
        walletmoneyvar = walletmoneyvar - 10;
        betmoney.innerHTML = betmoneyvar;
        walletmoney.innerHTML = walletmoneyvar;
    }

    var placebutton = document.getElementById('placebutton');
    if (betmoneyvar !== 0) {
        placebutton.style.backgroundColor = ""
        placebutton.style.pointerEvents = "all"
    }
};

function betminus() {
    const betmoney = document.getElementById("bet_money");
    const walletmoney = document.getElementById("wallet_money");
    if (betmoneyvar >= 10) {
        betmoneyvar = betmoneyvar - 10;
        walletmoneyvar = walletmoneyvar + 10;
        betmoney.innerHTML = betmoneyvar;
        walletmoney.innerHTML = walletmoneyvar;
    }

    var placebutton = document.getElementById('placebutton');
    if (betmoneyvar == 0) {
        placebutton.style.backgroundColor = "#222"
        placebutton.style.pointerEvents = "none"
    }
};

function paddedFormat(num) {
    return num < 10 ? "0" + num : num;
}

function countdown() {
    var chrono = document.getElementById('chrono');
    let secondsRemaining = 8;

    let countInterval = setInterval(function() {
        chrono.innerHTML = "00:0"+secondsRemaining;
        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining <= -1) { 
            clearInterval(countInterval);
            tirage();
        };
    }, 1000);

    setTimeout(countdown, 9000);
};

function historique(x){
    var hp1 = document.getElementById("hp1");
    var hp2 = document.getElementById("hp2");
    var hp3 = document.getElementById("hp3");
    var hp4 = document.getElementById("hp4");
    var hp5 = document.getElementById("hp5");

    hist.unshift(x);
    if(hist.length > 6){
        hist.pop()
    };

    if(hist.length==1){
        hp1.innerHTML = "00";
        hp1.style.opacity = "0";
        hp2.innerHTML = "00";
        hp2.style.opacity = "0";
        hp3.innerHTML = "00";
        hp3.style.opacity = "0";
        hp4.innerHTML = "00";
        hp4.style.opacity = "0";
        hp5.innerHTML = "00";
        hp5.style.opacity = "0";
    } else if(hist.length==2){
        hp1.style.opacity = "";
        hp1.innerHTML = hist[1];
    } else if(hist.length==3){
        hp2.style.opacity = "";
        hp1.innerHTML = hist[1];
        hp2.innerHTML = hist[2];
    } else if(hist.length==4){
        hp3.style.opacity = "";
        hp1.innerHTML = hist[1];
        hp2.innerHTML = hist[2];
        hp3.innerHTML = hist[3];
    } else if(hist.length==5){
        hp4.style.opacity = "";
        hp1.innerHTML = hist[1];
        hp2.innerHTML = hist[2];
        hp3.innerHTML = hist[3];
        hp4.innerHTML = hist[4];
    } else if(hist.length==6){
        hp5.style.opacity = "";
        hp1.innerHTML = hist[1];
        hp2.innerHTML = hist[2];
        hp3.innerHTML = hist[3];
        hp4.innerHTML = hist[4];
        hp5.innerHTML = hist[5];
    }
};