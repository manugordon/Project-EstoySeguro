let db = require('../database/models')

let sinisterController = {

    urgent: (req, res) => {
        res.render('urgent')
    },

    noticeok:(req,res) => {
        res.render('urgentok')
    },

    notice: (req, res) =>{
        db.Siniestros.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            telefono: req.body.telefono,
            detalle: req.body.detalle,
            lugar: req.body.lugar,
            monto: req.body.monto,
        })

        .then (function(seguro){
              res.render('urgentok', {seguro:seguro})
        })
        
      
    }

}

module.exports = sinisterController


