let boton0 = document.getElementsByTagName("button")[0];
let boton1 = document.getElementsByTagName("button")[1];
let boton2 = document.getElementsByTagName("button")[2];
let boton3 = document.getElementsByTagName("button")[3];
let boton4 = document.getElementsByTagName("button")[4];

let mitexto = document.getElementById("Mi_Texto");
let mitextoa = document.getElementById("midiv");

let ocultar1 = document.getElementsByClassName("absoluta")[0];
let ocultar2 = document.getElementsByClassName("absoluta")[1];
let mostrar = document.getElementsByClassName("texto")[0];


let MiUrl = document.getElementsByClassName("Mi_Url")[0];
let url = document.location.href;

let MiUrl2 = "https://docs.google.com/spreadsheets/d/1YXjp8ANJopHhJ0ByyQgsjJwKpxu72oFE/edit?usp=sharing&ouid=112199374666929425781&rtpof=true&sd=true";
let MiCelda = "https://docs.google.com/spreadsheets/d/1YXjp8ANJopHhJ0ByyQgsjJwKpxu72oFE/edit#gid=1492913522&range=A9";

let MiUrl3 = MiUrl2 + MiCelda

let substraer = "";
let data = "";
let response = "";

let fondo = document.getElementsByClassName("bg-image")[0];

      var k = url.substr(url.lastIndexOf("k=")+2);
      console.log(k);
      if(k){
	      FuncionFetch(MiUrl2)
      }

async function FuncionFetch(file) {
  let myObject = await fetch(file);
  console.log(myObject)
  let myText = await myObject.text();  console.log(myText)
  let viewport = "<" + 	myText.substr(myText.lastIndexOf("sheets-viewport"));	console.log(viewport)
  let mitd = "<" + 	myText.substr(myText.lastIndexOf("div id="+'"'+"1492913522"+'"'));  console.log(mitd)
  mitexto.innerHTML = mitd;	console.log(mitexto)
  let extraerd = document.getElementsByTagName("td")[0].innerHTML;  console.log(extraerd)
 mitexto.innerHTML = extraerd;
	ocultar1.style.display = "none";
	ocultar2.style.display = "none";
	let reemplazar = mitexto.innerHTML;
	let reemplazardos = reemplazar.replace("Sucursal Limon 4<br>","<div class='sucursal'>Sucursal Limon 4</div>");
	console.log(reemplazardos)
	mitexto.innerHTML = reemplazardos;
	fondo.style.filter="blur(8px)";
	mitexto.style.opacity = "1";
//	mitexto.style.fontSize = "25px";
	console.log(mitexto)
//	let textodos = 	mitexto.substr(myText.lastIndexOf("Sucursal Limon 4"));
//	console.log(textodos)
//	mitexto.innerHTML = "" + textodos
}


