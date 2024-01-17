let numero = parseInt(prompt("Digite un número:"));
if (numero === String){
    console.log("error, ingrese un número")
    }
else if (numero === Boolean){
    console.log("error, ingrese un número")
}

let a = 0;
let b = 1;

for (let i = 0; i < numero; i++){
console.log(a);
let c = a;
a = b;
b = c + a;
}

let resultado = 80


let dom = document.getElementById("dom");
dom.innerHTML = `${resultado}`
