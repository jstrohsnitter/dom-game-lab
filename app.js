const enterButtonElement = document.getElementById('enter-button')
const titleScreenElement = document.getElementsByClassName('title')
const bodyElement = document.getElementById('body1')
const mainMenuElement = document.getElementById('main-menu')
console.dir(enterButtonElement)
console.dir(titleScreenElement)
console.dir(bodyElement)
console.dir(mainMenuElement)

let insertMainMenu = enterButtonElement.addEventListener('click', () => {
    const newBody = document.createElement('body')
    document.body = newBody
    console.dir(newBody)
    newBody.innerHTML = `
    <div id="mainMenu" class="menu">
    <h1 id="Title" >Main Menu </h1>
    <button id="startGameButton" class="button">Start Game</button>
    <button id="creditsButton" class="button">Credits</button>
    <button class="button">Quit Game</button>`
})

    //     bodyElement.remove(titleScreenElement);
//     mainMenuScreen()
// })  

// function mainMenuScreen () {
//     console.log('test')
//     const newBody = document.createElement('body')
//     console.dir(newBody)
//     newBody.setAttribute('id', 'body2')
//     const mainMenuHeaderElement = document.createElement('h1')
//     mainMenuHeaderElement.setAttribute('id', 'main-menu-header')
//     mainMenuElement.appendChild(mainMenuHeaderElement)
//     mainMenuHeaderElement.innerHTML = 'Main Menu'
// }