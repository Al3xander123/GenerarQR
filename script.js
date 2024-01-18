let boton0 = document.getElementsByTagName("button")[0];
let boton1 = document.getElementsByTagName("button")[1];
let boton2 = document.getElementsByTagName("button")[2];
let boton3 = document.getElementsByTagName("button")[3];
let boton4 = document.getElementsByTagName("button")[4];

let mitexto = document.getElementById("Mi_Texto");
let mitextoa = document.getElementById("midiv");

let MiUrl = document.getElementsByClassName("Mi_Url")[0];
let url = document.location.href;

let MiUrl2 = "https://docs.google.com/spreadsheets/d/1YXjp8ANJopHhJ0ByyQgsjJwKpxu72oFE/edit?usp=sharing&ouid=112199374666929425781&rtpof=true&sd=true";
let MiCelda = "https://docs.google.com/spreadsheets/d/1YXjp8ANJopHhJ0ByyQgsjJwKpxu72oFE/edit#gid=1492913522&range=A9";

let MiUrl3 = MiUrl2 + MiCelda

let substraer = "";

//boton0.onclick = MiFuncion0;//Funcion Nuevo Texto en el Boton
//boton0.onclick = MiFuncion0;//Funcion Nuevo Texto en el Boton
boton0.onclick = FuncionFetch;//Funcion Nuevo Texto en el Boton

//boton1.onclick = MiFuncion1;//Funcion Nuevo Texto en el Boton
//boton2.onclick = MiFuncion2;//Funcion Nuevo Texto en el Boton
//boton3.onclick = MiFuncion3;//Funcion Nuevo Texto en el Boton
//boton4.onclick = MiFuncion4;//Funcion Nuevo Texto en el Boton

function MiFuncion3(){
	substraer = texto.substr(texto.lastIndexOf("still"));
	MiUrl.innerHTML = substraer;
}

async function getText(file) {
	console.log(file);
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.getElementById("Respuesta").innerHTML = myText;
}


function MiFuncion1(){
	let extraer = document.getElementById("sheets-viewport").innerHTML;
	console.log(extraer);
	console.log(1);
	mitexto.innerHTML = extraer;
	MiFuncion2();
}
function MiFuncion2(){
	let extraers = document.getElementById("1492913522").innerHTML;
	console.log(extraers);
	console.log(2);
	mitexto.innerHTML = extraers;
	MiFuncion3();
}

function MiFuncion3(){
	let extraerss = document.getElementsByTagName("td")[0].innerHTML;
	mitexto.innerHTML = extraerss;
	console.log(3);
//	MiFuncion4();
}

function MiFuncion4(){
	let extraersss = document.getElementsByTagName("row-header-wrapper")[0].innerHTML;
	mitexto.innerHTML = extraersss;
}


function FuncionFetch(){
	fetch(MiCelda)
	.then(response => response.text())
	.then(data => mitexto.innerHTML=data)//console.log(data);mitexto.innerHTML=data;)
	setTimeout(MiFuncion1, 5000);

}

function MiFuncion0(){
	var k = url.substr(url.lastIndexOf("k=")+2);
	if(k){
        //fetch(AS_URL_BASE+'?k='+k)  ///ESTE ES EL ORIGINAL
        fetch(MiCelda)
        //fetch(micelda+'k='+k)
        .then(r=> r.text())//.text())
//         textob.innerHTML = r;
        .then((d)=>{
//          console.log(r)
          if(d){
            document.location.replace(r);
            mitexto.innerHTML = r;
            console.log(d);
          }})//.catch(err=>console.log(err))
      }
	  console.log(0);
	MiFuncion1();
	//setTimeout(MiFuncion1, 5000);
}


