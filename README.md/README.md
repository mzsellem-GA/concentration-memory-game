CONCENTRATION MEMORY GAME   

☐ <Find The Flag>: This is a timed memory game. Select a tile and try to match the image with its exact copy in 1 minute or less! There are 8 flags to match. 

☐ Screenshot(s): Images of your actual game.

☐ Technologies Used: JavaScript, HTML, CSS, Figma

☐ Getting Started: In this section include the link to your deployed game and any instructions you deem important.

☐ Next Steps: An nice enhancement would be to vary HOW the tile flips over to reveal the flag image. Maybe something flourish-y.

- frequent commits (at least 1 everyday --starting monday 4/24)


            ~~~~~~      ~~~~~~      ~~~~~~      ~~~~~~

## Analze the app's functionality

USER STORY

As a player I want:
- The game to start when I click start so that the board is cleared for a brand new game and a minute timer begins
- To click on a box and have it display an image so that I can begin memorizing the images
- To click on another box (to match the first box clicked) and:
    - if the same image is displayed, keep the images displaying so that I stop looking for that image
    - if the images are different, display wrong click until next click so that I have more time to memorize its location
- To finish the game in 1 minute or less because it tests my short term memory skills
    - To see a message rendered above the board that says I have run out of time 
        - To not be able to continue playing if I did not complete the game in 1 minute or less, so I can focus on the game, not the time
    - A congratulatory message to be rendered above the board if I match all the flags in 1 minute or less because it's validating
        - If the congratulatory message is rendered, I want the timer to stop because the game is over


Game Specific MVPs
- To use flags of countries as theme for game (8 different images)
- Display wrong match until next click
- To finish the game in 1 minute or less (timer)

Project Specific-MVPs
- Render a game in the browser.

- Include win/loss logic and render win/loss messages in HTML. Popup alerts using the alert() method are okay during development, but not production.

- Include separate HTML, CSS & JavaScript files. [DONE]

- Use vanilla JavaScript, not jQuery.

- Have properly indented HTML, CSS & JavaScript. In addition, vertical whitespace needs to be consistent.

- No remaining unused and/or commented out code (code that will never be called) .

- Have functions and variables that are named sensibly. Remember, functions are typically named as verbs and variables (data) named as nouns.

- Be coded in a consistent manner. For example, choose between your preference for function declarations vs. function expressions.

- Be deployed online using GitHub Pages so that the rest of the world can play your game!


## Think about the overall design (look & feel) of the app

- Minimalistic wood table, comfy home-feel (so I can focus on code) --if I get enough time I can play around with design
- If time, create background audio when start is clicked
    - Audio will be of ambient noises you'd hear in the house to feel like you're playing this at home


## Wireframe the UI (no code)


- HTML, CSS, Javascript

## Pseudocode (example structure from connect four)
- Pseudocode outlines the app's logic using plain language. It provides a road map to writing the code itself.

I'll regularly be typing pseudocode as comments within the functions as I code.
1) Define required constants
2) Define required variables used to track the state of the game
3) Cache DOM elements
    - Message place
    - Play again button 
    - Game board
    - Column buttons = markers
    - above ticks are examples. make applicable to concentration game
4) Upon loading the app should:
    4.1) Initialize the state variables
    4.2) Render those values to the page
    4.3) Wait for the user to interact
    4.4) above ticks are examples. make applicable to concentration game
5) Handle a player clicking a column button
6) Handle a player clicking the replay button
7) Check for a winner


--------------------------------------------
*** when done, break down everything into categories (cached elements, event listeners, etc.)

- create a header with the name of the game
- create an h1 for (later) rendering of a "you ran out of time" or "congratulations, you won" message
- make the background a pine wood table using free art site
- create a 4x4 grid board with basic HTML & CSS
    - assign each box:  
        - a unique CLASS NAME 
        - an IMAGE
            - assign each image a unique CLASS NAME
    - make it default that each image is hidden until clicked (event listener)
        - when clicked, flip IMAGE over
- create a start button, a timer heading, and a timer under the heading named timer


- The game to start when I click start so that the board is cleared for a brand new game and a minute timer begins
- To click on a box and have it display an image so that I can begin memorizing the images
- To click on another box (to match the first box clicked) and:
    - if the same image is displayed, keep the images displaying so that I stop looking for that image
    - if the images are different, display wrong click until next click so that I have more time to memorize its location
- To finish the game in 1 minute or less because it tests my short term memory skills
    - To see a message rendered above the board that says I have run out of time 
        - To not be able to continue playing if I did not complete the game in 1 minute or less, so I can focus on the game, not the time
    - A congratulatory message to be rendered above the board if I match all the flags in 1 minute or less because it's validating
        - If the congratulatory message is rendered, I want the timer to stop because the game is over


        

## Identify the application's state (data)
- What information does the application need to "remember" throughout its execution?
    - Use the wireframe and pseudocode to help identify what state needs to be tracked.