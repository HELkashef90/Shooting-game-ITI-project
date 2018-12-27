//get How to play elements 
var howToPlayPupup = document.getElementById("howToPlayPupUp");
var howToPlayBtn = document.getElementById("howToPlay");

// addEventListener to display howToPlay Pupup
howToPlayBtn.addEventListener('click',showHowToPlay) ;
function showHowToPlay (){
howToPlayPupup.style.display='block' }


// close how to play pupUp
var closBtn = document.getElementById('close');
function closePupUp()
{howToPlayPupup.style.display = "none";}
closBtn.addEventListener('click',closePupUp);
///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//get story elements 
var storyPupup = document.getElementById("storyPupUp");
var storyBtn = document.getElementById("Story");

// addEventListener to display howToPlay Pupup
storyBtn.addEventListener('click',showStory) ;
function showStory (){
    storyPupup.style.display='block' }


// If user clicks anywhere outside of the pupup, Pupup will close
var storyAduio = document.getElementById("storyAudio");
var bkAduio =document.getElementById("bkAduio");
window.onclick = function(event) {
    if (event.target == howToPlayPupup || event.target == storyPupup) {
        howToPlayPupup.style.display = "none";
        // storyPupup.style.display = "none";
        // bkAduio.play() =true;
        // storyAduio.pause()=true; 
        
    }
}

// close story pupUp
var closBtn2 = document.getElementById('close2');
function closePupUp2()
{storyPupup.style.display = "none";}
closBtn2.addEventListener('click',closePupUp2);