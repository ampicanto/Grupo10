//Realizado por: Nicolas Zelarayan
//7. Escribe un programa que pida tres números y escriba en pantalla cuál es el mayor de los tres.
n1 = +prompt("Ingrese el primer número")
n2 = +prompt("Ingrese el segundo número")
n3 = +prompt("Ingrese el tercer número")
if (n1 === n2 && n2 === n3){
    alert("Los tres números son iguales: " + n1)
}else{
    if (n1 === n2 || n2 === n3 || n1 === n3){
        if (n1 != n2){
            if (n1 != n3){
                dif = n1
                rep = n2
            }else{
                dif = n2
                rep = n3
            }
        }else{
            dif = n3
            rep = n1
        }
        if (dif > rep){
            alert("El mayor es: " + dif + "\n" + "Dos números iguales: " + rep + "\n" + dif + " > " + rep)
        }else{
            alert("El mayor es: " + rep + "\n" + "Dos números iguales: " + rep + "\n" + rep + " > " + dif)
        }
    }else{
        if (n1 > n2){
            if (n2 > n3){
                alert("El mayor de los tres es: " + n1 + "\n" + n1 + " > " + n2 + " > " + n3)
            }else{
                if (n1 > n3){
                    alert("El mayor de los tres es: " + n1 + "\n" + n1 + " > " + n3 + " > " + n2)
                }else{
                    alert("El mayor de los tres es: " + n3 + "\n" + n3 + " > " + n1 + " > " + n2)
                }
            }
        }else{
            if (n1 > n3){
                alert("El mayor de los tres es: " + n2 + "\n" + n2 + " > " + n1 + " > " + n3)
            }else{
                if (n2 > n3){
                    alert("El mayor de los tres es: " + n2 + "\n" + n2 + " > " + n3 + " > " + n1)
                }else{
                    alert("El mayor de los tres es: " + n3 + "\n" + n3 + " > " + n2 + " > " + n1)
                }
            }
        }
    }
}