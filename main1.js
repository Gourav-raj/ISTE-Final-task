//c//creating a Dynamic table



const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");


menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})

	
    
  


//document.getElementById('button').addEventListener("click", function() {
//	document.querySelector('.bg-modal').style.display = "flex";
//});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
});



 function myFun(c1){

 	var cv1=document.getElementById(c1).value;
 	
document.querySelector('.bg-modal').style.display = "flex";
var x = document.getElementById("col").value;


var table =' ';
var rows=x;
var cols=x;
for(var r=0; r< rows; r++){
	table +='<tr>';
	for(var c=0; c<cols; c++){
		table +='<td  bgcolor="white" onclick="dom(this)"  >' + '</td>';

	}
	table +='</tr>';
}
mn=0;

document.getElementById("tabl").innerHTML='<table border=1  >'+ table + '</table>';
for (var i = 0; i <= x*x; i++) {
		document.getElementsByTagName("td")[i].style.backgroundColor="white";

}

}
var op=1;

 

var mn=0;
var ui=1;


function dom(a){
	
	 

if(a.style.backgroundColor=="white"){
if(mn==1){
	var cv=document.getElementById("color2").value;
}
else{
var cv=document.getElementById("color1").value;
}

	
a.style.backgroundColor = cv;

}
else
 if(a.style.backgroundColor!="white"){
	if(mn==1){
	var cv=document.getElementById("color2").value;
}
else{
var cv=document.getElementById("color1").value;
}
a.style.backgroundColor = cv;
	a.style.backgroundColor="white";

}}


var cj=document.getElementById("b1");

cj.onclick = function(){
    mn=1;
   }
