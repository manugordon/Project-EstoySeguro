const { validationResult, buildCheckFunction } = require('express-validator')
const bcryptjs = require('bcryptjs')
let db = require('../database/models')
const { request } = require('express')

let userControllers = {

    login: (req, res) => {
        res.render('login')
    },
    processLogin: (req, res) => {
        db.Usuario.findOne({ where: { email: req.body.email }, include: [{association: "rol"}]})
        
            .then((userToLogin) => {

                if (userToLogin) {
                    let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
                    if (isOkThePassword) {
                        req.session.userLogged = userToLogin
                        // el siguiente if hace que si el usuario tildo la opcion de recordar usuario, cuando cierra el navegador sigue en sesion
                        if (req.body.recordar_usuario) {
                            res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
                        }
                        res.redirect('userProfile')
                    } else {
                        res.render('login', {
                            errors: {
                                email: {
                                    msg: 'Las credenciales son invalidas'
                                }
                            }
                        })
                    }
                } else {
                    res.render('login', {
                        errors: {
                            email: {
                                msg: 'No se encuentra el email registrado en la base de datos'
                            }
                        }
                    })
                }

            })

    },
    profile: (req, res) => {
        let Usuario = req.session.userLogged
        db.UsuariosSeguros.findAll({
            where: {usuario_id: Usuario.id},
            include: [{association: "usuario"}, {association: "seguro"}],
            order: [["id","DESC"]],
            limit: 1,
        })
        .then(currentUser => {
                if (currentUser.length==0){
                    res.render('userProfile', { 'Usuario':Usuario,'seguro':null })
                } else {
                position = currentUser[0]
                Usuario = position.usuario
                Seguro = position.seguro
                res.render('userProfile', { 'Usuario':Usuario, 'seguro':Seguro })
                }
        })
        

    },
    register: (req, res) => {
        res.render('register')
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req)
        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                
                oldData: req.body
            })
        }
        db.Usuario.findOne({ where: { email: req.body.email } })
            .then((user) => {
                if (user) {
                    return res.render('register', {
                        errors: {
                            email: { msg: 'Este email ya esta registrado' }
                        },
                        oldData: req.body
                    })
                } else {
                    db.Usuario.create({
                        nombre: req.body.nombre,
                        apellido: req.body.apellido,
                        email: req.body.email,
                        password: bcryptjs.hashSync(req.body.password, 10),
                        documento: req.body.documento,
                        ciudad: req.body.ciudad,
                        fecha_Nacimiento: req.body.fecha_Nacimiento,
                        avatar: req.file.filename
                    })
                    .then (function(user){
                        res.render('userProfileTo', {'Usuario': user, 'seguro':null})
                    })
                }

                
            })
    },
    editProfile: (req,res)=>{
        db.Usuario.findByPk(req.params.id)
        .then(function(Usuario){
            res.render('user-edit-form', {Usuario:Usuario})
        })
    },

    updateProfile:(req,res)=>{
        db.Usuario.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            documento: req.body.documento,
            ciudad: req.body.ciudad,
            avatar: req.body.avatar
        },{
            where: {
                id: req.params.id
            }
        })
        res.redirect ('/user/userProfile/')
    },

    logout: (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy()
        res.redirect('/')
    },

}


module.exports = userControllers


