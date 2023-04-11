const path = require ('path');
const fs = require ('fs');
let db = require ('../database/models');
const Usuario = require('../database/models/Usuario');
const { validationResult, buildCheckFunction } = require('express-validator')
const sequelize = require ("sequelize")
const Op = db.Sequelize.Op;

let productsControllers = {

    list: function (req, res){
        db.Seguro.findAll({
            include: [{association: "categoria"}, {association: "tipo"}],
            order: [['tipo_id', 'ASC']]
        })
        .then (function(seguros){
            res.render('products', {seguros})
        })
        .catch(error => res.send(error))
    },

    filter:(req,res)=> {
        let tipo_id = req.params.tipo_id
        db.Seguro.findAll({
            where: {tipo_id: tipo_id},
            include: [{association: "categoria"}, {association: "tipo"}]    
        }).then (function(seguros){
            res.render('products',{seguros})
        })
        .catch(error => res.send(error))
    
    },

    detail: (req,res) => {
        db.Seguro.findByPk(req.params.id)
            .then (function(seguro){
                res.render ('product-detail-form', {seguro:seguro})
            })
        
    },

    create: (req,res)=>{
        res.render('product-create-form')
    },

    store: (req,res)=>{
        const resultValidation = validationResult(req)
        if (resultValidation.errors.length > 0) {
            return res.render('product-create-form', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
        db.Seguro.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            icono: req.body.icono,
            tipo_id: req.body.tipo,
            categoria_Id: req.body.categoria,
            precio: req.body.precio, 
            created_at:  new Date ()
    
        })
        res.redirect ("/products")
    },

    edit: (req, res) => {
		db.Seguro.findByPk(req.params.id)
            .then(function(seguro){
                res.render('product-edit-form', {seguro:seguro})
            })
    },

    update:(req,res) => {
        db.Seguro.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            icono: req.body.icono,
            categoria_Id: req.body.categoria_Id,
            precio: req.body.precio 
        },{
            where: {
                id: req.params.id
            }
        })
        res.redirect ('/products/detail/' + req.params.id)
    },

    delete: function (req,res) {
        db.Seguro.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/products')
    },
    buy: function(req,res){
        res.send('Hola vine para que me compres maestro')
    },
    processBuy: function(req,res){
        const fechaHoy = new Date()
        const fecha = new Date()
        const vencimiento = fecha.setFullYear(fecha.getFullYear() + 1); // Agregamos un año a la fecha actual 
        const fullVencimiento = new Date(vencimiento)
        
       let buyComplete = db.UsuariosSeguros.create({
           
            usuario_id: req.session.userLogged.id,
            seguro_id: parseInt(req.params.id),
            fecha_contratacion: fechaHoy,
            fecha_vencimiento: fullVencimiento
       
        })
        .then((buyComplete)=>{
            db.Seguro.findByPk(buyComplete.seguro_id,{include: [{association:'categoria'}]}).then(seguro => {
        
                res.render('product-buyComplete', {'seguro':seguro, 'Usuario': req.session.userLogged})
               })
            })
    
        .catch(error => res.send(error))
        
          
          // ACA TENGO EL SEGURO QUE QUIERE COMPRAR
         // ACA TENGO LOS METODOS DE LA API CREADA
        
    },
    listall: (req, res) => {
        db.Seguro
        .findAll()
        .then(seguros => {
            return res.status(200).json(
                {
                    total: seguros.length,
                    data: seguros,
                    status: 200
                }
            )
        })
    },

    show: (req, res) =>{
        db.Seguro
        .findByPk(req.params.id)
        .then(seguro => {
            return res.status(200).json({
                data: seguro,
                status: 200
            }
            )
        })

    },

    storeapi: (req, res) =>{
        db.Seguro
        .create(req.body)
        .then(seguro => {
            return res.status(200).json(
                {
                    data: seguro,
                    status: 200,
                    created: "OK"
                }
            )
        })
    }, 

    destroyapi: (req, res) =>{
        db.Seguro
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then (response =>{
            return res.json (response)
        })
    },

    search: (req, res) =>{
        db.Seguro
        .findAll({
            where: {
                nombre: { [Op.like] : "%" + req.query.keyword + "%"},
                descripcion: { [Op.like] : "%" + req.query.keyword + "%"}
            }
        })
        .then (resultado =>{
            return res.status(200).json(resultado)
        })
    }

    }


module.exports = productsControllers