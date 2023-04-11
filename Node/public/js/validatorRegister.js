
const conditions = {
    nombre: {
        regex: /^[a-zA-Z]{3,}$/,
        msg: "El nombre no puede estar vacio y debe contener al menos dos caracteres"
    },
    apellido: {
        regex: /^[a-zA-Z]{3,}$/,
        msg: "El apellido no puede estar vacio y debe contener al menos dos caracteres"
    },
    email: {
        regex:  /^\S+@\S+\.\S+$/, 
        msg: "El email debe tener un formato valido y no puede ser vacio"
    },
    // esto indica que al menos debe tener un @ y un .
    password: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*.-_/\\"':;{}[<>|])[a-zA-Z\d!@#$%&*.-_/\\"':;{}[<>|]{8,}$/,
        msg: "La contraseña debe contener al menos 8 caracteres, minusculas, mayusculas, un numero y un caracter especial"
    }
}

let validator = (e) => {
    switch (e.target.id) {
        case 'nombre':
            validarInput(e, 'nombre', conditions.nombre)
            break;
        case 'apellido':
            validarInput(e, 'apellido', conditions.apellido)
            break;
        case 'email':
            validarInput(e, 'email', conditions.email)
                break;
        case 'password':
            validarInput(e, 'password', conditions.password)
            break;
    }

}

let validarInput = (e, id, validator) => {
    let val = e.target.value;
    let regex = validator.regex;

    if(!regex.test(val)){
        e.target.classList.add('front-end-validations')
        document.getElementById('validation-error-' + id).innerHTML = validator.msg;
    }else{
        e.target.classList.remove('front-end-validations')
        document.getElementById('validation-error-' + id).innerHTML = "";
    }
}

window.addEventListener('load', () =>{

    let inputs = document.querySelectorAll('input');
    
    inputs.forEach(element => {
        element.addEventListener('keyup', validator);
    });
   
})



