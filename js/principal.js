var titulo = document.querySelector(".titulo").textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdNome = paciente.querySelector(".info-nome").textContent;

var tdPeso = paciente.querySelector(".info-peso").textContent;

var tdAltura = paciente.querySelector(".info-altura").textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(tdPeso <= 0 || tdPeso >= 1000){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
}
 if(tdAltura <= 0 || tdAltura >= 3.00){
     console.log("Altura inválida");
     alturaEhValida = false;
     tdImc.textContent = "Altura inválida";
 }

 if(pesoEhValido && alturaEhValida){
    var imc = tdPeso/ (tdAltura*tdAltura);
    tdImc.textContent = imc;
 }

console.log(paciente); // mostra o tr
console.log(tdNome);
console.log(tdPeso); //mostra o td que tem o peso
//console.log(peso); //mostra o 100
console.log(tdAltura); //mostra o td que tem a altura
//console.log(altura); //mostra o 2.0
console.log(imc);

