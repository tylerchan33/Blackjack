# Blackjack

### Rules:

https://tylerchan33.github.io/Blackjack/

Just a simple game of blackjack against Jigsaw.

You start with $1000.  Play against Jigsaw as you try to become rich.  

Rules: 
   The rules are like a normal game of Blackjack, except Jigsaw doesn't believe in insurance or splitting pairs. The goal of Jigsaw Blackjack is to for your hand value be worth more than Jigsaw's without going over 21.
    The numerical cards are worth the number on their card.  Face cards are worth 10 and Aces are worth 1 or 11.
    Place your bet then you and Jigsaw are dealt two cards, where one of Jigsaw's cards is facedown.  After your hand is dealt, you have the option to hit, stay, or double down (see more information below).  After finishing your actions, it is Jigsaw's turn.  Jigsaw must continue drawing cards until his hand value is 17 or more, unless he has a soft 17.  A soft 17 is when Jigsaw's hand value is 17, Jigsaw has an ace in his hand, and is able to hit without going over 21.  If both your hand and Jigsaw's hand values are 21 or less, then whoever has the higher hand value wins.  Beware: If your hand value exceeds 21, you lose.  If Jigsaw's hand exceeds 21, then you win.  Blackjack is when a player has an Ace and a face card in their first two dealt cards.  If you have blackjack, then you win automatically.  If Jigsaw has blackjack, then you lose automatically.  If you and Jigsaw both have blackjack, then you push.  Blackjack pays 3:2.

    Buttons:

    New Game: Starts new session from scratch.

    Deal: Press this button to start a new hand.

    Hit: You will receive another card and as long as your hand value is 21 or less, you may continue to hit

    Stay: You are content with your hand and would like to turn it over to Jigsaw.

    Double Down: You place a bet equal to the amount of your original bet and receive only one card.  It is then
    Jigsaw's turn.  If you win, you win both your original and double down bet.  If you lose, you lose both bets.


In case you need more clarification, please see below:

https://bicyclecards.com/how-to-play/blackjack/

---

## Approach Taken
I started off by setting up the framework of my game and setting up the board and initial buttons.  After that, I tried to think about the logic of how I'd want the game to run, but it was kind of difficult for me to envision.  I then thought about how I wanted to create my deck and how I would shuffle said deck.  After that, I thought about how to display my cards.  Canvas was pretty rough so it took me a while to figure out how to do it.  Once I figured that out, I got my deal, hit, and stay buttons to work.  Once I had those down, I began to write out the logic for the game itself.  The logic was a bit tough because there are quite a few edge cases (that I later had to debug).  The toughest one setting values for an ace under certain conditions.  Once I figured all of that out, I moved on to setting up my scoreboard, money tracker, and bet and double down buttons.  After that, I pretty much had a fully functional game but there was some code that I wasn't happy about so I fixed it.  I moved on to styling to make my game look better.  

---
## Tech Stack

- Canvas:
    I used canvas for my game board and to display hands.  It wasn't ideal, but I also used it for my how to play instructions.  There were also some nice gifs I included in my canvas background.  
- DOM:
    I used DOM manipulation for editing my scoreboard and overhead text.  I also used it to retreive the values of the bets.
- CSS
    I used it for styling my buttons, canvas, text, card background image, etc.
- Javascript
    I mainly used it for my game logic, DOM, event listeners  and canvas.  
- HTML
    I used it for my basic framework of my game.  



---

## MVP Goals

Be able to play a hand against the dealer

Bet button and Double Down button

Random cards




---
## Stretch Goals

Split pairs

Win-Loss Record

Have a money tracker 

Multiple Decks


---
## Potential Roadblocks


Thinking about how to set Ace as a variable that can have multiple values

Setting up all of the logic 

## Post-Project Reflection

As a whole, I think this project was pretty fun.  I definitely learned a lot through the whole process of this project.  As annoying as having bugs is, I think it really helps me understand how the code runs and why things happen the way they do.  Looking back, I would definitely not have used canvas to make my game because it was incredibly frustrating to use.  My code can be very disorganized and I think in future projects I will definitely try to keep it more tidy.  Similarly, there are a lot of repetitive things in my code.  I managed to condense some of it, but I didn't want to touch some other parts that might break.  I don't think there are many unsolved problems for my game itself, but there were some items that I could have reached, like implementing split pairs or a better how to play guide.  

## Sources 

Playing Card Pics: https://code.google.com/archive/p/vector-playing-cards/downloads
Poker Chips: https://www.deluxe.com/products/promotional/clay-poker-chip-suited-style/1441/
Money gif: https://giphy.com/gifs/swag-money-publicdomaindiva-12Eo7WogCAoj84
Card Background Gif: https://giphy.com/gifs/player-poker-bet-3ov9jUCYetT3GVwcy4?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=
Table Photo: https://media.istockphoto.com/photos/poker-table-picture-id1046326882?k=20&m=1046326882&s=612x612&w=0&h=G7D7aw9iB8p1A9LH26O9e6p8Pt5p82B44MbWPrIZmRo=
Table Border Photo: https://img.freepik.com/free-photo/wooden-textured-background_53876-14865.jpg?t=st=1661384010~exp=1661384610~hmac=11f53a30d9c86b7e2e06b230413bf4fa72b4f3460f4f82b33757e37e9de089b5
Top Display Gif: https://giphy.com/gifs/xcopy-jQS9YkJXofyeI?utm_source=media-link&utm_medium=landing&utm_campaign=Media%20Links&utm_term=
Jigsaw Pic: https://www.pngitem.com/middle/iJhiwJ_film-horror-jigsaw-movie-saw-png-image-jigsaw/
Broke Gif: https://c.tenor.com/hZsQ7CUYakAAAAAC/saw22-saw.gif
Wrong Bet Gif: https://c.tenor.com/FF9eF7bkSc4AAAAC/im-here-jigsaw.gif
Jigsaw Facedown Card: https://www.pinterest.com/pin/661607001484847535/





## Wireframe
![wireframe](/media/wireframe.png)

