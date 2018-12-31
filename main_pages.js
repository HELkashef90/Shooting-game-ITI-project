// get credits pupup elements
var creditsPupup = document.getElementById("creditsPupUp");
var creditsBtn = document.getElementById("creditsBtn");

// addEventListener to display credits Pupup
creditsBtn.addEventListener('click',showCredit) ;
function showCredit (){
creditsPupup.style.display='block' }

// If user clicks anywhere outside of the pupup, Pupup will close
var Pupup = document.getElementById('creditsPupUp');
window.onclick = function(event) {
    if (event.target == Pupup) {
        Pupup.style.display = "none";
    }
}

// close credits  pupUp
var closBtn = document.getElementById('close');
function closePupUp()
{Pupup.style.display = "none";}
closBtn.addEventListener('click',closePupUp);
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
// close welcome pupUp
var welcomePupup = document.getElementById("welcomePupUp");
var closBtn2 = document.getElementById('close3');
// var welcomeBtn = document.getElementById("letsStartBtn"); 
function closePupUp2()
{welcomePupup.style.display = "none";}
// welcomeBtn.addEventListener('click',closePupUp2);
 closBtn2.addEventListener('click',closePupUp2);
/////////////////////////////////////////////////////////
//close gamePopup 
var gamePupup = document.getElementById("gamePupUp");
var closBtn4 = document.getElementById('close4');
function closePupUp4()
{gamePupup.style.display = "none";}
closBtn4.addEventListener('click',closePupUp4);