const enterButtonElement = document.getElementById('enter-button')
const titleScreenElement = document.getElementById('title-screen')
const bodyElement = document.querySelector('body')
const mainMenuElement = document.createElement('div')
const newGameElement = document.createElement('div')
const middlePathElement = document.createElement('div')
const fireElement = document.createElement('div')
console.dir(enterButtonElement)
console.dir(titleScreenElement)
console.dir(bodyElement)
console.dir(mainMenuElement)



mainMenuElement.setAttribute('id', 'main-menu')
newGameElement.setAttribute('id', 'new-game')
middlePathElement.setAttribute('id', 'the-middle-path')
fireElement.setAttribute('id', 'fire-element')


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

// const buttonContainerElement = document.createElement('div')
// buttonContainerElement.setAttribute ('id', 'button-container')
// buttonContainerElement.appendChild(mainMenuElement)
// buttonContainerElement.innerHTML = 'test'
// console.dir(buttonContainerElement)

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

let theMiddlePath = goMiddleButton.addEventListener('click', () => {
    bodyElement.removeChild(newGameElement)
    bodyElement.appendChild(middlePathElement)
})

const middlePathPrompt = document.createElement('h3')
middlePathPrompt.setAttribute('id', 'middle-path-prompt')
middlePathPrompt.innerHTML = "You have encountered a downed tree! Night is closing in, the wolves are howling, and the temperature is falling fast. Click the tree to swing thy axe, chop some wood, and build a fire."
middlePathElement.appendChild(middlePathPrompt)

const treeButton = document.createElement('button')
treeButton.setAttribute('id', 'tree-button')
treeButton.innerHTML = 'Tree'
middlePathElement.appendChild(treeButton)


const swingCountLog = document.createElement('h4')
swingCountLog.setAttribute('id', 'swing-count-log')
middlePathElement.appendChild(swingCountLog)

const logCountLog = document.createElement('h4')
logCountLog.setAttribute('id', 'log-count-log')
middlePathElement.appendChild(logCountLog)




let swingCount = 0;
let logCount = 0

const handleSwing = (event) => {
    if(event.target.id === 'tree-button'){
        swingCount = swingCount + 1;
        console.log(swingCount)
        swingCountLog.textContent = `You have taken ${swingCount} swing(s), KEEP CHOPPING!!`
       
        if(swingCount % 5 === 0) { //modulus operator % will return the remainder of a division, in this case i am looking for even distributions, so the remainder will be 0, arrays lab referenced//
            logCount = swingCount / 5
            logCountLog.textContent = `You have collected ${logCount} log(s)`
            if(logCount === 20){
                console.log('build a fire')
                const fireButton = document.createElement('button')
                fireButton.setAttribute('id', 'fire-button')
                fireButton.innerHTML = 'Build A Fire!'
                middlePathElement.appendChild(fireButton)
                let buildAFire = fireButton.addEventListener('click', () => {
                    bodyElement.removeChild(middlePathElement)
                    bodyElement.appendChild(fireElement)
                })
            }
        }
        
    }
}

const fireGameEnd = document.createElement('h2')
fireGameEnd.setAttribute('id', 'fire-game-end-prompt')
fireGameEnd.innerHTML = 'Blaze that fire Knight. Feels good does it not? aw yea. Take a load off. Rest thy weary bones. Tomorrow brings a new day, and a new set of challeneges.'
fireElement.appendChild(fireGameEnd)

treeButton.addEventListener('click', handleSwing)








// =========================TRASH PILE========================================
    //     bodyElement.remove(titleScreenElement);
//     mainMenuScreen()
// })  

// function mainMenuScreen () {
//     console.log('test')
//     const newBody = document.createElement('body')
// //     console.dir(newBody)
// //     newBody.setAttribute('id', 'body2')
// //     const mainMenuHeaderElement = document.createElement('h1')
// //     mainMenuHeaderElement.setAttribute('id', 'main-menu-header')
// //     mainMenuElement.appendChild(mainMenuHeaderElement)
// //     mainMenuHeaderElement.innerHTML = 'Main Menu'
// // }

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