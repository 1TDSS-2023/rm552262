"use strict";
// console.log("Olá Mundo!!");

// var nr1 = "10";
// var nr2 = "5";

// //Realizando operações com Strings e realizando o parse com a
// //função parseInt...;
// console.log(parseInt(nr1)+parseInt(nr2));

/*var nome1 = "Dubas";
// let nome2 = "Serbatinho";
// const nome3 ="Julia";
nome = "Ale";
console.log(nome);

if(nome1 != ""){
    let nome1 = "Julia";
}

var nome

console.log(nome1);
*/

//<button value="click" id="meu-btn">Click</button>
const btn = document.getElementById("meu-btn");

//Primeiro passo para a tranforamção do botão em RGB...
btn.addEventListener("click", function(){
    //console.log(this.textContent);
    //Funcçao matematica Math
    /* Métodos: random = retorna um numero aleatório entre 0 e 1. Ex: 0.323232554;
                flor = arredonda para baixo
                ceil = arredonda o numero para cima
                round = arredonda o numero o numero aleatoriamente 
                */




let r=0, g=0, b=0             

r = Math.round(Math.random()*255);
g = Math.round(Math.random()*255);
b = Math.round(Math.random()*255);

//his.setAttribute("style", "background-color: rgb("+r+", "+g+". "+b+"");");
this.setAttribute("style", `background-color: rgb(${r},${g},${b});`);



});
