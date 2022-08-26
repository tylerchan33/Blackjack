function hitButton (e) {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    let playerScore = playerTotal ()
    let playerCard = newDeck.shift()
    playerCards.push(playerCard)
    newDeck.push(playerCard)
    let img= document.getElementById(playerCard)
    if (playerScore <= 21 && hitCounter === 0) {
        ctx.drawImage(img, (canvas.width / 2) + 130, canvas.height - 160, 100, 140)
        document.getElementById("doubleDown").disabled = true
    }
    else if (playerScore <= 21 && hitCounter === 1) {
        ctx.drawImage(img,(canvas.width / 2) + 150, canvas.height - 160, 100, 140)
    }
    else if (playerScore <= 21 && hitCounter === 2) {
        ctx.drawImage(img,(canvas.width / 2) + 170, canvas.height - 160, 100, 140)
    }
    else if (playerScore <= 21 && hitCounter === 3) {
        ctx.drawImage(img,(canvas.width / 2) + 190, canvas.height - 160, 100, 140)
    } 
    else if (playerScore <= 21 && hitCounter === 4) {
        ctx.drawImage(img,(canvas.width / 2) + 210, canvas.height - 160, 100, 140)
    }
    else if (playerScore <= 21 && hitCounter === 5) {
        ctx.drawImage(img,(canvas.width / 2) + 230, canvas.height - 160, 100, 140)
    }
    else if (playerScore <= 21 && hitCounter === 6) {
        ctx.drawImage(img,(canvas.width / 2) + 250, canvas.height - 160, 100, 140)
    }
    else if (playerScore <= 21 && hitCounter === 7) {
        ctx.drawImage(img,(canvas.width / 2) + 270, canvas.height - 160, 100, 140)
    } 
    else if (playerScore <= 21 && hitCounter === 8) {
        ctx.drawImage(img,(canvas.width / 2) + 290, canvas.height - 160, 100, 140)
        document.getElementById("hit").disabled = true
        document.getElementById("doubleDown").disabled = true 
    }
        hitCounter++
        gameStatus()
}

const hit = document.querySelector("#hit")
hit.onclick = hitButton

    
function dealerTurn1 () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    let dealerScore = dealerTotal ()
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
    if (gameOver === false && playerTurn == false && dealerAces === 1 && dealerScore === 17) {
        let dealerCard4 = newDeck.shift()
        dealerCards.push(dealerCard4)
        newDeck.push(dealerCard4)
        let img21= document.getElementById(dealerCard4)
        ctx.drawImage(img21, (canvas.width / 2) + 150, 10, 100, 140)
        aceCount--
    }
    else if (gameOver === false && playerTurn == false && dealerScore < 17) {
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
    if (gameOver === false && playerTurn == false &&  dealerAces === 1 && dealerScore === 17 && cards[dealerCards[i]].value === 11) {
        let dealerCard5 = newDeck.shift()
        dealerCards.push(dealerCard5)
        newDeck.push(dealerCard5)
        let img22= document.getElementById(dealerCard5)
        ctx.drawImage(img22, (canvas.width / 2) + 170, 10, 100, 140)
        aceCount--
        console.log("hitTurn3")
    }
    else if (gameOver === false && playerTurn == false && dealerScore < 17) {
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
    if (gameOver === false && playerTurn == false &&  dealerAces === 1  && dealerScore === 17) {
        let dealerCard6 = newDeck.shift()
        dealerCards.push(dealerCard6)
        newDeck.push(dealerCard6)
        let img23= document.getElementById(dealerCard6)
        ctx.drawImage(img23, (canvas.width / 2) + 190, 10, 100, 140)
        aceCount--
    }
    else if (gameOver === false && playerTurn == false && dealerScore < 17) {
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
    if (gameOver === false && playerTurn == false &&  dealerAces === 1  && dealerScore === 17) {
        let dealerCard7 = newDeck.shift()
        dealerCards.push(dealerCard7)
        newDeck.push(dealerCard7)
        let img24= document.getElementById(dealerCard7)
        ctx.drawImage(img24, (canvas.width / 2) + 190, 10, 100, 140)
        aceCount--
    }
    else if (gameOver === false && playerTurn == false && dealerScore < 17) {
            let dealerCard7 = newDeck.shift()
            dealerCards.push(dealerCard7)
            newDeck.push(dealerCard7)
            let img24= document.getElementById(dealerCard7)
            ctx.drawImage(img24, (canvas.width / 2) + 210, 10, 100, 140)
            console.log("hitTurn5")
    }
    dealerTurn6 ()    
}

function dealerTurn6 () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    gameInProgress = true
    let dealerScore = dealerTotal ()
    if (gameOver === false && playerTurn == false &&  dealerAces === 1  && dealerScore === 17) {
        let dealerCard8 = newDeck.shift()
        dealerCards.push(dealerCard8)
        newDeck.push(dealerCard8)
        let img25= document.getElementById(dealerCard8)
        ctx.drawImage(img25, (canvas.width / 2) + 190, 10, 100, 140)
        aceCount--
    }
    else if (gameOver === false && playerTurn == false && dealerScore < 17) {
            let dealerCard8 = newDeck.shift()
            dealerCards.push(dealerCard8)
            newDeck.push(dealerCard8)
            let img25= document.getElementById(dealerCard8)
            ctx.drawImage(img25, (canvas.width / 2) + 230, 10, 100, 140)
    }
    dealerTurn7 ()    
}

function dealerTurn7 () {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    gameInProgress = true
    let dealerScore = dealerTotal ()
    if (gameOver === false && playerTurn == false &&  dealerAces === 1  && dealerScore === 17) {
        let dealerCard9 = newDeck.shift()
        dealerCards.push(dealerCard9)
        newDeck.push(dealerCard9)
        let img25= document.getElementById(dealerCard7)
        ctx.drawImage(img25, (canvas.width / 2) + 190, 10, 100, 140)
        aceCount--
    }
    else if (gameOver === false && playerTurn == false && dealerScore < 17) {
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
    if (gameOver === false && playerTurn == false &&  dealerAces === 1  && dealerScore === 17) {
        let dealerCard10 = newDeck.shift()
        dealerCards.push(dealerCard10)
        newDeck.push(dealerCard10)
        let img26= document.getElementById(dealerCard10)
        ctx.drawImage(img26, (canvas.width / 2) + 190, 10, 100, 140)
        aceCount--
    }
    else if (gameOver === false && playerTurn == false && dealerScore < 17) {
            let dealerCard10 = newDeck.shift()
            dealerCards.push(dealerCard10)
            newDeck.push(dealerCard10)
            let img26= document.getElementById(dealerCard10)
            ctx.drawImage(img26, (canvas.width / 2) + 270, 10, 100, 140)
    }
}

