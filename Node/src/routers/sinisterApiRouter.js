let express = require ('express')
let router = express.Router()

let sinisterApiController = require ('../controllers/sinisterApiController');

router.get('/listall', sinisterApiController.listall)

module.exports = router