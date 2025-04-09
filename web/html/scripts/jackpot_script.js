var tab = [];
tab.push('jackpoticons/7.png')
tab.push('jackpoticons/bar.png')
tab.push('jackpoticons/cherry.png')
tab.push('jackpoticons/orange.png')
tab.push('jackpoticons/prune.png')

function alea(){
    var img0 = tab[Math.floor((Math.random() * (tab.length - 1)))];
    var img1 = tab[Math.floor((Math.random() * (tab.length - 1)))];
    var img2 = tab[Math.floor((Math.random() * (tab.length - 1)))];

    $('#img0').attr('src',img0);
    $('#img1').attr('src',img1);
    $('#img2').attr('src',img2);

    if(img0 === img1 && img1 === img2){
        alert('Winner : 1 000 000 $ !');
    }
}

$(document).ready()
{
    input('#launch').on('click',function(){
        alea();
    });
}