window.onload = function (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    canvas.setAttribute("height", getComputedStyle(canvas)["height"])
    canvas.setAttribute("width", getComputedStyle(canvas)["width"])

 

   
    ctx.font = "50px Arial";
    ctx.fillText("Do you wanna play a game?", 150, 200)
    ctx.fillText("Please hit the deal button to start.", 110, 280)
    let jigsaw = document.querySelector("#jigsaw")
    ctx.drawImage(jigsaw, canvas.width / 2 - 60, 300, 100, 100)
}   

// const cards = {
//     twoOfClubs: {
//         name: "2OfClubs",
//         src: "../media/2_of_clubs.png",
//         value: 2,
//         // console.log(cards["twoOfClubs"]["src"])
//     }
//     threeOfClubs: {
//         name: "2OfClubs"
//     }

// }
let test2 = document.querySelector("#twoOfClubs").value
let gameInProgress = false
let gameOver = false
let dealerCards = []
let playerCards = []
let dealerTotal = 0
let playerTotal = 0
const gameStatus = document.getElementById("result")
   
function deck () {
    let allCards = []
    let cardNames = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
    let cardSuits = ["Diamonds", "Clubs", "Hearts", "Spades"]
    let fullDeck = []
    for (let i = 0; i < cardNames.length; i++) {
        for (let j = 0; j < cardSuits.length; j++) {
            let card = `${cardNames[i]}Of${cardSuits[j]}`
            allCards.push(card)
            
        }

        
    }   
    // for (let k = 0; k < 52; k++){
    //     fullDeck.push(allCards[k])
    // }
    // console.log(fullDeck)
    // console.log(typeof fullDeck)
    
    return allCards
    
    
}

deck()
console.log(deck())

function setValues () {
    let cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

}

let fullDeck = deck()


let deckTest = deck()[Math.floor(Math.random() * deck().length)]
console.log(deckTest)


const cardPics = deck().map((cards) => {
    return `${cards}.png`
})

console.log(cardPics)

// found the fisher-yates shuffle online

function shuffleDeck(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array

    
}

shuffleDeck(fullDeck)
let newDeck = shuffleDeck(fullDeck)
console.log(newDeck)



function dealButton () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    canvas.setAttribute("height", getComputedStyle(canvas)["height"])
    canvas.setAttribute("width", getComputedStyle(canvas)["width"])
    let gameInProgress = true
   
    let dealerCard1 = newDeck.shift()
    let dealerCard2 = newDeck.shift()
    let playerCard1 = newDeck.shift()
    let playerCard2 = newDeck.shift()

    console.log(dealerCard1)
    // const playerCard3 = deck.shift([Math.floor(Math.random() * deck().length)])
    if (gameInProgress = true) {
        document.getElementById("deal").disabled = "true"
    }
    let img = document.getElementById(dealerCard1)
    let img2 = document.getElementById(dealerCard2)
    let img3 = document.getElementById(playerCard1)
    let img4 = document.getElementById(playerCard2)
    ctx.drawImage(img, (canvas.width / 2) - 100, 10, 100, 140)
    ctx.drawImage(img2, (canvas.width / 2) + 10, 10, 100, 140)
    ctx.drawImage(img3, (canvas.width / 2) -100, canvas.height - 160, 100, 140)
    ctx.drawImage(img4, (canvas.width / 2) + 10, canvas.height - 160, 100, 140)
   
    
}

const deal = document.querySelector("#deal")
deal.addEventListener("click", dealButton)

function hitButton (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
        let playerCard3 = newDeck.shift()
        let img5= document.getElementById(playerCard3)
        ctx.drawImage(img5, (canvas.width / 2) + 130, canvas.height - 160, 100, 140)

        e.stopImmediatePropagation()
        this.removeEventListener("click", hitButton)
        document.onclick = secondHit    
}

function secondHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
        let playerCard4 = newDeck.shift()
        let img6 = document.getElementById(playerCard4)
        ctx.drawImage(img6,(canvas.width / 2) + 150, canvas.height - 160, 100, 140)
        e.stopImmediatePropagation()
        this.removeEventListener("click", hitButton)
        document.onclick = thirdHit    
}

function thirdHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
        let playerCard5 = newDeck.shift()
        let img7 = document.getElementById(playerCard5)
        ctx.drawImage(img7,(canvas.width / 2) + 170, canvas.height - 160, 100, 140)
        e.stopImmediatePropagation()
        this.removeEventListener("click", hitButton)
        document.onclick = fourthHit 
}

function fourthHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
        let playerCard6 = newDeck.shift()
        let img8 = document.getElementById(playerCard6)
        ctx.drawImage(img8,(canvas.width / 2) + 190, canvas.height - 160, 100, 140)
        e.stopImmediatePropagation()
        this.removeEventListener("click", hitButton)
        document.onclick = fifthHit   
}
function fifthHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
        let playerCard7 = newDeck.shift()
        let img9 = document.getElementById(playerCard7)
        ctx.drawImage(img9,(canvas.width / 2) + 210, canvas.height - 160, 100, 140)
        e.stopImmediatePropagation()
        this.removeEventListener("click", hitButton)
        document.onclick = sixthHit    
}
function sixthHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
        let playerCard8 = newDeck.shift()
        let img10 = document.getElementById(playerCard8)
        ctx.drawImage(img10,(canvas.width / 2) + 230, canvas.height - 160, 100, 140)
        e.stopImmediatePropagation()
        this.removeEventListener("click", hitButton)
        document.onclick = seventhHit    
}
function seventhHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
        let playerCard9 = newDeck.shift()
        let img11 = document.getElementById(playerCard9)
        ctx.drawImage(img11,(canvas.width / 2) + 250, canvas.height - 160, 100, 140)
        e.stopImmediatePropagation()
        this.removeEventListener("click", hitButton)
        document.onclick = eighthHit    
}
function eighthHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
        let playerCard10 = newDeck.shift()
        let img12 = document.getElementById(playerCard10)
        ctx.drawImage(img12,(canvas.width / 2) + 270, canvas.height - 160, 100, 140)
        e.stopImmediatePropagation()
        this.removeEventListener("click", hitButton)
        document.onclick = ninthHit    
}
function ninthHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
        let playerCard11 = newDeck.shift()
        let img13 = document.getElementById(playerCard11)
        ctx.drawImage(img13,(canvas.width / 2) + 290, canvas.height - 160, 100, 140)
        e.stopImmediatePropagation()
        document.getElementById("hit").disabled = "true"
        
}
    
    
   



const hit = document.querySelector("#hit")
hit.addEventListener("click", hitButton)




// function drawBox(x, y, width, height, color) {
//     let img = new Image()
//     img.onload = drawBox
//     img.src= "./media/10_of_clubs.png"
//     ctx.strokeStyle = color
//     ctx.strokeRect(x, y, width, height)
//     let pattern = ctx.createPattern(img, "repeat")
//     ctx.fillStyle = pattern
// }


// drawBox((canvas.width / 2) - 100, 10 , 100, 150, "red")
// drawBox((canvas.width / 2) + 10, 10 , 100, 150, "red")
// drawBox((canvas.width / 2) + 10, canvas.height - 160 , 100, 150, "red")


    
   


    // // canvas.addEventListener('click', button(e) {
    // //     console.log(e.offsetX, e.offsetY)
       
    // // })
    // code for button on canvas 
    // ctx.beginPath();
    // ctx.rect(canvas.width - 200, canvas.height - 180, 80, 80);
    // ctx.fillStyle = "red"
    // ctx.fill();   
    // ctx.font = "bold 25px Arial"
    // ctx.fillStyle = "black"
    // ctx.fillText("DEAL", canvas.width - 192, canvas.height - 130)
    // canvas.addEventListener("click", function buttonDetection(e) {
    //     console.log(e.offsetX, e.offsetY)
    //     const left = e.offsetX >= canvas.width -  200 
    //     const right = e.offsetX <= canvas.width - 120   
    //     const top = e.offsetY >= canvas.height - 180
    //     const bottom = e.offsetY <= canvas.height - 100
    //     if (left && right && top && bottom) {
    //     console.log("hi")
    //     } else {
    //         console.log("no")
    //     }
    // })
   
function winCondition () {
   let ace = 11
    console.log(ace)
    let playerTotal = 21
    playerCards = [11, 10]
    let dealerTotal = 0
    if (dealerTotal === 21) {
        gameStatus.innerText = "Dealer has blackjack!"
        gameOver = true
    }
    if (playerTotal > 21 && playerCards.includes("ace")){
        let ace = 1
        console.log(ace)
    }
    if (playerTotal = 21 && (playerCards.length = 2)) {
        console.log("Player has blackjack!")
        gameOver = true
    }
    
}

winCondition()

  
    




