//Test Code

//Deal Button
// Deal button returns two cards for the player and two for the dealer
//deck.shift()

function dealCards() {
    gameInProgress = true
    gameOver = false

    
}

// let betInput = document.getElementById("amount")
// let bet = document.getElementById("bet")
// function betButton () {
//     let betInput = document.getElementById("amount")
//     if (betInput.value >= moneyTracker || betInput.value < 1) {
//         let playerScore = document.getElementById("playerTotal")
//             playerScore.innerText = `You have $${moneyTracker}. Please place a bet between $1 and $${moneyTracker}`
            
//             return
//     }
//     else {
//             deal.addEventListener("click", e => {
//             betAmount = betInput.value
//             console.log("bet clicked")
       
//         })
//     }
// }
    

// betButton ()













     
   
    
    



    
 

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

  
    
function hitButton (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    let playerScore = playerTotal ()
    if (playerScore <= 21 && hitCounter === 0) {
        let playerCard3 = newDeck.shift()
        playerCards.push(playerCard3)
        newDeck.push(playerCard3)
        let img5= document.getElementById(playerCard3)
        ctx.drawImage(img5, (canvas.width / 2) + 130, canvas.height - 160, 100, 140)
        // // let hit = document.querySelector("#hit")
        // document.getElementById("doubleDown").disabled = true
        // hit.removeEventListener("click", hitButton)
        // hit.onclick = secondHit    
        // e.stopImmediatePropagation()
        hitCounter++
        gameStatus()
    }
    else if (playerScore <= 21 && hitCounter === 1) {
        let playerCard4 = newDeck.shift()
        playerCards.push(playerCard4)
        newDeck.push(playerCard4)
        let img6 = document.getElementById(playerCard4)
        ctx.drawImage(img6,(canvas.width / 2) + 150, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", secondHit)
        // let hit = document.querySelector("#hit")
        // document.getElementById("doubleDown").disabled = true
        // hit.onclick = thirdHit    
        // e.stopImmediatePropagation()
        hitCounter++
        gameStatus()
    }
    else if (playerScore <= 21 && hitCounter === 2) {
        let playerCard5 = newDeck.shift()
        playerCards.push(playerCard5)
        newDeck.push(playerCard5)
        let img7 = document.getElementById(playerCard5)
        ctx.drawImage(img7,(canvas.width / 2) + 170, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", thirdHit)
        // let hit = document.querySelector("#hit")
        // document.getElementById("doubleDown").disabled = true
        // hit.onclick = fourthHit 
        // e.stopImmediatePropagation()
        hitCounter++
        gameStatus()
    }
    else if (playerScore <= 21 && hitCounter === 3) {
        let playerCard6 = newDeck.shift()
        playerCards.push(playerCard6)
        newDeck.push(playerCard6)
        let img8 = document.getElementById(playerCard6)
        ctx.drawImage(img8,(canvas.width / 2) + 190, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", fourthHit)
        // let hit = document.querySelector("#hit")
        // document.getElementById("doubleDown").disabled = true
        // hit.onclick = fifthHit  
        // e.stopImmediatePropagation()
        hitCounter++
        gameStatus()
    } 
    else if (playerScore <= 21 && hitCounter === 4) {
        let playerCard7 = newDeck.shift()
        playerCards.push(playerCard7)
        newDeck.push(playerCard7)
        let img9 = document.getElementById(playerCard7)
        ctx.drawImage(img9,(canvas.width / 2) + 210, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", fifthHit)
        // let hit = document.querySelector("#hit")
        // document.getElementById("doubleDown").disabled = true
        // hit.onclick = sixthHit    
        // e.stopImmediatePropagation()
        hitCounter++
        gameStatus()
    }
    else if (playerScore <= 21 && hitCounter === 5) {
        let playerCard8 = newDeck.shift()
        playerCards.push(playerCard8)
        newDeck.push(playerCard8)
        let img10 = document.getElementById(playerCard8)
        ctx.drawImage(img10,(canvas.width / 2) + 230, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", sixthHit)
        // let hit = document.querySelector("#hit")
        // document.getElementById("doubleDown").disabled = true
        // hit.onclick = seventhHit   
        // e.stopImmediatePropagation()
        hitCounter++
        gameStatus()
    }
    else if (playerScore <= 21 && hitCounter === 6) {
        let playerCard9 = newDeck.shift()
        playerCards.push(playerCard9)
        newDeck.push(playerCard9)
        let img11 = document.getElementById(playerCard9)
        ctx.drawImage(img11,(canvas.width / 2) + 250, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", seventhHit)
        // let hit = document.querySelector("#hit")
        // document.getElementById("doubleDown").disabled = true
        // hit.onclick = eighthHit    
        // e.stopImmediatePropagation()
        hitCounter++
        gameStatus()
    }
    else if (playerScore <= 21 && hitCounter === 7) {
        let playerCard10 = newDeck.shift()
        playerCards.push(playerCard10)
        newDeck.push(playerCard10)
        let img12 = document.getElementById(playerCard10)
        ctx.drawImage(img12,(canvas.width / 2) + 270, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", eighthHit)
        // let hit = document.querySelector("#hit")
        // document.getElementById("doubleDown").disabled = true
        // hit.onclick = ninthHit   
        // e.stopImmediatePropagation()
        hitCounter++
        gameStatus()
    } 
    else if (playerScore <= 21 && hitCounter === 8) {
        let playerCard11 = newDeck.shift()
        playerCards.push(playerCard11)
        newDeck.push(playerCard11)
        let img13 = document.getElementById(playerCard11)
        ctx.drawImage(img13,(canvas.width / 2) + 290, canvas.height - 160, 100, 140)
        // this.removeEventListener("click", ninthHit)
        document.getElementById("hit").disabled = true
        document.getElementById("doubleDown").disabled = true
        // e.stopImmediatePropagation()
        hitCounter++
        gameStatus()
    }
    console.log("nintht hit")
}

const hit = document.querySelector("#hit")
hit.onclick = hitButton
