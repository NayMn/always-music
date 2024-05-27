import { pool } from "../database/connection.js";

const all = async () => {
    const { rows } = await pool.query("SELECT * FROM estudiates;")
    return rows
}

const remove = async (id) => {
    const queryString = "DELETE FROM estudiantes where id = $1 returning *;"
    const { rows } = await pool.query(queryString, [id])
    return rows
}


export const modelEstudiantes = [
    all,
    remove
]

