import express from 'express'
import 'dotenv/config'
import routerEstudiantes from './routes/estudiantes.route.js'


const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/estudiantes', routerEstudiantes)



const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('servidor escuchando ...')
})