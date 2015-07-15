function operator(simbol){
  var n1= document.getElementById("n1").value;
  var n2= document.getElementById("n2").value;
  switch(simbol){
  	case "+": var resultado= parseInt(n1) + parseInt(n2); break;
  	case "-": var resultado= parseInt(n1) - parseInt(n2); break;
  	case "*": var resultado= parseInt(n1) * parseInt(n2); break;
  	case "/": var resultado= parseInt(n1) / parseInt(n2); break;
  }
  
  var timeoutID = window.setTimeout("show()",2000);
  var para = document.createElement("p");
  var node = document.createTextNode("El resultado es: " + resultado);
  para.appendChild(node);

  var element=document.getElementById("index");
  element.appendChild(para);

  

}

function show(){alert("hola!");}

/*
function add(){
  var n1= document.getElementById("n1").value;
  var n2= document.getElementById("n2").value;
  var resultado= parseInt(n1) + parseInt(n2);
  alert(resultado);  
}
function substract(){
  var n1= document.getElementById("n1").value;
  var n2= document.getElementById("n2").value;
  var resultado= parseInt(n1) - parseInt(n2);
  alert(resultado);	
}
function multiple(){
  var n1= document.getElementById("n1").value;
  var n2= document.getElementById("n2").value;
  var resultado= parseInt(n1) * parseInt(n2);
  alert(resultado);
}
function divide(){
  var n1= document.getElementById("n1").value;
  var n2= document.getElementById("n2").value;
  var resultado= parseInt(n1) / parseInt(n2);
  alert(resultado);
}
*/