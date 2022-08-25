window.onload = function (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    canvas.setAttribute("height", getComputedStyle(canvas)["height"])
    canvas.setAttribute("width", getComputedStyle(canvas)["width"])
    document.getElementById("hit").disabled = true
    document.getElementById("stay").disabled = true

    ctx.font = "50px Creepster"
    ctx.fillStyle = "rgb(156, 22, 22)"
    ctx.fillText("Do you wanna play a game?", (canvas.width / 2) - 250, canvas.height / 2 - 100)
    ctx.fillText("Please hit the deal button to start.", (canvas.width / 2) - 350, canvas.height / 2 - 50)
    
    let jigsaw = document.querySelector("#jigsaw")
    ctx.drawImage(jigsaw, canvas.width / 2 - 100, canvas.height / 2 , 200, 150)
    
   
    document.getElementById("doubleDown").disabled = true
    
    let playerScore = document.getElementById("playerTotal")
    playerScore.innerText = `Good luck! You start with $1000!`
    let dealerScore = document.getElementById("result")
    dealerScore.innerText = " "

    
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
let dealerWins = 0
let playerWins = 0
let pushCount = 0
let moneyTracker = 1000
let betAmount = 0

   
function deck () {
    let allCards = []
    const cardNames = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]
    const cardSuits = ["Diamonds", "Clubs", "Hearts", "Spades"]

    for (let i = 0; i < cardNames.length; i++) {
        for (let j = 0; j < cardSuits.length; j++) {
            let card = `${cardNames[i]}Of${cardSuits[j]}`
            allCards.push(card)
            }
        
    }    
    return allCards   
}

let fullDeck = deck()
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

function dealButton () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    canvas.setAttribute("height", getComputedStyle(canvas)["height"])
    canvas.setAttribute("width", getComputedStyle(canvas)["width"])
    let betInput = document.getElementById("amount")
    let playerScore = document.getElementById("playerTotal")
    cards.aceOfClubs.value = 11
    cards.aceOfDiamonds.value = 11
    cards.aceOfHearts.value = 11
    cards.aceOfSpades.value = 11
    betAmount = betInput.value
    aceCount = 0
    if (moneyTracker === 0) {
        playerScore.innerText = `You're broke!  Get out of here!!!`
        canvas.style.backgroundImage = "url('https://media2.giphy.com/media/yIxNOXEMpqkqA/giphy.gif?cid=ecf05e47rttrc7tz092a1uu9flirbo63yu26punjhco0qi82&rid=giphy.gif&ct=g')"
        return
    }
    else if (betAmount > moneyTracker || betAmount < 1) {
        
        playerScore.innerText = `You have $${moneyTracker}. Please place a bet between $1 and $${moneyTracker}`
        canvas.style.backgroundImage = "url('https://c.tenor.com/FF9eF7bkSc4AAAAC/im-here-jigsaw.gif')"
        canvas.style.backgroundPosition = "0% 0%"
        
    }
    else if (gameOver == false) {
        if ((betAmount * 2) > moneyTracker) {
            document.getElementById("doubleDown").disabled = true
        }
        else {
            document.getElementById("doubleDown").disabled = false
        }
        betAmount = betInput.value
        document.getElementById("deal").disabled = true
        document.getElementById("hit").disabled = false
        document.getElementById("stay").disabled = false

        canvas.style.backgroundImage = "url('https://media.istockphoto.com/photos/poker-table-picture-id1046326882?k=20&m=1046326882&s=612x612&w=0&h=G7D7aw9iB8p1A9LH26O9e6p8Pt5p82B44MbWPrIZmRo=')"
        
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
    
        let img = document.getElementById(dealerCard1)
        let hiddenDealer = document.getElementById("dealerHidden")
        let img3 = document.getElementById(playerCard1)
        let img4 = document.getElementById(playerCard2)
        ctx.drawImage(img, (canvas.width / 2) - 100, 10, 100, 140)
        ctx.drawImage(hiddenDealer, (canvas.width / 2) + 10, 10, 100, 140)
        ctx.drawImage(img3, (canvas.width / 2) -100, canvas.height - 160, 100, 140)
        ctx.drawImage(img4, (canvas.width / 2) + 10, canvas.height - 160, 100, 140)
        gameStatus()
    }
    else if (gameOver == true) {
        let wins = document.getElementById("score")
        wins.innerText = `Player wins: ${playerWins}\u00A0\u00A0\u00A0\u00A0Jigsaw wins: ${dealerWins}\u00A0\u00A0\u00A0\u00A0 Pushes: ${pushCount}`
        playerTurn = true
        hitCounter = 0
        gameOver = false
        const hit = document.querySelector("#hit")
        hit.onclick = hitButton
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
    
}

const deal = document.querySelector("#deal")
deal.addEventListener("click", dealButton)

function playerTotal () {
    let playerTotals = 0
    let playerCardValues = []
    let aceCount = 0
    for (let i = 0; i < playerCards.length; i++) {
        playerCardValues[i] = cards[playerCards[i]].value
        playerTotals += playerCardValues[i]

        if (playerCardValues[i] === 11) {
            aceCount++
        } 
        if (aceCount > 0 && playerTotals > 21) {
            playerTotals = playerTotals - 10
            aceCount--
        }  
    }
    let playerScore = document.getElementById("playerTotal")
    playerScore.innerText = `You have: ${playerTotals}.
     Bank: $${moneyTracker}`
    return playerTotals 
}
playerTotal ()


function dealerTotal () {
    let dealerTotals = 0
    let dealerCardValues = []
    let aceCount = 0
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardValues[i] = cards[dealerCards[i]].value
        dealerTotals += dealerCardValues[i]
        if (dealerCardValues[i] === 11) {
            aceCount++
        }
        if (aceCount > 0 && dealerTotals > 21) {
            cards.aceOfClubs.value = 1
            cards.aceOfDiamonds.value = 1
            cards.aceOfHearts.value = 1
            cards.aceOfSpades.value = 1 
            dealerTotals += dealerCardValues[i]
            aceCount--
        }
       
    }
    return dealerTotals
}
dealerTotal ()

function gameStatus () {
    let dealerScore = dealerTotal ()
    let playerScore = playerTotal ()
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    if (playerTurn == false && dealerScore === playerScore) {
        gameOver = true
        let dealerCard2 = dealerCards[1]
        let img2 = document.getElementById(dealerCard2)
        ctx.drawImage(img2, (canvas.width / 2) + 10, 10, 100, 140)
        document.getElementById("stay").disabled = true
        document.getElementById("hit").disabled = true
        document.getElementById("doubleDown").disabled = true
        document.getElementById("deal").disabled = false
        result.innerText = `Both of you have ${playerScore}!  Push!`
        pushCount++
        return

    }
    else if (dealerScore == 21 && dealerCards.length == 2) {
        gameOver = true
        document.getElementById("stay").disabled = true
        let dealerCard2 = dealerCards[1]
        let img2 = document.getElementById(dealerCard2)
        ctx.drawImage(img2, (canvas.width / 2) + 10, 10, 100, 140)
        document.getElementById("hit").disabled = true
        document.getElementById("doubleDown").disabled = true
        document.getElementById("deal").disabled = false
        result.innerText = "Jigsaw has blackjack! You lose!"
        moneyTracker = moneyTracker - betAmount
        dealerWins++
        return
    }
    else if (playerScore == 21 && (playerCards.length == 2)) {
        document.getElementById("stay").disabled = true
        document.getElementById("doubleDown").disabled = true
        let dealerCard2 = dealerCards[1]
        let img2 = document.getElementById(dealerCard2)
        ctx.drawImage(img2, (canvas.width / 2) + 10, 10, 100, 140)
        result.innerText = "You have blackjack! You win!"
        document.getElementById("hit").disabled = true
        document.getElementById("deal").disabled = false
        gameOver = true
        moneyTracker = parseInt(moneyTracker) + parseInt((betAmount * (3 / 2))) 
        playerWins++
        return
    }
    else if (playerScore > 21) {
        gameOver = true
        document.getElementById("stay").disabled = true
        document.getElementById("hit").disabled = true
        document.getElementById("doubleDown").disabled = true
        let dealerCard2 = dealerCards[1]
        let img2 = document.getElementById(dealerCard2)
        ctx.drawImage(img2, (canvas.width / 2) + 10, 10, 100, 140)
        result.innerText = "You bust! Jigsaw wins!"
        document.getElementById("deal").disabled = false
        moneyTracker = moneyTracker - betAmount
        dealerWins++
        return
    }
    else if (dealerScore > 21) {
        gameOver = true
        document.getElementById("stay").disabled = true
        document.getElementById("hit").disabled = true
        document.getElementById("doubleDown").disabled = true
        document.getElementById("deal").disabled = false
        result.innerText = `Jigsaw has ${dealerScore}!  Jigsaw busts! You win!`
        moneyTracker = parseInt(moneyTracker) + parseInt(betAmount)
        playerWins++
        return
    }
    else if (playerTurn == false && dealerScore > playerScore) {
        gameOver = true
        document.getElementById("stay").disabled = true
        document.getElementById("hit").disabled = true
        document.getElementById("doubleDown").disabled = true
        document.getElementById("deal").disabled = false
        result.innerText = `Jigsaw has ${dealerScore}! Jigsaw wins!`
        moneyTracker = moneyTracker - betAmount
        dealerWins++
        return
    }
    else if (playerTurn == false && dealerScore < playerScore) {
        gameOver = true
        document.getElementById("stay").disabled = true
        document.getElementById("hit").disabled = true
        document.getElementById("doubleDown").disabled = true
        document.getElementById("deal").disabled = false
        result.innerText = `Jigsaw has ${dealerScore}!  You win!`
        moneyTracker = parseInt(moneyTracker) + parseInt(betAmount)
        playerWins++
        return
    } 
}

function stayButton () { 
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    gameInProgress = true
    playerTurn = false
    document.getElementById("hit").disabled = true
    let dealerCard2 = dealerCards[1]
    let img2 = document.getElementById(dealerCard2)
    ctx.drawImage(img2, (canvas.width / 2) + 10, 10, 100, 140)
    dealerTurn1()
    gameStatus ()
    
}
const stay = document.querySelector("#stay")
stay.addEventListener("click", stayButton)


const doubleDown = document.getElementById("doubleDown")
doubleDown.addEventListener("click", function doubleDown () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    let playerScore = playerTotal ()
    if (playerScore <= 21 && hitCounter === 0 && gameOver == false && moneyTracker > (betAmount * 2)) {
        betAmount = betAmount * 2
        let playerCard3 = newDeck.shift()
        playerCards.push(playerCard3)
        newDeck.push(playerCard3)
        let img5= document.getElementById(playerCard3)
        ctx.drawImage(img5, (canvas.width / 2) + 130, canvas.height - 160, 100, 140)
        playerTurn = false
        let dealerCard2 = dealerCards[1]
        let img2 = document.getElementById(dealerCard2)
        ctx.drawImage(img2, (canvas.width / 2) + 10, 10, 100, 140)
        document.getElementById("hit").disabled = true
        document.getElementById("stay").disabled = true
        document.getElementById("doubleDown").disabled = true
        gameStatus()
        dealerTurn1() 
    }
})






