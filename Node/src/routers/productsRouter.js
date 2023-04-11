let express = require('express');
let router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')
const {body} = require('express-validator')
let db = require ('../database/models');
const Seguro = require('../database/models/Seguro');
const sequelize = require ("sequelize")
const Op = db.Sequelize.Op;




let productsControllers = require('../controllers/productsControllers');
const { destroyapi } = require('../controllers/productsControllers');


const validations = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre').isLength({min:5})
    .withMessage('El nombre tiene que tener al menos 5 caracteres'),
    body('descripcion').notEmpty().withMessage('No puedo estar vacio')
    .isLength({min:8}).withMessage('La descripcion debe contener al menos 20 caracteres'),
    
]


// OBTENER TODOS LOS PRODUCTOS
router.get('/',productsControllers.list)

// OBTENER TODOS LOS PRODUCTOS FILTRADOS POR TIPO DE SEGURO
router.get('/filter/:tipo_id', productsControllers.filter)

// OBTENER EL DETALLE DE UN PRODUCTOS
router.get('/detail/:id', productsControllers.detail)


// CREAR UN PRODUCTO NUEVO 
router.get('/create',authMiddleware,productsControllers.create)  //authMiddleware//
router.post('/create', validations,productsControllers.store)

// COMPRAR UN PRODUCTO  
router.get('/buy/:id', productsControllers.buy)
router.post('/buy/:id', authMiddleware, productsControllers.processBuy)

// EDITAR UN PRODUCTO
router.get('/edit/:id', productsControllers.edit);
router.put('/edit/:id', productsControllers.update);

//ELIMINAR UN PRODUCTO EN PARTICULAR
router.delete('/:id/', productsControllers.delete);

router.get('/buscar', async (req, res) => {
  const { query } = req.query;
  const seguros = await db.Seguro.findAll({
    include:
     [{association: "categoria"}, {association: "tipo"}],
      order: [['tipo_id', 'ASC']],
    where: {
      [Op.or]: [
        { nombre: { [Op.like]: `%${query}%` } },
        { descripcion: { [Op.like]: `%${query}%` } },
      ],
    },
  });
  res.render('resultado', { seguros });
});



module.exports = router