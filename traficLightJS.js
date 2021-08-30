function Start(){
    document.getElementById("red").style.background="red";
setTimeout(function()
{
    document.getElementById("red").style.background="white";
    document.getElementById("yellow").style.background="yellow";
    setTimeout(function()
    {
     document.getElementById("yellow").style.background="white";  
     document.getElementById("green").style.background="green";
     setTimeout(function(){
        document.getElementById("green").style.background="white";
        Start(); 
     },5000)  
    },3000)   
},5000)

}
document.getElementById("btn").addEventListener("click",Start);