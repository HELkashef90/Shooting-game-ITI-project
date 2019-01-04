
    var btnnext1 = document.getElementById("next1");
    var btnprev1 = document.getElementById("prev1");
    img1=document.getElementById('helpimg');
    parg1=document.getElementById('pa2');
    var x1=0;
    function changeimage1()
    {     
        if (x1==0)
        {img1.setAttribute('src','assets//howtoplay//2.jpg');
        parg1.innerHTML="Select the level";
        }
        else if (x1==1)
        {img1.setAttribute('src','assets//howtoplay//1.jpg');
        parg1.innerHTML="select your character";}
        else if (x1==2)
        {img1.setAttribute('src','assets//howtoplay//3.jpg');
        parg1.innerHTML="please type your name";}
        else if (x1==3)
        {img1.setAttribute('src','assets//howtoplay//8.jpg');
        parg1.innerHTML="this is where your score and name will appear";}
        else if (x1==4)
        {img1.setAttribute('src','assets//howtoplay//4.jpg');
        parg1.innerHTML="that is the police avoid shooting him";}
        else if (x1==5)
        {img1.setAttribute('src','assets//howtoplay//5.jpg');
        parg1.innerHTML="this is the criminal try to move mouse on him and fire";}
        else if (x1==6)
        {img1.setAttribute('src','assets//howtoplay//6.jpg');
        parg1.innerHTML="this is how it is down";}
        else if (x1==7)
        {img1.setAttribute('src','assets//howtoplay//7.jpg');
        parg1.innerHTML="this is your badges when you win";}
    }
    function inc1(){
            x1++;
            console.log(x1);
            if(x1>7){x1=7;clearInterval(inc_fun1);}
            else{changeimage1();}
    }
    function dec1(){
            x1--;
            console.log(x1);
            if(x1<0){x1=0;clearInterval(dec_fun1);}
            else{ changeimage1();}
         
        }
 
    btnnext1.addEventListener("click",inc1);

    btnprev1.addEventListener("click",dec1);
   
     

