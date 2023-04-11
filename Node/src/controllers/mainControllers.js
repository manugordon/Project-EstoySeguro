const path = require ('path');

let mainControllers = {
    home: (req, res) => {

        res.render('home')
    },
    productdetail: (req, res) => {
        res.render('productdetail')
    },
    carritodecompra: (req, res) => {
        res.render('carritodecompra')
    }
}

module.exports = mainControllers