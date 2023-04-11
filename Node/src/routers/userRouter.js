let express = require('express');
let router = express.Router();

const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')


const path = require('path')
const multer = require('multer')

const {body} = require('express-validator')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/avatars')
    },
    filename: (req, file, cb) => {

        let fileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        cb(null, fileName)
    }
})
const uploadFile = multer({ storage: storage })
let userControllers = require('../controllers/userControllers');
const { route } = require('express/lib/application');


const validations = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre').isLength({min:2})
    .withMessage('El nombre tiene que tener al menos 2 caracteres'),
    body('apellido').notEmpty().withMessage('Tienes que escribir un apellido').isLength({min:2}),
    body('documento').notEmpty().withMessage('Tienes que escribir un documento'),
    body('ciudad').notEmpty().withMessage('Tienes que ingresar una ciudad'),
    body('email').notEmpty().withMessage('Tienes que escribir un email').bail()
                 .isEmail().withMessage('Debes escribir una direccion valida'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña')
                .isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('avatar').custom((value,{req})=>{
        
        let file = req.file
        const allowedFormats = ['image/jpeg', 'image/jpg','image/png', 'image/gif'];
        if(!file){
            throw new Error ('Tienes que subir una imagen')
        } else if (!allowedFormats.includes(file.mimetype)) {
            throw new Error('Formato Invalido. Los formatos validos son JPG, JPEG, PNG, and GIF.');
        }
        return true
    })
]

// FORMULARIO DE LOGIN
router.get('/login', guestMiddleware,userControllers.login)

// PROCESAMIENTO DEL LOGIN
router.post('/login', userControllers.processLogin)

// PERFIL DEL USUARIO
router.get('/userProfile',authMiddleware, userControllers.profile)

// EDICION DEL PERFIL DE USUARIO
router.get('/edit/:id', userControllers.editProfile)
router.put('/edit/:id', userControllers.updateProfile)

// FORMULARIO DE REGISTRO
router.get('/register', guestMiddleware, userControllers.register)

// PROCESAMIENTO DEL FORMULARIO DE REGISTRO
router.post('/register', uploadFile.single('avatar'), validations ,userControllers.processRegister)

// LOGOUT
router.get('/logout',userControllers.logout)


module.exports = router