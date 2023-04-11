let express = require('express');
let router = express.Router();

let mainControllers = require('../controllers/mainControllers')

router.get('/', mainControllers.home)






// router.use('/products', productsRouter)
// router.use('/users', usersRouter)
// router.use('/admin', adminRouter)


module.exports = router