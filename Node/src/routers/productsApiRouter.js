let express = require('express');
let router = express.Router();



let productsApiControllers = require('../controllers/productsApiController');


router.get("/listall", productsApiControllers.listall);

router.get("/listone/:id", productsApiControllers.show);

router.post("/store", productsApiControllers.storeapi);

router.post("/destoryapi/:id", productsApiControllers.destroyapi);

router.get("/search", productsApiControllers.search)

router.get("/alltipes", productsApiControllers.alltipes)

router.get('/lastproduct', productsApiControllers.lastproduct)

module.exports = router