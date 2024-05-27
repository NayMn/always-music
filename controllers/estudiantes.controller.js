import { modelEstudiantes } from "../models/estudiantes.model.js";

const getEstudiantes = async (req, res) => {
    try {
        const estudiante = await modelEstudiantes.all()
        return res.json(estudiante)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}

const removeEstudiantes = async (req, res) => {
    try {
        const { rut } = req.params
        const estudiante = await modelEstudiantes.remove(rut)
        return res.json(500).json(estudiante)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
}






export const estudianteControler = {
    getEstudiantes,
    removeEstudiantes

}