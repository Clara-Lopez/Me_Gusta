// Aumentar contador de Me gusta al hacer clic en el botón correspondiente
const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const likeCount = button.previousElementSibling;
        const currentLikes = parseInt(likeCount.textContent);
        likeCount.textContent = `${currentLikes + 1} likes`;
    });
});
