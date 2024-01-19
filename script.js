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

async function FuncionFetch(archivo){
	let miobjeto = await fetch(archivo);
	let texto = await miobjeto.text();
	let mivar = "<"+ texto.substr(texto.lastIndexOf("sheets-viewport"));
	mivar = "<"+ mivar.substr(mivar.lastIndexOf('div id="1492913522"'));
	mitexto.innerHTML = mivar;
	let extraer = await mitexto.getElementsByTagName("td")[0].innerHTML;
	extraer = await extraer.replace("Sucursal Limon 4<br>",'<div class="sucursal">Sucursal Limon 4</div>');
	extraer = await extraer.replace("Codigo:",'<div class="sucursalb">C&oacute;digo:</div> - ');
	extraer = await extraer.replace("Descripcion:",'<div class="sucursalb">Descripci&oacute;n:</div> - ');
	extraer = await extraer.replace("Precio:",'<div class="sucursalb">Precio:</div> - ');
	mitexto.innerHTML = extraer+" Pesos";
	ocultar1.style.opacity="0.0";
	ocultar2.style.opacity="0.0";
	fondo.style.filter="blur(8px)";
	mitexto.style.opacity="1";
}


