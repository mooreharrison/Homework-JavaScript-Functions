var calc=document.querySelector(".calc");
var btn=document.querySelector(".btn");
function math(num1,num2,num3){return num1/num2*num3;}
function state(mil,mpg,prc){
	calc.innerHTML=calc.innerHTML+"To drive a car with the MPG of "+mpg+" for "+mil+" miles at $"+prc+" per gallon would cost $"+math(mil, mpg, prc)+".<br/>";}
function ask(){
	var miles=Number(prompt("What is your estimated number of miles per year that you drive?"));
	var price=Number(prompt("What is the current cost of a gallon of gasoline in your area?"));
	state(miles,12,price);
	state(miles,17,price);
	state(miles,26,price);
	state(miles,29,price);}
btn.addEventListener("click",function(){
	calc.innerHTML="";
	ask();
	btn.innerHTML="Recalculate";})