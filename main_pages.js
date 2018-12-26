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
