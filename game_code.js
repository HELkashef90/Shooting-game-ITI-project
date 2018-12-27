var mainPicture=document.getElementById('first')
var policeAppearance=2;
var random
var lastrandom
var countOfAppearance;
var checkCountOfAppearance;
var policeFlag=0
var previousNumber
var thiefFlag=0
var click=1
var numberOfHeart;

//object to get random numbers
var randomObj={
  ran:function ()
  {    while ( lastrandom === random ) {
      random = Math.floor(Math.random() * 6) + 1; }
  lastrandom = random;
  return random},
}
var randomNumber=randomObj.ran()
//array of object positions 
var posArr=[
  "z-index: 0; left: 600px;position: absolute; top: 300px",
  "z-index: 0; left: 500px;position: absolute; top: 300px",
  "z-index: 0; left: 400px;position: absolute; top: 300px",
  "z-index: 0; left: 1500px;position: absolute; top: 300px",
  "z-index: 0; left: 1200px;position: absolute; top: 300px",
  "z-index: 0; left: 300px;position: absolute; top: 300px",
]
//to check random number
console.log(randomNumber)
//function to change target
function changeTarget()
{ 
mainPicture.addEventListener("click", increaseCount)
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
  mainPicture.src='red.png'
  }
  //condition of police shooting
  if(checkCountOfAppearance==countOfAppearance && policeFlag==1)
  {
  checkCountOfAppearance++;
  mainPicture.src='green.png'
  policeFlag=0;
  numberOfHeart--; 
  }
  score.innerHTML = number;
  heart.innerHTML = numberOfHeart;
}
//speed of appearance
var speed=3000
//object to distribute timing to functions
var timeObj={
  all:function()
  { //change of thief pic
    mainPicture.src='thief.png'
    countOfAppearance=0;
    checkCountOfAppearance=0;
    randomNumber=randomObj.ran()
    if(click==0 && policeFlag==0)
    {
      var heart = document.getElementById('heart');
      numberOfHeart = heart.innerHTML;
      numberOfHeart--; 
      heart.innerHTML = numberOfHeart;
    }
    //condition to display police officer
    if (policeAppearance>0 && randomNumber/5==1 )
    {
      mainPicture.src='police.jpg'
      policeAppearance--;
      policeFlag=1;
    }
    click=0;
    myVar=setTimeout(changeTarget,speed*0) 

    console.log(randomNumber)
  },
}
 myVar2=setInterval(timeObj.all,speed)
//police officer
//hearts
//global object member
//function to check heart then increase or decrease






