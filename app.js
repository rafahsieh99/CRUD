const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const topicController = require('./controllers/topicController');

const app = express();

// Configurar el motor de plantillas (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para procesar los datos del cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.get('/', topicController.getTopics); // Mostrar todos los temas
app.post('/create', topicController.createTopic); // Crear un nuevo tema
app.post('/vote/:id', topicController.voteTopic); // Votar por un tema
app.post('/delete/:id', topicController.deleteTopic); // Eliminar un tema

// Servir archivos estáticos (para el archivo script.js)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
