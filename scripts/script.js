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
console.log(cardPics) 



const randomCard = deck()[Math.floor(Math.random() * deck().length)]

console.log(randomCard)

const canvas = document.getElementById("canvas")






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

window.onload = function (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    canvas.setAttribute("height", getComputedStyle(canvas)["height"])
    canvas.setAttribute("width", getComputedStyle(canvas)["width"])

    let img = document.getElementById(randomCard)
    let img2 = document.getElementById(randomCard)
    let img3 = document.getElementById(randomCard)
    let img4 = document.getElementById(randomCard)
    ctx.drawImage(img, (canvas.width / 2) - 100, 10, 100, 140)
    ctx.drawImage(img2, (canvas.width / 2) + 10, 10, 100, 140)
    ctx.drawImage(img3, (canvas.width / 2) -100, canvas.height - 160, 100, 140)
    ctx.drawImage(img4, (canvas.width / 2) + 10, canvas.height - 160, 100, 140)
    
   
    ctx.beginPath()
    ctx.arc(canvas.width - 100, canvas.height -90, 50, 0, 6.28)
    ctx.fillStyle = "green"
    ctx.fill() 
    ctx.lineWidth = 1
    ctx.strokeStyle = "black"
    ctx.stroke()
    ctx.font = "bold 35px Arial"
    ctx.fillStyle = "black"
    ctx.fillText("HIT", canvas.width - 125, canvas.height -80)

    // canvas.addEventListener('click', button(e) {
    //     console.log(e.offsetX, e.offsetY)
       
    // })

   

    canvas.addEventListener("click", function buttonDetection(e) {
        console.log(e.offsetX, e.offsetY)
        const left = e.offsetX >= canvas.width -  100 
        if (left) {
        console.log("hi")
        } else {
            console.log("no")
        }
    })
  
    
}



