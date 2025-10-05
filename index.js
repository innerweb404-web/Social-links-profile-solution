
const socialList = document.querySelector('.socialList');
const newListItem = document.createElement('li');

newListItem.textContent = "Discord";

socialList.appendChild(newListItem);
socialList.style.cursor = 'pointer';
socialList.addEventListener('click', (event) =>{
    /*
    Using closest instead of tagName is very necessary if there's
    another element inside the <LI> element.
    */
    if(event.target.closest === 'LI'){
        socialList.querySelectorAll('li').forEach(li => {
        li.classList.remove('active');
        li.style.cursor = 'pointer';
        });
        /*
        Adding this event inside the if statement
        would make it possible for me to access only the
        list elements insie the <UL> tag.
        */
        event.target.classList.add('active');
    }
    
    
});
