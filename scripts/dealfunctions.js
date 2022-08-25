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
}

const hit = document.querySelector("#hit")
hit.onclick = hitButton

    
function dealerTurn1 () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    let dealerScore = dealerTotal ()
    let aceCount = 0
    for (let i = 0; i < dealerCards.length; i++) {
        if (cards[dealerCards[i]].value === 11) {
            aceCount++
        }
    }
    if (gameOver === false && playerTurn === false && aceCount > 0 && dealerScore === 17) {
        let dealerCard3 = newDeck.shift()
        dealerCards.push(dealerCard3)
        newDeck.push(dealerCard3)
        let img20= document.getElementById(dealerCard3)
        ctx.drawImage(img20, (canvas.width / 2) + 130, 10, 100, 140)
        aceCount--
    }
    else if (gameOver === false && playerTurn == false && dealerScore < 17) {
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
    let aceCount = 0
    for (let i = 0; i < dealerCards.length; i++) {
        if (cards[dealerCards[i]].value === 11) {
            aceCount++
        }
    }
    if (playerTurn == false && aceCount > 0 && dealerScore === 17) {
        let dealerCard4 = newDeck.shift()
        dealerCards.push(dealerCard4)
        newDeck.push(dealerCard4)
        let img21= document.getElementById(dealerCard4)
        ctx.drawImage(img21, (canvas.width / 2) + 150, 10, 100, 140)
        aceCount--
    }
    else if (playerTurn == false && dealerScore < 17) {
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
    let aceCount = 0
    for (let i = 0; i < dealerCards.length; i++) {
        if (cards[dealerCards[i]].value === 11) {
            aceCount++
        }
    }
    if (playerTurn == false && aceCount > 0 && dealerScore === 17 && cards[dealerCards[i]].value === 11) {
        let dealerCard5 = newDeck.shift()
        dealerCards.push(dealerCard5)
        newDeck.push(dealerCard5)
        let img22= document.getElementById(dealerCard5)
        ctx.drawImage(img22, (canvas.width / 2) + 170, 10, 100, 140)
        aceCount--
    }
    else if (playerTurn == false && dealerScore < 17) {
            let dealerCard5 = newDeck.shift()
            dealerCards.push(dealerCard5)
            newDeck.push(dealerCard5)
            let img22= document.getElementById(dealerCard5)
            ctx.drawImage(img22, (canvas.width / 2) + 170, 10, 100, 140)
    }
    dealerTurn4 ()
}

function dealerTurn4 () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    gameInProgress = true
    let dealerScore = dealerTotal ()
    let aceCount = 0
    for (let i = 0; i < dealerCards.length; i++) {
        if (cards[dealerCards[i]].value === 11) {
            aceCount++
        }
    }
    if (playerTurn == false && aceCount > 0 && dealerScore === 17) {
        let dealerCard6 = newDeck.shift()
        dealerCards.push(dealerCard6)
        newDeck.push(dealerCard6)
        let img23= document.getElementById(dealerCard6)
        ctx.drawImage(img23, (canvas.width / 2) + 190, 10, 100, 140)
        aceCount--
    }
    else if (playerTurn == false && dealerScore < 17) {
            let dealerCard6 = newDeck.shift()
            dealerCards.push(dealerCard6)
            newDeck.push(dealerCard6)
            let img23= document.getElementById(dealerCard6)
            ctx.drawImage(img23, (canvas.width / 2) + 190, 10, 100, 140)
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
            let img23= document.getElementById(dealerCard7)
            ctx.drawImage(img23, (canvas.width / 2) + 210, 10, 100, 140)
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
            ctx.drawImage(img24, (canvas.width / 2) + 230, 10, 100, 140)
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
            ctx.drawImage(img25, (canvas.width / 2) + 250, 10, 100, 140)
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
            ctx.drawImage(img26, (canvas.width / 2) + 270, 10, 100, 140)
    }
}

