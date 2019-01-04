window.onload=function()
{
    var btnnext = document.getElementById("next1");
    var btnprev = document.getElementById("prev1");
    img=document.getElementById('helpimg');
    parg=document.getElementById('pa2');
    var x=0;
    function changeimage()
    {     
        if (x==0)
        {img.setAttribute('src','assets//howtoplay//2.jpg');
        parg.innerHTML="Select the level";
        }
        else if (x==1)
        {img.setAttribute('src','assets//howtoplay//1.jpg');
        parg.innerHTML="select your character";}
        else if (x==2)
        {img.setAttribute('src','assets//howtoplay//3.jpg');
        parg.innerHTML="please type your name";}
        else if (x==3)
        {img.setAttribute('src','assets//howtoplay//8.jpg');
        parg.innerHTML="this is where your score and name will appear";}
        else if (x==4)
        {img.setAttribute('src','assets//howtoplay//4.jpg');
        parg.innerHTML="that is the police avoid shooting him";}
        else if (x==5)
        {img.setAttribute('src','assets//howtoplay//5.jpg');
        parg.innerHTML="this is the criminal try to move mouse on him and fire";}
        else if (x==6)
        {img.setAttribute('src','assets//howtoplay//6.jpg');
        parg.innerHTML="this is how it is down";}
        else if (x==7)
        {img.setAttribute('src','assets//howtoplay//7.jpg');
        parg.innerHTML="this is your badges when you win";}
    }
    function inc(){
            x++;
            console.log(x);
            if(x>7){x=7;clearInterval(inc_fun);}
            else{changeimage();}
    }
    function dec(){
            x--;
            console.log(x);
            if(x<0){x=0;clearInterval(dec_fun);}
            else{ changeimage();}
         
        }
 
    btnnext.addEventListener("mouseover",inc_interv);
    btnnext.addEventListener("mouseout", inc_stop);

    btnprev.addEventListener("mouseover",dec_interv);
    btnprev.addEventListener("mouseout", dec_stop);

    var inc_fun;
    function inc_interv ()
    {inc_fun=setInterval(inc,2500);}
    function inc_stop ()
    {clearInterval(inc_fun);}

    var dec_fun;
    function dec_interv ()
    {dec_fun=setInterval(dec,2500);}
    function dec_stop ()
    {clearInterval(dec_fun);}
     
}
