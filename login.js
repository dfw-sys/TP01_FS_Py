let user = document.querySelector("#usuario");
let pass = document.querySelector("#password");



function suscribirse() {

    let dato = user.value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if (!dato.match(validRegex)) {
        alert("¡Mail incorrecto o inexistente!");
        
    }
    else {
        if (pass.value === "") {
            alert("Falta determinar una password");
            
        }


        else {                 

            alert("Bienvenido " + dato);
            
        }



    }
}





    // if (user.value!=="" && pass.value!=="" && pais.value!=="" && passtwo.value==="42") {

    //   mens.value = "GRACIAS POR SUSCRIBIRTE";
    //   console.log(mens);
    //   return;}

    // if (user.value.trim() === "") {
    //     mens.value = "FALTA COMPLETAR NOMBRE";
    //     user.value = "";
    //     user.focus();
    //     return;

    // }

    // user.value = user.value.trim();

    // if (pass.value.trim() === "") {
    //     mens.value = "FALTA EMAIL";
    //     pass.value = "";
    //     pass.focus();
    //     return;
    // }










