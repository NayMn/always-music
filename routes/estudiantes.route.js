import { Router } from "express";
import { estudianteControler } from "../controllers/estudiantes.controller.js";
const router = Router()

router.get('/', estudianteControler.getEstudiantes)

router.post('/', (req, res) => {
    res.json({ ok: true })
})

router.put('/:id', (req, res) => {
    res.json({ ok: true })
})

router.delete('/:id', estudianteControler.removeEstudiantes)


export default router