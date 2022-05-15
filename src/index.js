// Change the ul > li class to selected  when mouse is hovering

const characters = document.querySelectorAll('.character-list>li');

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {
        document.querySelector('.selected').classList.remove('selected');
        character.classList.add('selected');

        // Change the name e photo from big character 1 when mouse is hovering list
        const imgPlayer1 = document.getElementById('character-player1');
        const imgSelected = character.children[1].dataset.png;
        imgPlayer1.attributes.src.value = `src/images/${imgSelected}`;
        const name = document.querySelector('#character-name')
        name.innerHTML = character.dataset.name
    });
})

