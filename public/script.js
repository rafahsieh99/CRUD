document.addEventListener("DOMContentLoaded", () => {
    // Escuchar clics en los botones de votación
    const voteButtons = document.querySelectorAll('.vote-button');
    voteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();  // Evitar que el formulario se envíe y recargue la página
            
            const topicId = event.target.dataset.topicId;  // Obtener el ID del tema
            
            // Realizar la solicitud AJAX
            fetch(`/vote/${topicId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Actualizar el contador de votos en la interfaz
                    const voteCountElement = document.getElementById(`vote-count-${topicId}`);
                    voteCountElement.textContent = `Votos: ${data.vote_count}`;
                } else {
                    alert('Hubo un error al votar');
                }
            })
            .catch(error => {
                console.error('Error en la solicitud AJAX:', error);
            });
        });
    });
});
