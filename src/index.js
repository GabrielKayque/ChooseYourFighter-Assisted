// Change the ul > li class to selected  when mouse is hovering

const characters = document.querySelectorAll('.character-list>li')

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {
        document.querySelector('.selected').classList.remove('selected')
        character.classList.add('selected')
    })
})

// Change the name e photo from big character 1 when mouse is hovering