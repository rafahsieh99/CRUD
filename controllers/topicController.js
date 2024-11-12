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
    
    // Obtener el tema actualizado con el nuevo conteo de votos
    const topic = await topicModel.getTopicById(id);
    
    // Devolvemos el nuevo conteo de votos en formato JSON
    res.json({
        success: true,
        vote_count: topic.vote_count,
    });
};

// Eliminar un tema
const deleteTopic = async (req, res) => {
    const { id } = req.params;
    await topicModel.deleteTopic(id);
    res.redirect('/');
};

module.exports = { createTopic, getTopics, voteTopic, deleteTopic };


// ver como hacer rutas y desglosar las rutas para livecoding
