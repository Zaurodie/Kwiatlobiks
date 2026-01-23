function jumpscare()
{
document.getElementById("scare").style.display = "block";
document.getElementById("content").style.top = "-5000000vh";
//setTimeout("lag()",50);

}
/*
function lag()
{
    while(true)
    {
    console.log(2);
    }
}
*/
function ok()
{
    document.getElementById("scare").style.display = "none";
    document.getElementById("content").style.top = "0";
}


window.onload = setTimeout("jumpscare()",2000);