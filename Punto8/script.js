//Realizado por: Nicolas Zelarayan
//8. Escribe un programa que pida un número y diga si es divisible por 2.
n = +prompt("Ingrese un número")
if (n % 2 === 0){
    alert(n + " es divisible por 2:\n" + n + "/" + 2 + " = " + (n/2) + "\nresto: " + (n % 2))
}else{
    alert(n + " no es divisible por 2:\n" + n + "/" + 2 + " = " + (~~(n/2)) + "\nresto: " + (n % 2))
}