import { text } from "express";
import { pool } from "../database/connection.js";


// seleccionar por rut:
const getByRut = async (rut) => {
    const query = {
        text: "SELECT * FROM estudiantes WHERE rut = $1;",
        values: [rut]
    }
    const { rows } = await pool.query(query);
    return rows
}

const all = async () => {
    const query = {
        text: "SELECT * FROM estudiantes;"
    }
    const { rows } = await pool.query(query);
    return rows;
}

const remove = async (id) => {
    const query = {
        text: "DELETE FROM estudiantes WHERE id = $1 RETURNING *;",
        values: [id]
    }
    const { rows } = await pool.query(query);
    return rows;
}

const create = async (estudianteNew) => {
    const query = {
        text: "INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *;",
        values: [estudianteNew.nombre, estudianteNew.rut, estudianteNew.curso, estudianteNew.nivel]
    }
    const { rows } = await pool.query(query)
    return rows
}

const update = async (estudiante) => {
    const query = {
        text: "UPDATE estudiantes SET nombre = $1, curso = $2, nivel = $3 WHERE rut = $4 RETURNING *;",
        values: [estudiante.nombre, estudiante.curso, estudiante.nivel, estudiante.rut]
    }
    const { rows } = await pool.query(query)
    return rows
}

export const modelEstudiantes = {
    getByRut,
    all,
    remove,
    create,
    update

}
