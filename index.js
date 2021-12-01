const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const db = require('./dao/models')
const multer = require('multer')
const upload = multer({dest: 'public/images'})
const { Console } = require('console')

const PORT = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended : false
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(session({
    secret : "ydaleu",
    resave : false,
    saveUninitialized : false
}))

app.use(express.static('assets'))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/partida', async (req, res) =>{
    const partidas = await db.Partida.findAll()
    res.render('partida', {
        partidas : partidas
    })
})

app.get('/partida/new', (req, res) =>{
    res.render('partidanew')
})

app.post('/partida/new', async (req, res) =>{
    const nombre = req.body.pNomnbre
    const fecha = req.body.pFecha
    const hora= req.body.pInicio
    const duracion = req.body.pDuracion
    const estado = req.body.pEstado

    await db.Partida.create({
        tipoJuegoId : nombre,
        fecha : fecha,
        hora : hora,
        duracion : duracion,
        estado : estado
    })

    res.redirect('/partida')
})

app.get('/partida/modificarpartida/:codigo', async (req, res) =>{
    const idP = req.params.codigo

    const partida = await db.Partida.findOne({
        where : {
            id : idP
        }
    })
    
    res.render('partidaupdate', {
        partida : partida
    })
})

app.post('/partida/modificarpartida', async (req, res) =>{
    const idP = req.body.id
    const equipoA = req.body.equipoA
    const equipoB = req.body.equipoB
    const factorA = req.body.factorA
    const factorB = req.body.factorB
    const factorE = req.body.factorE

    // Obtenemos partida

    const partida = await db.Partida.findOne({
        where : {
            id : idP
        }
    })

    // Cambiar propiedades
    partida.equipoA = equipoA
    partida.factorA = factorA
    partida.equipoB = equipoB
    partida.factorB = factorB
    partida.factorE = factorE
 
    // Guardamos la info*/

   /* await db.partida.update({
        equipoA : equipoA,
        factorA : factorA,
        equipoB : equipoB,
        factorB : factorB,
        factorE : factorE
    }, {
        where: {
            id: idP,
        }
    });*/

   await partida.save()

    res.redirect('/partida')
})

app.get('/partida/eliminarpartida/:codigo', async (req, res) =>{
    const id = req.params.codigo
    await db.Partida.destroy({
        where: {
            id : id
        }
    })
    res.redirect('/partida')
})

app.get('/cliente', async (req, res) => {

    const clientes = await db.Cliente.findAll()
    
    res.render('cliente', {
        clientes : clientes
    })
})

app.get('/cliente/new', (req, res) => {
    res.render('clientenew')
})

app.post('/cliente/new', async (req, res) =>{
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const dni = req.body.dni
    const correo = req.body.correo
    const contrasena = req.body.contrasena
    const numero = req.body.telefono
    const direccion = req.body.direccion
    const upep = req.body.pep
    
    await db.Cliente.create({
        nombre : nombre,
        apellido : apellido,
        dni : dni,
        correo : correo,
        contrasena : contrasena,
        numero : numero,
        direccion : direccion,
        pep : upep
    })

    res.redirect('/cliente')
})

app.get('/cliente/eliminarcliente/:codigo', async (req, res) =>{
    const idC = req.params.codigo
    await db.Cliente.destroy({
        where: {
            id : idC
        }
    })
    res.redirect('/cliente')
})

app.get('/', (req, res) =>{
    res.render('administrador')
})

app.listen(PORT, ()=> {
    console.log(`El servidor se inicio correctamente en el puerto ${PORT}`)
})

