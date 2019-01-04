var lvl1=document.getElementById('lvl1');
var lvl2=document.getElementById('lvl2');
var lvl3=document.getElementById('lvl3');
var bdg1=document.getElementById('bdg1');
var bdg2=document.getElementById('bdg2');
var bdg3=document.getElementById('bdg3');
var pl1=document.getElementById('pl1');
var pl2=document.getElementById('pl2');
var pl3=document.getElementById('pl3');
var policeChar=document.getElementById('police');
var policeContain=document.getElementById('policeContainer');
var speed=2000;
var levelchoice=1;
function makepl1(){
  window.speed=2000
  levelchoice=1;
  lvl1.style.border="2px solid red";
  lvl2.style.border="none";
  lvl3.style.border="none";
}
function makepl2(){
  window.speed=1500
  levelchoice=2;
  lvl2.style.border="2px solid red";
  lvl1.style.border="none";
  lvl3.style.border="none";}
function makepl3(){
  window.speed=1000
  levelchoice=3;
  lvl3.style.border="2px solid red";
  lvl1.style.border="none";
  lvl2.style.border="none";}
function modchar1(){
  policeChar.src="assets\\police\\police1.png";
  pl1.style.border="2px solid red";
  pl2.style.border="none";
  pl3.style.border="none";
}
function modchar2(){
  policeChar.src="assets\\police\\police2.png";
  pl2.style.border="2px solid red";
  pl1.style.border="none";
  pl3.style.border="none";
}
function modchar3(){
  policeChar.src="assets\\police\\police3.png";
  pl3.style.border="2px solid red";
  pl2.style.border="none";
  pl1.style.border="none";
}
lvl1.addEventListener('click',makepl1);
lvl2.addEventListener('click',makepl2);
lvl3.addEventListener('click',makepl3);
pl1.addEventListener('click',modchar1);
pl2.addEventListener('click',modchar2);
pl3.addEventListener('click',modchar3);

function starterFunc(){
//to get user name
var username=document.getElementById('username').value;
var nameOnPop=document.getElementById('name');
nameOnPop.innerHTML = username;
console.log(username);
var bkAudio=document.getElementById("bkAduio");
bkAudio.play();
var mainPicture=document.getElementById('first')
var policeAppearance=5;
var random
var lastrandom
var countOfAppearance;
var checkCountOfAppearance;
var policeFlag=0
var previousNumber
var thiefFlag=0
var click=1
var numberOfHeart;
var numberOfRemain=7;


//object to get random numbers
var randomObj={
  ran:function ()
  {    while ( lastrandom === random ) {
      random = Math.floor(Math.random() * 19) + 1; }
  lastrandom = random;
  return random},
}
var randomNumber=randomObj.ran()
//array of object positions 
var posArr=[
  /********************* AWL OMARA ********************************** */
  /*----------------- 1st floor--------------------------*/
  "display:block;z-index: 0;  left:22.73%;position: absolute; top: 23.25%",
  "display:block;z-index: 0;  left:28.4%;position: absolute; top: 23.25%",
  /* 2nd floor*/
  "display:block;z-index: 0;  left:22.73%;position: absolute; top: 31.25%",
  "display:block;z-index: 0;  left:25.5%;position: absolute; top: 31.25%",
  /* 3rd floor */
  "display:block;z-index: 0;  left:19.75%;position: absolute; top: 39%",
  "display:block;z-index: 0;  left:22.73%;position: absolute; top: 39%",
  /*4th floor*/
  "display:block;z-index: 0;  left:22.73%;position: absolute; top: 47.25%",
  "display:block;z-index: 0;  left:28.4%;position: absolute; top: 47.25%",

  /*6th floor*/
  "display:block;z-index: 0;  left:22.73%;position: absolute; top: 64%",  // 2nd window
  "display:block;z-index: 0;  left:28.4%;position: absolute; top: 64%", // 4th window 
 /******************* Tany Omara *************************************** */
 /*1st floor*/
 "display:block;z-index: 0; left:51.75%;position: absolute; top: 61.15%", 
 "display:block;z-index: 0; left:57.75%;position: absolute; top: 61.15%",
 /*2nd floor */ 
 "display:block;z-index: 0; left:51.75%;position: absolute; top: 69.75%", // 2nd window
 "display:block;z-index: 0; left:54.8%;position: absolute; top: 69.75%",  //  3rd window
 /*3rd floor */  
 "display:block;z-index: 0; left:51.75%;position: absolute; top: 78%", //2nd window
 /* 4th floor */
 "display:block;z-index: 0; left:57.75%;position: absolute; top: 87%", // 4th window
 /******************* Talt Omara *************************************** */
 /*1st floor */
 "display:block;z-index: 0; left: 82%;position: absolute; top: 40.25%",
 /*2nd floor */ 
 "display:block;z-index: 0; left: 72.25%;position: absolute; top: 53%",//1st window
 "display:block;z-index: 0; left: 77%;position: absolute; top: 53%",
 /*3rd floor */ 
 "display:block;z-index: 0; left: 77%;position: absolute; top: 66%",//2nd window
 "display:block;z-index: 0; left: 82%;position: absolute; top: 66%",//3rd window
 
]
//to check random number
console.log(randomNumber)
//function to change target
function changeTarget()
{ 
mainPicture.addEventListener("click", increaseCount);
mainPicture.style=posArr[randomNumber]
//click=0;
}
//function to check click then increase score
function increaseCount() {

  var score = document.getElementById('score');
  var number = score.innerHTML;
  var heart = document.getElementById('heart');
  numberOfHeart = heart.innerHTML;  
  click=1;
  //condition of thief shooting
  if(checkCountOfAppearance==countOfAppearance && policeFlag==0)
  {number++;
  checkCountOfAppearance++;
  // mainPicture.style.display='none';
  mainPicture.src='thief2.png';
  var shootAudio =document.getElementById("shootAduio");
  shootAudio.play();
  }
  //condition of police shooting
  if(checkCountOfAppearance==countOfAppearance && policeFlag==1)
  {
  checkCountOfAppearance++;
  mainPicture.src='assets\\imgs\\blood.png'
  policeFlag=0;
  numberOfHeart--;
  var shootAudio =document.getElementById("shootAduio");
  shootAudio.play();
  }
  score.innerHTML = number;
  heart.innerHTML = numberOfHeart;
}
//speed of appearance

//object to distribute timing to functions
var timeObj={
  all:function()
  { //change of thief pic
    document.getElementById("bdg1").src="assets\\badges\\badge1g.png";
    document.getElementById("bdg2").src="assets\\badges\\badge2g.png";
    document.getElementById("bdg3").src="assets\\badges\\badge3g.png";
    mainPicture.src='thief.png'
    countOfAppearance=0;
    var remain = document.getElementById('remain');
    numberOfRemain = remain.innerHTML;
    numberOfRemain--;
    remain.innerHTML = numberOfRemain;
    console.log(numberOfRemain)
    if(numberOfRemain==0)
    {
      bkAudio.pause();
      userStyling.style.display= "none"; 
      policeContain.style.display="none";
      var winPop=document.getElementById("winPopUp");
      if(levelchoice==1)
      {
            document.getElementById("bdg1").src="assets\\badges\\badge1.png";
	    document.getElementById("bdg2").src="assets\\badges\\badge2g.png";
	    document.getElementById("bdg3").src="assets\\badges\\badge3g.png";
      }
      else if (levelchoice==2)
      {
            document.getElementById("bdg1").src="assets\\badges\\badge1.png";
	    document.getElementById("bdg2").src="assets\\badges\\badge2.png";
	    document.getElementById("bdg3").src="assets\\badges\\badge3g.png";
      }
      else
      {
            document.getElementById("bdg1").src="assets\\badges\\badge1.png";
	    document.getElementById("bdg2").src="assets\\badges\\badge2.png";
	    document.getElementById("bdg3").src="assets\\badges\\badge3.png";
      }
      winPop.style.display="block";
      var winAudio = document.getElementById("winAduio");
      winAudio.play();
      clearInterval(myVar2);
      mainPicture.src='empty.png';
      if(numberOfHeart>1&&window.speed==2000)
      {
        bdg1.src='assets\\badges\\badge1.png'
      }
      if(numberOfHeart>1&&window.speed==1500)
      {
        bdg1.src='assets\\badges\\badge1.png'
        bdg2.src='assets\\badges\\badge2.png'
      }
      if(numberOfHeart>1&&window.speed==1000)
      {
        bdg1.src='assets\\badges\\badge1.png'
        bdg2.src='assets\\badges\\badge2.png'
        bdg3.src='assets\\badges\\badge3.png'
      }
    }
    checkCountOfAppearance=0;
    randomNumber=randomObj.ran()
    if(click==0 && policeFlag==0)
    {
      var heart = document.getElementById('heart');
      numberOfHeart = heart.innerHTML;
      numberOfHeart--; 
      heart.innerHTML = numberOfHeart;
    }
    if (numberOfHeart==0)
    {
      bkAudio.pause();
      userStyling.style.display= "none"; 
      policeContain.style.display="none";
      var losePop=document.getElementById("lossPopUp");
      losePop.style.display="block";
      var lossAudio = document.getElementById("lossAduio");
      clearInterval(myVar2);
      mainPicture.src='empty.png';
      lossAudio.play();}
      
      policeFlag=0;
    //condition to display police officer
    if ((policeAppearance>0 && randomNumber/5==1 )||(policeAppearance>0 && randomNumber/3==1 )||(policeAppearance>0 && randomNumber/11==1 ))
    {
      mainPicture.src='assets\\police\\police4.png'
      policeAppearance--;
      policeFlag=1;
    }
    click=0;
    myVar=setTimeout(changeTarget,speed*0) 

    console.log(randomNumber)
  },
}
 myVar2=setInterval(timeObj.all,speed)
}
//close gamePopup 
var gamePupup = document.getElementById("gamePupUp");
var userStyling = document.getElementById("userInfoStyling");
var closBtn4 = document.getElementById('close4');
var userform =document.forms;
userform=userform[0];
var cb=function(e){
  e.preventDefault();
}
userForm.addEventListener('submit',cb);

function closePupUp4()
{
  var inputname = document.getElementById("username").value;
  var warningmsg=document.getElementById("warning");
  if(inputname!="")
  {
  gamePupup.style.display = "none";
  userStyling.style.display= "block"; 
  policeContain.style.display="block";
  starterFunc();
  }
  else 
  {warningmsg.style.display="block";}
}

var starter = document.getElementById('playNow');

starter.addEventListener('click',closePupUp4);






