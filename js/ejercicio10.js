/*
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro)
*/
let n1 = prompt('Ingresá un número y te diré si es divisible por 2, 3 ,5 o 7 =D');
document.write(`El número que ingresaste [${n1}] es divisible por: `)
for (let i = 0; i < 8; i++){
    if(i==2 || i==3 || i==5 || i==7){
        if(n1%i == 0){
            document.write(`${i} <br>`);
            break;
        }
    }
}