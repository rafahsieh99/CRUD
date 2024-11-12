const pool = require('../config');

// Crear un nuevo tema
const createTopic = async (name) => {
    const result = await pool.query('INSERT INTO topics(name) VALUES($1)', [name]);
    return result;
};

// Obtener todos los temas
const getTopics = async () => {
    const result = await pool.query('SELECT * FROM topics ORDER BY vote_count DESC');
    return result.rows;
};

// Obtener un tema por ID
const getTopicById = async (id) => {
    const result = await pool.query('SELECT * FROM topics WHERE id = $1', [id]);
    return result.rows[0];
};

// Votar por un tema
const voteTopic = async (id) => {
    await pool.query('UPDATE topics SET vote_count = vote_count + 1 WHERE id = $1', [id]);
};

// Eliminar un tema
const deleteTopic = async (id) => {
    await pool.query('DELETE FROM topics WHERE id = $1', [id]);
};

module.exports = { createTopic, getTopics, voteTopic, deleteTopic, getTopicById };
