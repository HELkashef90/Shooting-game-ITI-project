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
  mainPicture.style.display='none';
  }
  //condition of police shooting
  if(checkCountOfAppearance==countOfAppearance && policeFlag==1)
  {
  checkCountOfAppearance++;
  mainPicture.src='assets\\imgs\\blood.png'
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






