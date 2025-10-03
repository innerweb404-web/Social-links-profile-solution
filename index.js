
const socialList = document.querySelector('.socialList');
const newListItem = document.createElement('li');

newListItem.textContent = "Discord";

socialList.appendChild(newListItem);
socialList.style.cursor = 'pointer';
socialList.addEventListener('click', (event) =>{
    
    if(event.target.tagName === 'LI'){
        socialList.querySelectorAll('li').forEach(li => {
        li.classList.remove('active');
        li.style.cursor = 'pointer';
        });
    }
    event.target.classList.add('active');
    
    
});