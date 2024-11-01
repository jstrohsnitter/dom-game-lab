const enterButtonElement = document.getElementById('enter-button')
const titleScreenElement = document.getElementById('title-screen')
const bodyElement = document.querySelector('body')
const mainMenuElement = document.createElement('div')
const newGameElement = document.createElement('div')
const middlePathElement = document.createElement('div')
const fireElement = document.createElement('div')
const storeElement = document.createElement('div')
console.dir(enterButtonElement)
console.dir(titleScreenElement)
console.dir(bodyElement)
console.dir(mainMenuElement)



mainMenuElement.setAttribute('id', 'main-menu')
newGameElement.setAttribute('id', 'new-game')
middlePathElement.setAttribute('id', 'the-middle-path')
fireElement.setAttribute('id', 'fire-element')
storeElement.setAttribute('id', 'store-element')


let insertMainMenu = enterButtonElement.addEventListener('click', () => {
    bodyElement.removeChild(titleScreenElement);
    bodyElement.appendChild(mainMenuElement)
})
 

const titleElement = document.createElement('h1')
titleElement.setAttribute('id', 'title')
titleElement.innerHTML = 'Main Menu'
mainMenuElement.appendChild(titleElement)

const buttonContainerElement = document.createElement('div')
buttonContainerElement.setAttribute ('id', 'button-container')
mainMenuElement.appendChild(buttonContainerElement)
console.dir(buttonContainerElement)

const startGameButton = document.createElement('button')
startGameButton.setAttribute('id', 'start-game-button')
startGameButton.innerHTML = 'Start Game'
buttonContainerElement.appendChild(startGameButton)

const creditsButtonElement = document.createElement('button')
creditsButtonElement.setAttribute('id', 'credits-button')
creditsButtonElement.innerHTML = 'Credits'
buttonContainerElement.appendChild(creditsButtonElement)

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

const newGameButtonContainerElement = document.createElement('div')
newGameButtonContainerElement.setAttribute ('id', 'new-game-button-container')
newGameElement.appendChild(newGameButtonContainerElement)
console.dir(buttonContainerElement)

const goLeftButton = document.createElement('button')
goLeftButton.setAttribute('id', 'go-left-button')
goLeftButton.innerHTML = 'Left'
newGameButtonContainerElement.appendChild(goLeftButton)

const goMiddleButton = document.createElement('button')
goMiddleButton.setAttribute('id', 'middle-button')
goMiddleButton.innerHTML = 'The Middle Path'
newGameButtonContainerElement.appendChild(goMiddleButton)

const goRightButton = document.createElement('button')
goRightButton.setAttribute('id', 'go-right-button')
goRightButton.innerHTML = 'Right'
newGameButtonContainerElement.appendChild(goRightButton)

let theMiddlePath = goMiddleButton.addEventListener('click', () => {
    bodyElement.removeChild(newGameElement)
    bodyElement.appendChild(middlePathElement)
})

const middlePathPrompt = document.createElement('h3')
middlePathPrompt.setAttribute('id', 'middle-path-prompt')
middlePathPrompt.innerHTML = "You have encountered a downed tree! Night is closing in, the wolves are howling, and the temperature is falling fast. Click the tree to swing thy axe, chop some wood, and build a fire."
middlePathElement.appendChild(middlePathPrompt)

const treeAndStepButtonContainerElement = document.createElement('div')
treeAndStepButtonContainerElement.setAttribute ('id', 'tree-step-button-container')
middlePathElement.appendChild(treeAndStepButtonContainerElement)
console.dir(treeAndStepButtonContainerElement)

const treeButton = document.createElement('button')
treeButton.setAttribute('id', 'tree-button')
treeButton.innerHTML = ''
treeAndStepButtonContainerElement.appendChild(treeButton)

const stepBackButton = document.createElement('button')
stepBackButton.setAttribute('id', 'step-back-button')
stepBackButton.innerHTML = 'Step Back'
treeAndStepButtonContainerElement.appendChild(stepBackButton)

let stepBackButtonClick = stepBackButton.addEventListener('click', () => {
    bodyElement.removeChild(middlePathElement)
    bodyElement.appendChild(newGameElement)
    logCount = 0
    robbedLogCount = 0 
    robbedLogCount2 = 0
    robbedLogCount3 = 0
    swingCount = 0
    swingCountLog.textContent = ""
    logCountLog.textContent = ""
})

const swingCountLog = document.createElement('h4')
swingCountLog.setAttribute('id', 'swing-count-log')
middlePathElement.appendChild(swingCountLog)

const logCountLog = document.createElement('h4')
logCountLog.setAttribute('id', 'log-count-log')
middlePathElement.appendChild(logCountLog)

const robbedLogCountLog = document.createElement('h4')
robbedLogCountLog.setAttribute('id', 'robbed-log-count-log')
middlePathElement.appendChild(robbedLogCountLog)


let swingCount = 0;
let logCount = 0;
let robbedLogCount = 0;
let robbedLogCount2 = 0;
let robbedLogCount3 = 0;

// if (robbedLogs > 0 && (swingCount % 5 === 0)){
//     robbedLogCount = logCount - robbedLogs
//     robbedLogCountLog.textContent = `You have collected ${robbedLogCount} log(s)`
// }


const handleSwing = (event) => {
    if(event.target.id === 'tree-button'){
        swingCount = swingCount + 1;
        console.log(swingCount)
        swingCountLog.textContent = `You have taken ${swingCount} swing(s), KEEP CHOPPING!!`
        
// ==============================SCRIPT BEFORE FUNCTION COMPILATION===================================================================

        if(swingCount % 5 === 0) { //modulus operator % will return the remainder of a division, in this case i am looking for even distributions, so the remainder will be 0, arrays lab referenced//
           
          logCount = swingCount / 5 - robbedLogCount - robbedLogCount2 - robbedLogCount3
          logCountLog.textContent = `You have collected ${logCount} log(s)`
           
            if(swingCount === 10) {
                function logDeduction () {
                    return (Math.floor(Math.random() * 3)) 
                }  
            let robbedLogs = logDeduction ()
            console.log(robbedLogs)
        
            if (robbedLogs > 0) {
                robbedLogCount = robbedLogs
                logCount = logCount - robbedLogs
                logCountLog.textContent = `you have been robbed! you now have ${logCount} log(s). KEEP CHOPPING!!`
            }
            
            if (robbedLogs = 0) {
                robbedLogCount = robbedLogs
                logCount = logCount - robbedLogs
                logCountLog.textContent = `You have collected ${logCount} log(s)`
            } 

        }
            if(swingCount === 20) {
                function logDeduction () {
                    return (Math.floor(Math.random() * 2)) 
                }  
            let robbedLogs = logDeduction ()
            console.log(robbedLogs)
        
            if (robbedLogs > 0) {
                robbedLogCount2 = robbedLogs
                logCount = logCount - robbedLogs
                logCountLog.textContent = `you have been robbed! you now have ${logCount} log(s). KEEP CHOPPING!!`
            } 

            if (robbedLogs = 0) {
                robbedLogCount2 = robbedLogs
                logCount = logCount - robbedLogs
                logCountLog.textContent = `You have collected ${logCount} log(s)`
            } 
        }

            if(swingCount === 50) {
                function logDeduction () {
                    return (Math.floor(Math.random() * 6)) 
                }  
            let robbedLogs = logDeduction ()
            console.log(robbedLogs)
        
            if (robbedLogs > 0) {
                robbedLogCount3 = robbedLogs
                logCount = logCount - robbedLogs
                logCountLog.textContent = `you have been robbed! you now have ${logCount} log(s). KEEP CHOPPING!!`
            } 

            if (robbedLogs = 0) {
                robbedLogCount3 = robbedLogs
                logCount = logCount - robbedLogs
                logCountLog.textContent = `You have collected ${logCount} log(s)`
            } 
        }

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

// ========================================================================================================================================================================================



const fireGameEnd = document.createElement('h2')
fireGameEnd.setAttribute('id', 'fire-game-end-prompt')
fireGameEnd.innerHTML = 'Blaze that fire Knight. Feels good does it not? aw yea. Take a load off. Rest thy weary bones. Tomorrow brings a new day, and a new set of challeneges.'
fireElement.appendChild(fireGameEnd)

treeButton.addEventListener('click', handleSwing)

const inventory = {
    kit: []
}

const store = {
    items: [
        {item: "Fine Linen Shirt", stock: true, price: 500, category: "cloth", swag: +5, armor: +0, attack: +0},
        {item: "Yee Ole Valore Track Suit", stock: false, price: 200, category: "cloth", swag: +100, armor: -2, attack: +0},
        {item: "Leather Britches", stock: true, price: 700, category: "cloth", swag: +1, armor: +0.5, attack: +0},
        {item: "Wooden Clogs", stock: true, price: 100, category: "shoes", swag: +70, armor: +1, attack: +0},
        {item: "Jordan VII: Citrus", stock: true, price: 250, category: "shoes", swag: +23, armor: +0, attack: +0},
        {item: "Those kinda pointed iron knight-like shoes", stock: true, price: 800, category: "armor", swag: +100000, armor: +2, attack: +0},
        {item: "Helmet with pheasant feather", stock: true, price: 1200, category: "armor", swag: +928378346, armor: +5, attack: +0},
        {item: "Chest Plate", stock: true, price: 1000, category: "armor", swag: +5, armor: +20, attack: +0},
        {item: "Dagger", stock: false, price: 200, category: "weapon", swag: +5, armor: 0, attack: +10},
        {item: "Broad Sword", stock: true, price: 800, category: "weapon", swag: +10, armor: 0, attack: +20},
        {item: "Bow and Arrows", stock: true, price: 700, category: "weapon", swag: +5, armor: 0, attack: +15},
        {item: "Gun", stock: true, price: 1500, category: "weapon", swag: +100, armor: 0, attack: +100},
    ]
}

let enterStore = goRightButton.addEventListener('click', () => {
    bodyElement.removeChild(newGameElement)
    bodyElement.appendChild(storeElement)
})

const storePrompt = document.createElement('h1')
storePrompt.setAttribute('id', 'store-prompt')
storePrompt.innerHTML = "You have encountered a traveler with a big ole cart teamed by his faithful ass. Inquire! Maybe he will be of some use to you.."
storeElement.appendChild(storePrompt)






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

// if(logCount === 2) {
//     function logDeduction () {
//         const robbedLogs = (Math.floor(Math.random() * 3)) 
//         return robbedLogs
//     }  
// }
// console.log(robbedLogs)
// if (robbedLogs > 0) {
//     logCount = logCount - robbedLogs
//     logCountLog.textContent = `you have been robbed! you now have ${logCount} logs. keep chopping`
// }

// function logDeduction () {
//     return (Math.floor(Math.random() * 3))
// }

// let robbedLogs = logDeduction ()
// console.log(robbedLogs)


  // function evaluateLogs (swingCount) {
        //     if (swingCount % 5 === 0 && )
        // }


        // if log count is above 2 and robbed logs <0 show one message  
        // if logcount is less than 2 show one message
        // if lof count is 2 


                //     // if (robbedLogs > 0 && (swingCount % 5 === 0)){
        //     //     robbedLogCount = logCount - robbedLogs
        //     //     robbedLogCountLog.textContent = `You have collected ${robbedLogCount} log(s)`
        //     // }
        //     } 
               
            
            // console.log(logDeduction())