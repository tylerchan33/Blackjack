window.onload = function (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    canvas.setAttribute("height", getComputedStyle(canvas)["height"])
    canvas.setAttribute("width", getComputedStyle(canvas)["width"])

   
    ctx.font = "50px Arial";
    ctx.fillText("Do you wanna play a game?", 150, 200)
    ctx.fillText("Please hit the deal button to start.", 110, 280)
    
  

   
}   

let gameInProgress = false
let gameOver = false
let dealerCards = []
let playerCards = []
let dealerTotal = 0
let playerTotal = 0
const gameStatus = document.getElementById("result")
   
    function deck () {
    let allCards = []
    let cardValues = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
    let cardSuits = ["Diamonds", "Clubs", "Hearts", "Spades"]
    for (let i = 0; i < cardValues.length; i++) {
        for (let j = 0; j < cardSuits.length; j++) {
            let card = [`${cardValues[i]}Of${cardSuits[j]}`]
            allCards.push(card)
        }
    }   
    return allCards
}

deck()
console.log(deck())
const cardPics = deck().map((cards) => {
    return `${cards}.png`
})
const dealerCard1 = deck()[Math.floor(Math.random() * deck().length)]
const dealerCard2 = deck()[Math.floor(Math.random() * deck().length)]
const playerCard1= deck()[Math.floor(Math.random() * deck().length)]
const playerCard2= deck()[Math.floor(Math.random() * deck().length)]



function dealButton () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    canvas.setAttribute("height", getComputedStyle(canvas)["height"])
    canvas.setAttribute("width", getComputedStyle(canvas)["width"])

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
   
    let dealerTotal = 21
    if (dealerTotal = 21) {
        gameStatus.innerText = "Dealer has blackjack!"
    }
    
}

winCondition()

  
    




