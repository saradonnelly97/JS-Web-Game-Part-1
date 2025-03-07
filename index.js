function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}


newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

function newItem(url, left, bottom) {
    let object = newImage(url, left, bottom)
    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

newItem('assets/staff.png', 165, 185)
newItem('assets/shield.png', 600, 100)
newItem('assets/sword.png', 500, 405)

//Will be updating the assets and changing them soon