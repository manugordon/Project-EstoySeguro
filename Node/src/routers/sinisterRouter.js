let express = require('express');
let router = express.Router();

let sinisterController = require('../controllers/sinisterController');

router.get('/urgent', sinisterController.urgent)

router.get ('/urgentok', sinisterController.noticeok)

router.post ('/urgent', sinisterController.notice)

module.exports = router