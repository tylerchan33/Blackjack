window.onload = function (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    canvas.setAttribute("height", getComputedStyle(canvas)["height"])
    canvas.setAttribute("width", getComputedStyle(canvas)["width"])
    document.getElementById("hit").disabled = true
    document.getElementById("stay").disabled = true

    ctx.font = "50px Arial"
    ctx.fillText("Do you wanna play a game?", (canvas.width / 2) - 300, 200)
    ctx.fillText("Please hit the deal button to start.", (canvas.width / 2) - 350, 280)
    let jigsaw = document.querySelector("#jigsaw")
    ctx.drawImage(jigsaw, canvas.width / 2 - 70, 300, 200, 100)
    
}   

const cards = {
    aceOfClubs: {
        name: "aceOfClubs",
        src: "../media/ace_of_clubs.png",
        value: 11,
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
        value: 11,
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
        value: 11,
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
        value: 11,
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



let gameInProgress = false
let playerTurn = true
let gameOver = false
let dealerCards = []
let playerCards = []
const result = document.querySelector("#result")
let hitCounter = 0

// const gameStatus = document.getElementById("result")
   
function deck () {
    let allCards = []
    const cardNames = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]
    const cardSuits = ["Diamonds", "Clubs", "Hearts", "Spades"]
    let fullDeck = []
    for (let i = 0; i < cardNames.length; i++) {
        for (let j = 0; j < cardSuits.length; j++) {
            let card = `${cardNames[i]}Of${cardSuits[j]}`
            allCards.push(card)
            }
        
    }    
    return allCards   
}

let fullDeck = deck()
let deckTest = deck()[Math.floor(Math.random() * deck().length)]
console.log(deckTest)
const cardPics = deck().map((cards) => {
    return `${cards}.png`
})


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
    if (gameInProgress = true) {
        document.getElementById("deal").disabled = true
        document.getElementById("hit").disabled = false
        document.getElementById("stay").disabled = false
    }
  
    gameInProgress = true   
   
    let dealerCard1 = newDeck.shift()
    let dealerCard2 = newDeck.shift()
    let playerCard1 = newDeck.shift()
    let playerCard2 = newDeck.shift()

    dealerCards.push(dealerCard1)
    dealerCards.push(dealerCard2)
    playerCards.push(playerCard1)
    playerCards.push(playerCard2)

    newDeck.push(dealerCard1)
    newDeck.push(dealerCard2)
    newDeck.push(playerCard1)
    newDeck.push(playerCard2)
    // const playerCard3 = deck.shift([Math.floor(Math.random() * deck().length)])
   
    let img = document.getElementById(dealerCard1)
    let img2 = document.getElementById(dealerCard2)
    let img3 = document.getElementById(playerCard1)
    let img4 = document.getElementById(playerCard2)
    ctx.drawImage(img, (canvas.width / 2) - 100, 10, 100, 140)
    ctx.drawImage(img2, (canvas.width / 2) + 10, 10, 100, 140)
    ctx.drawImage(img3, (canvas.width / 2) -100, canvas.height - 160, 100, 140)
    ctx.drawImage(img4, (canvas.width / 2) + 10, canvas.height - 160, 100, 140)
    gameStatus()
}

const deal = document.querySelector("#deal")
deal.addEventListener("click", dealButton)

function playerTotal () {
    let playerTotals = 0
    let playerCardValues = []
    for (let i = 0; i < playerCards.length; i++) {
        playerCardValues[i] = cards[playerCards[i]].value
        playerTotals += playerCardValues[i]
    }
    return playerTotals 
}
playerTotal ()

function dealerTotal () {
    let dealerTotals = 0
    let dealerCardValues = []
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardValues[i] = cards[dealerCards[i]].value
        dealerTotals += dealerCardValues[i]
    }
    return dealerTotals
}
dealerTotal ()




function gameStatus () {
    let dealerScore = dealerTotal ()
    let playerScore = playerTotal ()
    if (playerTurn == false && dealerScore == playerScore) {
        gameOver = true
        document.getElementById("stay").disabled = true
        document.getElementById("hit").disabled = true
        result.innerText = "Push!"
    }
    else if (dealerScore == 21 && dealerCards.length == 2) {
        document.getElementById("stay").disabled = true
        result.innerText = "Dealer has blackjack!"
        document.getElementById("hit").disabled = true
        gameOver = true
        
    }
    else if (playerScore == 21 && (playerCards.length == 2)) {
        document.getElementById("stay").disabled = true
        result.innerText = "You have blackjack! You win!"
        document.getElementById("hit").disabled = true
        gameOver = true
    }
    else if (playerScore > 21) {
        gameOver = true
        document.getElementById("stay").disabled = true
        document.getElementById("hit").disabled = true
        result.innerText = "You busted! Dealer wins!"
    }
    else if (dealerScore > 21) {
        gameOver = true
        document.getElementById("stay").disabled = true
        document.getElementById("hit").disabled = true
        result.innerText = "Dealer busted! You win!"
    }
    else if (playerTurn == false && dealerScore > playerScore) {
        gameOver = true
        document.getElementById("stay").disabled = true
        document.getElementById("hit").disabled = true
        result.innerText = "Dealer wins!"
    }
    else if (playerTurn == false && dealerScore < playerScore) {
        gameOver = true
        document.getElementById("stay").disabled = true
        document.getElementById("hit").disabled = true
        result.innerText = "You win!"
    } 
    
    gameCheck()
}
gameStatus ()

function gameCheck () {
    if (gameOver === true) {
        deal.style.display = "block"
    }
}

function hitButton (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    let playerScore = playerTotal ()
    if (playerScore < 21 && hitCounter === 0) {
        let playerCard3 = newDeck.shift()
        playerCards.push(playerCard3)
        newDeck.push(playerCard3)
        let img5= document.getElementById(playerCard3)
        ctx.drawImage(img5, (canvas.width / 2) + 130, canvas.height - 160, 100, 140)
        let hit = document.querySelector("#hit")
        // hit.removeEventListener("click", hitButton)
        hit.onclick = secondHit    
        e.stopImmediatePropagation()
        gameStatus()
        hitCounter++
    }
    console.log("first hit")
}

function secondHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    let playerScore = playerTotal ()
    if (playerScore < 21 && hitCounter === 1) {
        let playerCard4 = newDeck.shift()
        playerCards.push(playerCard4)
        newDeck.push(playerCard4)
        let img6 = document.getElementById(playerCard4)
        ctx.drawImage(img6,(canvas.width / 2) + 150, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", secondHit)
        let hit = document.querySelector("#hit")
        hit.onclick = thirdHit    
        e.stopImmediatePropagation()
        gameStatus()
        hitCounter++
    }console.log("2nd hit")
}

function thirdHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    let playerScore = playerTotal ()
    if (playerScore < 21 && hitCounter === 2) {
        let playerCard5 = newDeck.shift()
        playerCards.push(playerCard5)
        newDeck.push(playerCard5)
        let img7 = document.getElementById(playerCard5)
        ctx.drawImage(img7,(canvas.width / 2) + 170, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", thirdHit)
        let hit = document.querySelector("#hit")
        hit.onclick = fourthHit 
        e.stopImmediatePropagation()
        gameStatus()
        hitCounter++
    }
    console.log("third hit")
}

function fourthHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    let playerScore = playerTotal ()
    if (playerScore < 21 && hitCounter === 3) {
        let playerCard6 = newDeck.shift()
        playerCards.push(playerCard6)
        newDeck.push(playerCard6)
        let img8 = document.getElementById(playerCard6)
        ctx.drawImage(img8,(canvas.width / 2) + 190, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", fourthHit)
        let hit = document.querySelector("#hit")
        hit.onclick = fifthHit  
        e.stopImmediatePropagation()
        gameStatus()
        hitCounter++
    } 
    console.log("fourth hit")
}
function fifthHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    let playerScore = playerTotal ()
    if (playerScore < 21 && hitCounter === 4) {
        let playerCard7 = newDeck.shift()
        playerCards.push(playerCard7)
        newDeck.push(playerCard7)
        let img9 = document.getElementById(playerCard7)
        ctx.drawImage(img9,(canvas.width / 2) + 210, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", fifthHit)
        let hit = document.querySelector("#hit")
        hit.onclick = sixthHit    
        e.stopImmediatePropagation()
        gameStatus()
        hitCounter++
    }
    console.log("fifthit")
}
function sixthHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    let playerScore = playerTotal ()
    if (playerScore < 21 && hitCounter === 5) {
        let playerCard8 = newDeck.shift()
        playerCards.push(playerCard8)
        newDeck.push(playerCard8)
        let img10 = document.getElementById(playerCard8)
        ctx.drawImage(img10,(canvas.width / 2) + 230, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", sixthHit)
        let hit = document.querySelector("#hit")
        hit.onclick = seventhHit   
        e.stopImmediatePropagation()
        gameStatus()
        hitCounter++
    } 
    console.log("sixth hit")
}
function seventhHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    let playerScore = playerTotal ()
    if (playerScore < 21 && hitCounter === 6) {
        let playerCard9 = newDeck.shift()
        playerCards.push(playerCard9)
        newDeck.push(playerCard9)
        let img11 = document.getElementById(playerCard9)
        ctx.drawImage(img11,(canvas.width / 2) + 250, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", seventhHit)
        let hit = document.querySelector("#hit")
        hit.onclick = eighthHit    
        e.stopImmediatePropagation()
        gameStatus()
        hitCounter++
    }
    console.log("seventh hit")
}
function eighthHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    let playerScore = playerTotal ()
    if (playerScore < 21 && hitCounter === 7) {
        let playerCard10 = newDeck.shift()
        playerCards.push(playerCard10)
        newDeck.push(playerCard10)
        let img12 = document.getElementById(playerCard10)
        ctx.drawImage(img12,(canvas.width / 2) + 270, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", eighthHit)
        let hit = document.querySelector("#hit")
        hit.onclick = ninthHit   
        e.stopImmediatePropagation()
        gameStatus()
        hitCounter++
    } 
    console.log("eighth hit")
}
function ninthHit (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    let playerScore = playerTotal ()
    if (playerScore < 21 && hitCounter === 8) {
        let playerCard11 = newDeck.shift()
        playerCards.push(playerCard11)
        newDeck.push(playerCard11)
        let img13 = document.getElementById(playerCard11)
        ctx.drawImage(img13,(canvas.width / 2) + 290, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", ninthHit)
        document.getElementById("hit").disabled = true
        e.stopImmediatePropagation()
        gameStatus()
        hitCounter++
    }
    console.log("nintht hit")
}
    
    
   



const hit = document.querySelector("#hit")
hit.onclick = hitButton
// hit.addEventListener("click", hitButton)

function stayButton () { 
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    gameInProgress = true
    playerTurn = false
    document.getElementById("hit").disabled = true
    dealerTurn1 ()
    gameStatus ()
    
}
const stay = document.querySelector("#stay")
stay.addEventListener("click", stayButton)

function dealerTurn1 () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    gameInProgress = true
    let dealerScore = dealerTotal ()
    if (playerTurn == false && dealerScore < 17) {
            let dealerCard3 = newDeck.shift()
            dealerCards.push(dealerCard3)
            newDeck.push(dealerCard3)
            let img20= document.getElementById(dealerCard3)
            ctx.drawImage(img20, (canvas.width / 2) + 130, 10, 100, 140)
            
    }
    dealerTurn2()
}



function dealerTurn2 () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    gameInProgress = true
    let dealerScore = dealerTotal ()
    if (playerTurn == false && dealerScore < 17) {
            let dealerCard4 = newDeck.shift()
            dealerCards.push(dealerCard4)
            newDeck.push(dealerCard4)
            let img21= document.getElementById(dealerCard4)
            ctx.drawImage(img21, (canvas.width / 2) + 150, 10, 100, 140)
    }
    dealerTurn3 ()
}

function dealerTurn3 () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    gameInProgress = true
    let dealerScore = dealerTotal ()
    if (playerTurn == false && dealerScore < 17) {
            let dealerCard5 = newDeck.shift()
            dealerCards.push(dealerCard5)
            newDeck.push(dealerCard5)
            let img22= document.getElementById(dealerCard5)
            ctx.drawImage(img22, (canvas.width / 2) + 150, 10, 100, 140)
    }
    dealerTurn4 ()
}

function dealerTurn4 () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    gameInProgress = true
    let dealerScore = dealerTotal ()
    if (playerTurn == false && dealerScore < 17) {
            let dealerCard6 = newDeck.shift()
            dealerCards.push(dealerCard6)
            newDeck.push(dealerCard6)
            let img23= document.getElementById(dealerCard6)
            ctx.drawImage(img23, (canvas.width / 2) + 150, 10, 100, 140)
    }
    dealerTurn5 ()    
}

function dealerTurn5 () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    gameInProgress = true
    let dealerScore = dealerTotal ()
    if (playerTurn == false && dealerScore < 17) {
            let dealerCard7 = newDeck.shift()
            dealerCards.push(dealerCard7)
            newDeck.push(dealerCard7)
            let img23= document.getElementById(dealerCard6)
            ctx.drawImage(img23, (canvas.width / 2) + 150, 10, 100, 140)
    }
    dealerTurn6 ()    
}

function dealerTurn6 () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    gameInProgress = true
    let dealerScore = dealerTotal ()
    if (playerTurn == false && dealerScore < 17) {
            let dealerCard8 = newDeck.shift()
            dealerCards.push(dealerCard8)
            newDeck.push(dealerCard8)
            let img24= document.getElementById(dealerCard8)
            ctx.drawImage(img24, (canvas.width / 2) + 150, 10, 100, 140)
    }
    dealerTurn7 ()    
}

function dealerTurn7 () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    gameInProgress = true
    let dealerScore = dealerTotal ()
    if (playerTurn == false && dealerScore < 17) {
            let dealerCard9 = newDeck.shift()
            dealerCards.push(dealerCard9)
            newDeck.push(dealerCard9)
            let img25= document.getElementById(dealerCard9)
            ctx.drawImage(img25, (canvas.width / 2) + 150, 10, 100, 140)
    }
    dealerTurn8 ()    
}

function dealerTurn8 () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    gameInProgress = true
    let dealerScore = dealerTotal ()
    if (playerTurn == false && dealerScore < 17) {
            let dealerCard10 = newDeck.shift()
            dealerCards.push(dealerCard10)
            newDeck.push(dealerCard10)
            let img26= document.getElementById(dealerCard10)
            ctx.drawImage(img26, (canvas.width / 2) + 150, 10, 100, 140)
    }
}

const newGameBtn = document.querySelector("#newGame")
newGameBtn.addEventListener("click", function newGame () {
    // let rebornDeck = newDeck.concat(playerCards, dealerCards)
    if (gameOver == true) {
        playerTurn = true
        hitCounter = 0
        const hit = document.querySelector("#hit")
        hit.onclick = hitButton
        // hit.addEventListener("click", hitButton)
        // deck()
        // let rebornDeck = deck()
        shuffleDeck(newDeck)
        let playerScore = playerTotal()
        playerScore = 0
        let dealerScore = dealerTotal()
        dealerScore = 0
        playerCards = []
        dealerCards = []
        result.innerText = " "
        dealButton()
        }
})
















     
   
    
    



    
 

// gameStatus ()
// console.log(dealerTotal)
//  function gameLoop () {

//  }



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
   


// winCondition()

  
    




