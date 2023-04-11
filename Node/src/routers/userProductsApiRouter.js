let express = require ("express")
let router = express.Router()

let userProductsApiController = require ("../controllers/userProductsApiController")

router.get("/listall", userProductsApiController.listall);

router.get('/most', userProductsApiController.mostselled)

module.exports = router