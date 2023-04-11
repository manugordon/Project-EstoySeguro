let express = require ("express")
let router = express.Router()

let userApiController = require ("../controllers/userApiController")

router.get("/listall", userApiController.listall);

router.get("/listone/:id", userApiController.show);

router.post("/store", userApiController.storeapi);

router.post("/destoryapi/:id", userApiController.destroyapi);

router.get("/search", userApiController.search)

module.exports = router