document.addEventListener("DOMContentLoaded", () => {
    // Escuchar clics en los botones de votación
    const voteButtons = document.querySelectorAll('.vote-button');
    voteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Aquí no se llama a `event.preventDefault()`, permitiendo la recarga de la página
            
            const topicId = event.target.dataset.topicId;  // Obtener el ID del tema

            // Realizar la solicitud POST al servidor usando fetch
            fetch(`/vote/${topicId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .catch(error => {
                console.error('Error en la solicitud AJAX:', error);
            });
        });
    });
});
