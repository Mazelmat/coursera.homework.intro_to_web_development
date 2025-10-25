// Get all list items from navigation and skills
const listItems = document.querySelectorAll('.nav-list li, .skills-list li');

// Add event listeners for mouseover and mouseout
listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transition = 'text-shadow 0.3s ease';
        item.style.textShadow = '0 0 10px gold';
    });
    
    item.addEventListener('mouseout', () => {
        item.style.textShadow = 'none';
    });
});
