const path = require ('path');
let db = require ('../database/models');
const sequelize = require ("sequelize")
const Op = db.Sequelize.Op;


let sinisterApiController = {

    listall: (req, res) => {
        db.Siniestros
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
    }
}

module.exports = sinisterApiController