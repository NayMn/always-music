import { Router } from "express";
import { estudianteControler } from "../controllers/estudiantes.controller.js";
const router = Router()

router.get('/', estudianteControler.getEstudiantes)

router.post('/', estudianteControler.)

router.put('/:id', estudianteControler.)

router.delete('/:id', estudianteControler.removeEstudiantes)


export default router