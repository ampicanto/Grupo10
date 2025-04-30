//REALIZADO POR: MORALES JUAN ANGEL
let n1 = Number(prompt("Ingresa el primer numero: "));
let n2 = Number(prompt("Ingresa el segundo numero: "));

if (n1 > n2){
    alert("El mayor es: " + n1);
} else if (n2 > n1) {
    alert("El mayor es: "+ n2);
} else {
    alert("Ambos numeros son iguales");
}


//otra opcion
/*let n1 = Number(prompt("ingresa el primer numero:"));
let n2= Number(prompt("ingresa el segundo numero:"));

let mayor = n1;

if (n2 > mayor){
    mayor = n2;
}

alert("el mayor es: "+ mayor);*/