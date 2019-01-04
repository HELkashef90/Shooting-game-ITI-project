window.onload=function()
{
    var btnnext = document.getElementById("next");
    var btnprev = document.getElementById("prev");
    img=document.getElementById('storyimg');
    parg=document.getElementById('pa1');
    var x=0;
    function changeimage()
    {     
        if (x==0)
        {img.setAttribute('src','assets//story//scene0.jpg');
        parg.innerHTML="Villa Restal is here in Gotham City";
        }
        else if (x==1)
        {img.setAttribute('src','assets//story//scene1.jpg');
        parg.innerHTML="to bulgar houses and disturbe its citizens";}
        else if (x==2)
        {img.setAttribute('src','assets//story//scene2.jpg');
        parg.innerHTML="he managed to attack some of the houses";}
        else if (x==3)
        {img.setAttribute('src','assets//story//scene3.jpg');
        parg.innerHTML="but an obstacle has arosen for him the new security systems";}
        else if (x==4)
        {img.setAttribute('src','assets//story//scene4.jpg');
        parg.innerHTML="he started to run away";}
        else if (x==5)
        {img.setAttribute('src','assets//story//scene5.jpg');
        parg.innerHTML="but unit X05 managed to catch him";}
        else if (x==6)
        {img.setAttribute('src','assets//story//scene6.jpg');
        parg.innerHTML="and put him behind bars for good";}
        else if (x==7)
        {img.setAttribute('src','assets//story//scene7.jpg');
        parg.innerHTML="its your turn now to kill his followers";}
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
