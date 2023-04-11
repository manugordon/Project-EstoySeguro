
const conditions = {
    nombre: {
        regex: /^[a-zA-Z]{5,}$/,
        msg: "El nombre no puede estar vacio y debe contener al menos cinco caracteres"
    },
    descripcion: {
        regex: /^(.{20,})$/,
        msg: "La descripcion no puede estar vacia y debe contener al menos 20 caracteres"
    },

}

let validator = (e) => {
    switch (e.target.id) {
        case 'nombre':
            validarInput(e, 'nombre', conditions.nombre)
            break;
        case 'descripcion':
            validarInput(e, 'descripcion', conditions.descripcion)
            break;
}}

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
    let textArea = document.querySelectorAll('textarea')
    
    inputs.forEach(element => {
        element.addEventListener('keyup', validator);
    });
    textArea.forEach(element => {
        element.addEventListener('keyup', validator);
    });

})