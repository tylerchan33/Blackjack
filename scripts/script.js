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

const cards = {
    aceOfClubs: {
        name: "aceOfClubs",
        src: "../media/ace_of_clubs.png",
        value: 1,
    },
    twoOfClubs: {
        name: "2OfClubs",
        src: "../media/2_of_clubs.png",
        value: 2,
        // console.log(cards["twoOfClubs"]["src"])
    },
    threeOfClubs: {
        name: "3OfClubs",
        src: "../media/3_of_clubs.png",
        value: 3,
    },
    fourOfClubs: {
        name: "4OfClubs",
        src: "../media/4_of_clubs.png",
        value: 4,
    },
    fiveOfClubs: {
        name: "5OfClubs",
        src: "../media/5_of_clubs.png",
        value: 5,
    },
    sixOfClubs: {
        name: "6OfClubs",
        src: "../media/6_of_clubs.png",
        value: 6,
    },
    sevenOfClubs: {
        name: "7OfClubs",
        src: "../media/7_of_clubs.png",
        value: 7,
    },
    eightOfClubs: {
        name: "8OfClubs",
        src: "../media/8_of_clubs.png",
        value: 8,
    },
    nineOfClubs: {
        name: "9OfClubs",
        src: "../media/9_of_clubs.png",
        value: 9,
    },
    tenOfClubs: {
        name: "10OfClubs",
        src: "../media/9_of_clubs.png",
        value: 10,
    },
    jackOfClubs: {
        name: "jackOfClubs",
        src: "../media/jack_of_clubs.png",
        value: 10,
    },
    queenOfClubs: {
        name: "queenOfClubs",
        src: "../media/queen_of_clubs.png",
        value: 10,
    },
    kingOfClubs: {
        name: "kingOfClubs",
        src: "../media/king_of_clubs.png",
        value: 10,
    },
    aceOfDiamonds: {
        name: "aceOfDiamonds",
        src: "../media/ace_of_diamonds.png",
        value: 1,
    },
    twoOfDiamonds: {
        name: "2OfDiamonds",
        src: "../media/2_of_diamonds.png",
        value: 2,
        
    },
    threeOfDiamonds: {
        name: "3OfDiamonds",
        src: "../media/3_of_diamonds.png",
        value: 3,
    },
    fourOfDiamonds: {
        name: "4OfDiamonds",
        src: "../media/4_of_diamonds.png",
        value: 4,
    },
    fiveOfDiamonds: {
        name: "5OfDiamonds",
        src: "../media/5_of_diamonds.png",
        value: 5,
    },
    sixOfDiamonds: {
        name: "6OfDiamonds",
        src: "../media/6_of_diamonds.png",
        value: 6,
    },
    sevenOfDiamonds: {
        name: "7OfDiamonds",
        src: "../media/7_of_diamonds.png",
        value: 7,
    },
    eightOfDiamonds: {
        name: "8OfDiamonds",
        src: "../media/8_of_diamonds.png",
        value: 8,
    },
    nineOfDiamonds: {
        name: "9OfDiamonds",
        src: "../media/9_of_diamonds.png",
        value: 9,
    },
    tenOfDiamonds: {
        name: "10OfDiamonds",
        src: "../media/9_of_diamonds.png",
        value: 10,
    },
    jackOfDiamonds: {
        name: "jackOfDiamonds",
        src: "../media/jack_of_diamonds.png",
        value: 10,
    },
    queenOfDiamonds: {
        name: "queenOfDiamonds",
        src: "../media/queen_of_diamonds.png",
        value: 10,
    },
    kingOfDiamonds: {
        name: "kingOfDiamonds",
        src: "../media/king_of_diamonds.png",
        value: 10,
    }, 
    aceOfHearts: {
        name: "aceOfHearts",
        src: "../media/ace_of_hearts.png",
        value: 1,
    },
    twoOfHearts: {
        name: "2OfHearts",
        src: "../media/2_of_hearts.png",
        value: 2,
        
    },
    threeOfHearts: {
        name: "3OfHearts",
        src: "../media/3_of_hearts.png",
        value: 3,
    },
    fourOfHearts: {
        name: "4OfHearts",
        src: "../media/4_of_hearts.png",
        value: 4,
    },
    fiveOfHearts: {
        name: "5OfHearts",
        src: "../media/5_of_hearts.png",
        value: 5,
    },
    sixOfHearts: {
        name: "6OfHearts",
        src: "../media/6_of_hearts.png",
        value: 6,
    },
    sevenOfHearts: {
        name: "7OfHearts",
        src: "../media/7_of_hearts.png",
        value: 7,
    },
    eightOfHearts: {
        name: "8OfHearts",
        src: "../media/8_of_hearts.png",
        value: 8,
    },
    nineOfHearts: {
        name: "9OfHearts",
        src: "../media/9_of_hearts.png",
        value: 9,
    },
    tenOfHearts: {
        name: "10OfHearts",
        src: "../media/9_of_hearts.png",
        value: 10,
    },
    jackOfHearts: {
        name: "jackOfHearts",
        src: "../media/jack_of_hearts.png",
        value: 10,
    },
    queenOfHearts: {
        name: "queenOfHearts",
        src: "../media/queen_of_hearts.png",
        value: 10,
    },
    kingOfHearts: {
        name: "kingOfHearts",
        src: "../media/king_of_hearts.png",
        value: 10,
    }, 
    aceOfSpades: {
        name: "aceOfSpades",
        src: "../media/ace_of_spades.png",
        value: 1,
    },
    twoOfSpades: {
        name: "2OfSpades",
        src: "../media/2_of_spades.png",
        value: 2,
        
    },
    threeOfSpades: {
        name: "3OfSpades",
        src: "../media/3_of_spades.png",
        value: 3,
    },
    fourOfSpades: {
        name: "4OfSpades",
        src: "../media/4_of_spades.png",
        value: 4,
    },
    fiveOfSpades: {
        name: "5OfSpades",
        src: "../media/5_of_spades.png",
        value: 5,
    },
    sixOfSpades: {
        name: "6OfSpades",
        src: "../media/6_of_spades.png",
        value: 6,
    },
    sevenOfSpades: {
        name: "7OfSpades",
        src: "../media/7_of_spades.png",
        value: 7,
    },
    eightOfSpades: {
        name: "8OfSpades",
        src: "../media/8_of_spades.png",
        value: 8,
    },
    nineOfSpades: {
        name: "9OfSpades",
        src: "../media/9_of_spades.png",
        value: 9,
    },
    tenOfSpades: {
        name: "10OfSpades",
        src: "../media/9_of_spades.png",
        value: 10,
    },
    jackOfSpades: {
        name: "jackOfSpades",
        src: "../media/jack_of_spades.png",
        value: 10,
    },
    queenOfSpades: {
        name: "queenOfSpades",
        src: "../media/queen_of_spades.png",
        value: 10,
    },
    kingOfSpades: {
        name: "kingOfSpades",
        src: "../media/king_of_spades.png",
        value: 10,
    }, 
}
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

  
    




