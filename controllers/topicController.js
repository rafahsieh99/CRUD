const topicModel = require('../models/topicModel');

// Crear un nuevo tema
const createTopic = async (req, res) => {
    const { name } = req.body;
    await topicModel.createTopic(name);
    res.redirect('/');
};

// Leer todos los temas
const getTopics = async (req, res) => {
    const topics = await topicModel.getTopics();
    res.render('index', { topics });
};

// Actualizar votos de un tema
const voteTopic = async (req, res) => {
    const { id } = req.params;
    await topicModel.voteTopic(id);
    
    // Redirigimos a la página principal para ver los votos actualizados
    res.redirect('/');
};

// Eliminar un tema
const deleteTopic = async (req, res) => {
    const { id } = req.params;
    await topicModel.deleteTopic(id);
    res.redirect('/');
};

module.exports = { createTopic, getTopics, voteTopic, deleteTopic };
