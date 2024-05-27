import { Router } from "express";
import { estudianteControler } from "../controllers/estudiantes.controller.js";
const router = Router()

router.get('/', estudianteControler.getEstudiantes)
router.get('/:rut', estudianteControler.getEstudianteByRut)
router.post('/', estudianteControler.createEstudiantes)
router.put('/:id', estudianteControler.updateEstudiantes)
router.delete('/:id', estudianteControler.removeEstudiantes)


export default router