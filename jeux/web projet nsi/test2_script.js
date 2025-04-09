var tab=["jackpoticons/7.png","jackpoticons/bar.png","jackpoticons/cherry.png","jackpoticons/orange.png","jackpoticons/prune.png"];
var repeat = null;
var img0 = null;
var img1 = null;
var img2 = null;
 
function start()
{      
    start0();
    start1();
    start2();
}
 
 
function stop()
{      
    // dès qu'on clic sur stop on supprime l'interval
    clearInterval(repeat);
}

function start0()
{
    for (let pas = 0; pas < (Math.round(Math.random()*50)); pas++){
        img0 = tab[Math.round(Math.random()*4)];

        document.getElementById("img0").src = img0;
    };
    clearInterval(repeat)
}

function start1()
{
    repeat = setInterval(function(){
        img1 = tab[Math.round(Math.random()*4)];

        document.getElementById("img0").src = img1;
    }, 50);
}

function start2()
{
    repeat = setInterval(function(){
        img2 = tab[Math.round(Math.random()*4)];

        document.getElementById("img0").src = img2;
    }, 50);
}