var randomNumber=Math.floor(Math.random()*100)+1;
document.querySelector("button").addEventListener("click",function(){
  document.querySelector("h1").innerHTML="💘 Strength  of your love is"  + randomNumber+"%";
})
