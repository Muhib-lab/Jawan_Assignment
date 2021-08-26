
var count=1;
function fill(control) 
{
    
    if (count<=9) 
    {
    if (count%2!=0) 
    {
     putdata(control.id,"X")     
    }else
    {
        putdata(control.id,"0")
    }
    count++;
    if (checkWin()) 
    {
        alert("Winner");
        reset();
    }
    }else
    {   
        alert("Match Draw");
        reset();
    }
    
}

function reset() 
{
    for(var i=1; i<=9;i++)
    {
        putdata('div'+i,"")
    }
    count=1;
    
}


function checkWin() 
{


    if(checkCondition('div1','div2','div3') || checkCondition('div1','div5','div9') || checkCondition('div1','div4','div7') || checkCondition('div3','div5','div7')
    || checkCondition('div4','div5','div6') || checkCondition('div7','div8','div9') || checkCondition('div2','div5','div8')
    || checkCondition('div3','div6','div9') )
    {
        return true;

    }
    
    
}


function checkCondition(div1,div2,div3) 
{
    if (getDta(div1)!="" && getDta(div2)!="" && getDta(div3)!="" && getDta(div1)==getDta(div2) &&
    getDta(div2)==getDta(div3)) 
    {

      return true;
        
    }

    
}

function getDta(div) 
{
   return document.getElementById(div).innerHTML;
    
}

function putdata(div,data) 
{
    document.getElementById(div).innerHTML=data;

}