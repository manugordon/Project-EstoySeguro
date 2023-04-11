const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session')
const cookies = require('cookie-parser')

const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware')

app.use(session({secret: "Shh, its a secret",
resave: false,
saveUninitialized:false
}))

const mainRouter = require('./src/routers/mainRouter');
const productsRouter = require('./src/routers/productsRouter')
const userRouter = require('./src/routers/userRouter')
const productsApiRouter = require ('./src/routers/productsApiRouter')
const userApiRouter = require ('./src/routers/userApiRouter')
const userProductsApiRouter = require ('./src/routers/userProductsApiRouter');
const sinisterRouter = require('./src/routers/sinisterRouter');
const sinisterApiRouter = require ('./src/routers/sinisterApiRouter')


app.listen (3001, ()=>{
    console.log('Server Ok')
});
app.use(cookies())
app.use(userLoggedMiddleware)
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.set('view engine', 'ejs')
app.set('views', './src/views'); // Seteo de la ubicación de la carpeta "views"

app.use('/', mainRouter)
app.use('/products', productsRouter)
app.use('/user', userRouter)
app.use('/apip', productsApiRouter)
app.use('/apiu', userApiRouter)
app.use('/apiup', userProductsApiRouter)
app.use('/sinister', sinisterRouter)
app.use('/apis', sinisterApiRouter)
