let edad = 10;
let tutor = false;

if(edad >= 18){
    console.log(`Como tienes ${edad} años puedes ingresar a la fiesta`);
}else if(edad < 18 && tutor == true){
    console.log(`Como tienes menos de ${edad} años puedes ingresar a la fiesta con el Tutor`);
}else{
    console.log(`Como tienes menos de ${edad} años NO puedes ingresar a la fiesta sin tutor. No insista por favor.`);
}