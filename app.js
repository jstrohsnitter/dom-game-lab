const enterButtonElement = document.getElementById('enter-button')
const titleScreenElement = document.getElementById('title-screen')
const bodyElement = document.querySelector('body')
const mainMenuElement = document.createElement('div')
const newGameElement = document.createElement('div')
console.dir(enterButtonElement)
console.dir(titleScreenElement)
console.dir(bodyElement)
console.dir(mainMenuElement)



mainMenuElement.setAttribute('id', 'mainMenu')
newGameElement.setAttribute('id', 'new-game')


let insertMainMenu = enterButtonElement.addEventListener('click', () => {
    bodyElement.removeChild(titleScreenElement);
    bodyElement.appendChild(mainMenuElement)
})
 

const titleElement = document.createElement('h1')
titleElement.setAttribute('id', 'title')
titleElement.innerHTML = 'Main Menu'
mainMenuElement.appendChild(titleElement)

const startGameButton = document.createElement('button')
startGameButton.setAttribute('id', 'start-game-button')
startGameButton.innerHTML = 'Start Game'
mainMenuElement.appendChild(startGameButton)

const creditsButtonElement = document.createElement('button')
creditsButtonElement.setAttribute('id', 'credits-button')
creditsButtonElement.innerHTML = 'Credits'
mainMenuElement.appendChild(creditsButtonElement)

let showCredits = creditsButtonElement.addEventListener('click', () => {
    window.open('http://127.0.0.1:5500/credits.html')
})

let startGame = startGameButton.addEventListener('click', () => {
    bodyElement.removeChild(mainMenuElement)
    bodyElement.appendChild(newGameElement)
})

const chooseAPathPrompt = document.createElement('h1')
chooseAPathPrompt.setAttribute('id', 'choose-path')
chooseAPathPrompt.innerHTML = 'Good Day brave knight! The sky has been turned red and evil is afoot. A great journey begins with a single step, which direction shall you choose?'
newGameElement.appendChild(chooseAPathPrompt)

const goLeftButton = document.createElement('button')
goLeftButton.setAttribute('id', 'go-left-button')
goLeftButton.innerHTML = 'Left'
newGameElement.appendChild(goLeftButton)

const goMiddleButton = document.createElement('button')
goMiddleButton.setAttribute('id', 'middle-button')
goMiddleButton.innerHTML = 'The Middle Path'
newGameElement.appendChild(goMiddleButton)

const goRightButton = document.createElement('button')
goRightButton.setAttribute('id', 'go-right-button')
goRightButton.innerHTML = 'Right'
newGameElement.appendChild(goRightButton)













// =========================TRASH PILE========================================
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

// document.body = newBody //got this from google, trying to insert a new body after erasing the old one
// console.dir(newBody)
// console.dir(creditsButtonElement)
// })

// newBody.innerHTML = `
// <div id="main-menu" class="menu">
// <h1 id="Title" >Main Menu </h1>
// <button id="startGameButton" class="button">Start Game</button>
// <button>Credits</button>
// `

// let showCredits = creditsButtonElement.addEventListener('click', () => {
//     // window.open('http://127.0.0.1:5500/credits.html', blank_)
//     console.log('credits button')
    
// })