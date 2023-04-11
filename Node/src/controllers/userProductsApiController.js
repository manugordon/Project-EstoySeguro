const path = require ('path');
let db = require ('../database/models');
const sequelize = require ("sequelize")
const Op = db.Sequelize.Op;

let userProductsApiController = {

    listall: (req, res) => {
        db.UsuariosSeguros
        .findAll({
            include: [{association:"seguro"}, {association: "usuario"}]
        })
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

    mostselled: (req, res) => { 
    db.UsuariosSeguros.findAll({
        attributes: [
          [sequelize.literal('seguro.nombre'), 'nombre'],
          [sequelize.literal('seguro.descripcion'), 'descripcion'],
          [sequelize.literal('seguro.categoria_id'), 'categoria'],
          [sequelize.col('seguro_id'), 'seguro_id'],
          [sequelize.fn('COUNT', sequelize.col('seguro_id')), 'count']
        ],
        include: [{association:"seguro"}],
        group: ['seguro_id'],
        order: [[sequelize.literal('count'), 'DESC']],
        limit: 1
      })
      .then(result => {
        const mostSelledSeguro = result[0];
        return res.status(200).json({
          data: mostSelledSeguro,
          status: 200
        });
      })
      .catch(error => {
        console.error('Error al hacer la consulta:', error);
        return res.status(500).json({
          message: 'Error al obtener el seguro más vendido',
          error: error,
          status: 500
        });
      });
     }
}

    module.exports = userProductsApiController
    