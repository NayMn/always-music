import { Router } from "express";
const router = Router()

router.get('/', (req, res) => {
    res.json({ ok: true })
})

router.post('/', (req, res) => {
    res.json({ ok: true })
})

router.put('/:id', (req, res) => {
    res.json({ ok: true })
})

router.delete('/:id', (req, res) => {
    res.json({ ok: true })
})


export default router