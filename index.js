//importar dependecias
const express = require('express');
const app = express();
const exphbs = require('express-handlebars')
const PORT = 3003;

//configuración del motor de plantilla
app.set('view engine', 'hbs')
app.engine('hbs', exphbs.engine({
    extname:'hbs'
}));
app.set('views', __dirname + '/views');


//rutas statics
app.use(express.static('assets'))
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'))


//Rutas raiz
app.get('/', (req, res) => {
    // Renderizar la vista 'home' con los productos
    res.render('home', {
        products: ['banana', 'cebollas', 'pimenton', 'papas', 'lechuga', 'tomate']
    })
});





//iniciar el servidor
app.listen(PORT, () => console.log(`El servidor se ha llamado en el port http://localhost:${PORT}`))
