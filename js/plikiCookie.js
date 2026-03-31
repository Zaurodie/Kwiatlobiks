function jumpscare()
{
document.getElementById("scare").style.display = "block";
document.getElementById("content").style.top = "-500000000000px";
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