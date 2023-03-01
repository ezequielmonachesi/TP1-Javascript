/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay
que decir todos por los que es divisible)
*/
let n1 = prompt('Ingresá un número y te diré si es divisible por 2, 3 ,5 o 7 =D');
let numerosDivisibles = [];
for (let i = 0; i < 8; i++){
    if(i==2 || i==3 || i==5 || i==7){
        if(n1%i == 0){
            numerosDivisibles.push(i);
        }
    }
}
document.write(`El número que ingresaste [${n1}] es divisible por: ${numerosDivisibles}`);