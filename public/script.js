document.addEventListener("DOMContentLoaded", () => {
    // Escuchar clics en los botones de votación
    const voteButtons = document.querySelectorAll('.vote-button');
    voteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const topicId = event.target.dataset.topicId;  // Obtener el ID del tema

            // Realizar la solicitud POST al servidor usando fetch
            fetch(`/vote/${topicId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                if (response.ok) {
                    // Recargar la página para ver el voto actualizado
                    window.location.reload();
                } else {
                    console.error("Error en la respuesta del servidor:", response.statusText);
                }
            })
            .catch(error => {
                console.error('Error en la solicitud AJAX:', error);
            });
        });
    });
});
