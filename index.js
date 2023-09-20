const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express()

app.use(function(req, res, next) {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', '*');
     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next()
})
app.use(bodyParser.json());

const PUERTO = 9300

const conexion = mysql.createConnection(
    {
        host:'localhost',
        port:3307,
        database:'infoabogadoss',
        user:'root',
        password:''
}
)
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}`);
})

conexion.connect(error => {
    if(error) throw error
    console.log('Conexión exitosa a la base de datos');
})


app.get('/', (req, res) => {
    res.send('API')
})

//reservaciones/*
app.post('/reservaciones', (req, res) => {
    let { 
        nombre,desc_caso,fecha,hora,Profesional
    } = req.body

    const query = `INSERT INTO reservaciones VALUES (NULL,'${nombre}','${desc_caso}','${fecha}',${hora},'${Profesional}')`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json('Cita Registrada Con Exito')
    })
})
app.get('/reservaciones', (req, res) => {
    const query = `SELECT * FROM reservaciones`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
})
})


app.get('/reservaciones/:id_reserva', (req, res) => {
    const { id_reserva} = req.params
   
    const query = `SELECT * FROM reservaciones WHERE id_reserva=${id_reserva}`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se actualizó correctamente la reservacion`)
})
})
app.delete('/reservaciones_eliminar/:id_reserva', (req, res) => {
    const { id_reserva } = req.params

    const query = `DELETE from reservaciones WHERE id_reserva=${id_reserva}`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se eliminó correctamente`)
 })
})
app.put('/reservaciones_editar/:id_reserva', (req, res) => {
    const { id_reserva} = req.params
    let {
        nombre_usuario,desc_caso,fecha,hora,Profesional
    } = req.body

    const query = `UPDATE reservaciones SET nombre_usuario='${nombre_usuario}',desc_caso='${desc_caso}',Fecha='${fecha}',Hora=${hora},Profesional='${Profesional}' WHERE id_reserva=${id_reserva}`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se actualizó correctamente el usuario`)
})
})

//reg/*
app.post('/login', (req, res) => {
    let { 
        tipo_documento,id_usuario,nombre,apellido,ciudad,email,contrasena
    } = req.body

    const query = `INSERT INTO login VALUES (${id_usuario},'${tipo_documento}','${nombre}','${apellido}','${ciudad}','${email}','${contrasena}')`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json('usuario Registrado Con Exito')
    })
})
app.get('/login', (req, res) => {
    const query = `SELECT * FROM login`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
})
})


app.get('/login/:id_usuario', (req, res) => {
    const { id_usuario} = req.params
   

    const query = `SELECT * FROM login WHERE id_usuario=${id_usuario}`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se actualizó correctamente el usuario`)
})
})
app.delete('/login_eliminar/:id_usuario', (req, res) => {
    const { id_usuario } = req.params

    const query = `DELETE from login WHERE id_usuario=${id_usuario}`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se eliminó correctamente`)
 })
}) 

app.put('/login_editar/:id_usuario', (req, res) => {
    const { id_usuario} = req.params
    let {
        tipo_documento,nombre,apellido,ciudad,email,contrasena
    } = req.body

    const query = `UPDATE login SET tipo_documento='${tipo_documento}',nombre='${nombre}',apellido='${apellido}',ciudad='${ciudad}',email='${email}',contrasena='${contrasena}' WHERE id_usuario=${id_usuario}`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se actualizó correctamente el usuario`)
})
})

//login

app.post('/login_validar', (req, res) => {
    let   { 
        email,contrasena
    } = req.body

    const  query = `SELECT * FROM login WHERE email='${email}' AND contrasena='${contrasena}';`

    
    conexion.query(query, (error,resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json('Bienvenido')
        } else {
            res.json('Email o contraseña invalidas')
        }
    })
})

