var n=Math.random();
n*=6;
n=Math.floor(n)+1;
var img1="dice" + n + ".png";
var attr1="images/" + img1;
document.querySelector(".img1").setAttribute("src",attr1);
var n1=Math.random();
n1*=6;
n1=Math.floor(n1)+1;
var img2="dice" + n1 + ".png";
var attr2="images/" + img2;
document.querySelector(".img2").setAttribute("src",attr2);
if(n>n1)
{
  document.querySelector("h1").innerHTML="Player 1 wins";
}else if(n1>n)
{
  document.querySelector("h1").innerHTML="Player 2 wins";
}else
{
  document.querySelector("h1").innerHTML="Draw";
}
