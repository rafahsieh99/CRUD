# CRUD

# Sistema de Votacion y Gestión de Temas de Aprendizaje

Este proyecto es una aplicación CRUD construida en Node.js y Express, diseñada para gestionar temas de aprendizaje. Los usuarios pueden agregar nuevos temas, votar por sus temas favoritos y eliminar temas que ya no les interesen.

## Tecnologías Utilizadas
- **Node.js** - Entorno de ejecución para JavaScript en el servidor.
- **Express** - Framework de Node.js para construir aplicaciones web.
- **EJS** - Motor de plantillas para generar HTML dinámico.
- **PostgreSQL** - Sistema de gestión de bases de datos relacional, administrado con pgAdmin.
- **JavaScript (Frontend)** - Código en JavaScript puro para manejar eventos en el navegador.

## Funcionalidades
- **Agregar Tema**: Permite añadir nuevos temas de aprendizaje.
- **Votar por un Tema**: Los usuarios pueden votar por los temas para incrementar su popularidad.
- **Eliminar Tema**: Los usuarios pueden eliminar temas de la lista.

## Requisitos Previos
- **Node.js** y **npm**: Asegúrate de tener Node.js y npm instalados. Puedes descargarlos desde [Node.js](https://nodejs.org/).
- **PostgreSQL**: Necesitas tener PostgreSQL instalado en tu máquina. Puedes descargarlo desde [PostgreSQL](https://www.postgresql.org/download/).
- **pgAdmin**: Herramienta de administración para PostgreSQL que puedes usar para gestionar tu base de datos. Puedes descargarlo desde [pgAdmin](https://www.pgadmin.org/download/).

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/rafahsieh99/CRUD.git

## Estructura del Proyecto
```bash
nombre-del-repositorio/
├── public/
│   └── script.js         # Script JavaScript para manejar la votación
├── views/
│   └── index.ejs         # Plantilla principal
├── controllers/
│   └── topicController.js # Lógica para manejar las rutas del CRUD
├── models/
│   └── topicModel.js     # Modelo para interactuar con la base de datos
├── config.js             # Archivo de configuración de la base de datos
├── app.js                # Archivo principal de la aplicación
└── README.md             # Documentación del proyecto
```
## Ejecucion de la Aplicacion
Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```bash
node app.js

```
Luego, abre tu navegador y navega a http://localhost:3000 para ver la aplicación en funcionamiento.
