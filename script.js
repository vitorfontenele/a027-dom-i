const frutas = ["laranja", "limão", "uva"];

let lis = document.querySelectorAll("li");

for (let i=0; i < frutas.length; i++){
    lis[i].innerHTML = frutas[i];
}

document.getElementById("input-fruta").value = "abacate";

function addFruta(){
    lis[lis.length - 1].innerHTML = document.getElementById("input-fruta").value;
}