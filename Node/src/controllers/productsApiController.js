const path = require ('path');
let db = require ('../database/models');
const sequelize = require ("sequelize")
const Op = db.Sequelize.Op;


let productsApiControllers = {

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

    lastproduct: (req, res) => {
        db.Seguro
        .findOne({
            order: [['created_at', 'DESC']],
            limit: 1
          })
          .then (seguro => {
            return res.status (200).json(
                {data: seguro,
                status: 200}
            )
          });
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
    }, 

    alltipes: (req, res) =>{
        db.Tipo
        .findAll({
            attributes: ['id', 'nombre', [sequelize.fn('count', sequelize.col('tipo.id')), 'cantidad']],
            include: [{association:"tipos"}],
            group: ['tipo.id']
          })
          .then((data) => {
            res.status(200).json(
                {total: data.length,
                data:data,
                status: 200}
            );
          })
          .catch((error) => {
            console.log(error);
            res.status(500).json({ error: 'Error al obtener la cantidad de seguros por tipo.' });
          })
        }

}




module.exports = productsApiControllers