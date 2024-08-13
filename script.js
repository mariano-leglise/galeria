
const imgContainers = document.querySelectorAll('.img');

imgContainers.forEach(container => {
    container.addEventListener('mouseover', () => {
        container.style.transition = 'transform 0.3s ease'; 
        container.style.transform = 'scale(1.1)';
    });
    container.addEventListener('mouseout', () => {
        container.style.transform = 'scale(1)';
    });
});
