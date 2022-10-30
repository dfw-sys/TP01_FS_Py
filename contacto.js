let user = document.querySelector("#nombre");
let email = document.querySelector("#email");
let telefono = document.querySelector("#telefono")
let texto = document.querySelector("#texto")




function enviar() {

    let dato = email.value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (user.value === "") {
        alert("Es necesario que escribas tu nombre")
        user.focus();
        return 0;
    } else {

        if (!dato.match(validRegex)) {
            alert("¡Mail incorrecto o inexistente!");
            email.focus();
            return 0;

        }
        else {
            if (telefono.value === "") {
                alert(user.value + ", falta determinar una teléfono de contacto");
                telefono.focus();
                return 0;

            }


            else {
                if (texto.value === "") {

                    alert(user.value + ", decinos en que podemos ayudarte");
                    texto.focus();
                    return 0;

                } else {
                    alert ("Gracias " + user.value + ", a la brevedad nos estaremos comunicando")
                    document.formulariodecontacto.submit();
                }



            }
        }}}
