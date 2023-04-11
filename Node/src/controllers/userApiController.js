const path = require ('path');
let db = require ('../database/models');
const sequelize = require ("sequelize")
const Op = db.Sequelize.Op;

let userApiController = {

    listall: (req, res) => {
        db.Usuario
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
        db.Usuario
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
        db.Usuario
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
        db.Usuario
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
        db.Usuario
        .findAll({
            where: {
                nombre: { [Op.like] : "%" + req.query.keyword + "%"}, 
                //apellido: { [Op.like] : "%" + req.query.keyword + "%"}
            }
        })
        .then (resultado =>{
            return res.status(200).json(resultado)
        })
    }
}

    module.exports = userApiController
    