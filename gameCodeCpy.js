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
      random = Math.floor(Math.random() * 5) + 1; }
  lastrandom = random;
  return random},
}
var randomNumber=randomObj.ran()
//array of object positions 
var posArr=[
  /********************* AWL OMARA ********************************** */
  /*----------------- 1st floor--------------------------*/
  /* 2nd  window  */
  // "z-index: 0; left: 308px;position: absolute; top: 75px",
  // /* 4th window  */
  // "z-index: 0; left: 388px;position: absolute; top: 75px",
  // /*----------------- 2nd floor--------------------------*/
  // "z-index: 0; left: 308px;position: absolute; top: 145px",
  // /* 3rd window  */
  // "z-index: 0; left: 348px;position: absolute; top: 145px",
  /*----------------- 3rd floor--------------------------*/
  /* 1st  window */
  // "z-index: 0; left: 268px;position: absolute; top: 207px",
  // "z-index: 0; left: 308px;position: absolute; top: 207px",
  // /*----------------- 4th floor--------------------------*/
  // "z-index: 0; left: 308px;position: absolute; top: 275px",
  // "z-index: 0; left: 388px;position: absolute; top: 275px",
  // /*----------------- 5th floor--------------------------*/
  // "z-index: 0; left: 308px;position: absolute; top: 348px",
  // "z-index: 0; left: 348px;position: absolute; top: 348px",
 /******************* Tany Omara *************************************** */
 /* tany shbak w awl door*/
//  "z-index: 0; left: 706px;position: absolute; top: 400px",
//  // a5r shbak //
//  "z-index: 0; left: 790px;position: absolute; top: 400px",
//  // Tany dor
//  "z-index: 0; left: 706px;position: absolute; top: 470px",
//  "z-index: 0; left: 748px;position: absolute; top: 470px",
//  // talt door 
//  "z-index: 0; left: 664px;position: absolute; top: 545px",
//  "z-index: 0; left: 706px;position: absolute; top: 545px",
 /******************* Talt Omara *************************************** */
 "z-index: 0; left: 1058;position: absolute; top: 397px",
 "z-index: 0; left: 1125;position: absolute; top: 397px",
 /*2nd floor */ 
 "z-index: 0; left: 990;position: absolute; top: 473px",
 "z-index: 0; left: 1058;position: absolute; top: 473px",
 /*3rd floor */ 
 "z-index: 0; left: 1125;position: absolute; top: 548px",//3rd window
 "z-index: 0; left: 1058;position: absolute; top: 548px",//2nd window
 
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
    if (numberOfHeart==0)
    {window.location.href = "gameOver.html";}
    policeFlag=0;
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







