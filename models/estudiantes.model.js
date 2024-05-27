import { pool } from "../database/connection.js";


// seleccionar por rut:
const getByRut = async (rut) => {
    const queryString = "SELECT * FROM estudiantes WHERE rut = $1;"
    const { rows } = await pool.query(queryString, [rut]);
    return rows
}

const all = async () => {
    const { rows } = await pool.query("SELECT * FROM estudiantes WHERE rut = $1;")
    return rows
}


const remove = async (id) => {
    const queryString = "DELETE FROM estudiantes where rut = $1 returning *;"
    const { rows } = await pool.query(queryString, [rut])
    return rows
}

const create = async (estudianteNew) => {
    const queryString = "INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *;"
    const { rows } = await pool.query(queryString, [estudianteNew.nombre, estudianteNew.rut, estudianteNew.curso, estudianteNew.nivel])
    return rows
}

const update = async (estudiante) => {
    const queryString = "UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4 RETURNING *;"
    const { rows } = await pool.query(queryString, [estudiante.nombre, estudiante.curso, estudiante.nivel, estudiante.rut])
    return rows
}

export const modelEstudiantes = [
    getByRut,
    all,
    remove,
    create,
    update
]

