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
    allCards.forEach
    return allCards
}

deck()
console.log(deck())
const cardPics = deck().map((cards) => {
    return `${cards}.png`
    
})
console.log(cardPics) 



const randomCard = deck()[Math.floor(Math.random() * deck().length)]

console.log(randomCard)

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")




canvas.setAttribute("height", getComputedStyle(canvas)["height"])
canvas.setAttribute("width", getComputedStyle(canvas)["width"])

function drawBox(x, y, width, height, color) {
    let img = new Image()
    img.onload = drawBox
    img.src= "./media/10_of_clubs.png"
    ctx.strokeStyle = color
    ctx.strokeRect(x, y, width, height)
    let pattern = ctx.createPattern(img, "repeat")
    ctx.fillStyle = pattern
}


// drawBox((canvas.width / 2) - 100, 10 , 100, 150, "red")
// drawBox((canvas.width / 2) + 10, 10 , 100, 150, "red")
// drawBox((canvas.width / 2) + 10, canvas.height - 160 , 100, 150, "red")

window.onload = function () {
    let img = document.getElementById(randomCard)
    let img2 = document.getElementById(randomCard)
    let img3 = document.getElementById(randomCard)
    let img4 = document.getElementById(randomCard)
    ctx.drawImage(img, (canvas.width / 2) - 100, 10, 100, 140)
    ctx.drawImage(img2, (canvas.width / 2) + 10, 10, 100, 140)
    ctx.drawImage(img3, (canvas.width / 2) -100, canvas.height - 160, 100, 140)
    ctx.drawImage(img4, (canvas.width / 2) + 10, canvas.height - 160, 100, 140)
    
    imgButton.addEventListener("click", function () {
        console.log("hello")
    })

}

