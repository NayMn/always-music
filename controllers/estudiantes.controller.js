import { modelEstudiantes } from "../models/estudiantes.model.js";

const getEstudiantes = async (req, res) => {
    try {
        const estudiantes = await modelEstudiantes.all()
        return res.json(estudiantes)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}



const getEstudianteByRut = async (req, res) => {
    try {
        const { rut } = req.params
        const estudiante = await modelEstudiantes.getByRut(rut)
        if (estudiante.length > 0) {
            return res.json(estudiante[0])
        } else {
            return console.log("error")
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false })
    }
}


const removeEstudiantes = async (req, res) => {
    try {
        const { id } = req.params;
        const estudiante = await modelEstudiantes.remove(id)
        if (estudiante.length > 0) {
            return res.json(estudiante[0])
        } else {
            return console.log("error")
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false })
    }
}



const createEstudiantes = async (req, res) => {
    try {
        const { nombre, rut, curso, nivel } = req.body

        const newEstudiante = {
            nombre,
            rut,
            curso,
            nivel
        }

        const estudiante = await modelEstudiantes.create(newEstudiante);
        return res.status(201).json(estudiante[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ ok: false });
    }
}

const updateEstudiantes = async (req, res) => {

    try {
        const { rut } = req.params
        const { nombre, curso, nivel } = req.body
        const updatedEstudiante = { nombre, rut, curso, nivel }
        const estudiante = await modelEstudiantes.update(updatedEstudiante)
        if (estudiante.length > 0) {
            return res.json(estudiante[0])
        } else {
            return console.log("error")
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}



export const estudianteControler = {
    getEstudiantes,
    getEstudianteByRut,
    createEstudiantes,
    removeEstudiantes,
    updateEstudiantes

}