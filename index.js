const socialList = document.querySelector('.socialList');
const newListItem = document.createElement('li');

newListItem.textContent = "Discord";
socialList.appendChild(newListItem);
socialList.style.cursor = 'pointer';

socialList.addEventListener('click', (event) => {
    // Find the closest <li> element
    const clickedLi = event.target.closest('li');
    if (!clickedLi) return; // exit if not clicking inside <li>

    // Remove 'active' from all <li>
    socialList.querySelectorAll('li').forEach(li => {
        li.style.cursor = 'pointer';
        li.classList.remove('active');
    });

    // Add 'active' to the clicked <li>
    clickedLi.classList.add('active');
});
