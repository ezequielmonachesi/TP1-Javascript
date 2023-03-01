let n1 = parseInt(prompt(`Ingrese el primer número`));
let n2 = parseInt(prompt(`Ingrese el segundo número`));
let n3 = parseInt(prompt(`Ingrese el tercer número`));

if(n1 > n2 && n1 > n3){
    document.write(`El número ingresado más alto es el: ${n1}.`);
}else if(n2 > n3){
    document.write(`El número ingresado más alto es el: ${n2}.`);
}else{
    document.write(`El número ingresado más alto es el: ${n3}.`);
}