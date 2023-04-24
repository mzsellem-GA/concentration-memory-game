CONCENTRATION MEMORY GAME   

☐ <Find The Flag>: This is a timed memory game. Select a tile and try to match the image with its exact copy in 1 minute or less! There are 8 flags to match. 

☐ Screenshot(s): Images of your actual game.

☐ Technologies Used: JavaScript, HTML, CSS, Figma

☐ Getting Started: In this section include the link to your deployed game and any instructions you deem important.

☐ Next Steps: music on start, flag randomizer feature.

- frequent commits (at least 1 everyday --starting monday 4/24)

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
        - To not be able to continue playing if I did not complete the game in 1 minute or less, because the game is over
    - A congratulatory message to be rendered above the board if I match all the flags in 1 minute or less because it's validating
        - If the congratulatory message is rendered, I want the timer to stop because the game is over


Game Specific MVPs
- To use flags of countries as theme for game (8 different images)
- Display wrong match for some predetermined amount of time
- To finish the game in 1 minute or less (timer)

Project Specific-MVPs
- Render a game in the browser.

- Include win/loss logic and render win/loss messages in HTML. Popup alerts using the alert() method are okay during development, but not production.

- Include separate HTML, CSS & JavaScript files.

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

![figma representation](Concentration-Memory-Game-Wireframe.png)


## Pseudocode (example structure from connect four)
- Pseudocode outlines the app's logic using plain language. It provides a road map to writing the code itself.


- create a header with the name of the game
- create an h2 for (later) rendering of a "Sorry! You ran out of time!" or "Congratulations, you won!" message
- make the background a pine wood table 
- create a 4x4 grid board with each box having an outline (illusion of square "slot")
    - assign each box:  
        - two class names: "cell" and whatever "flag name" is going there (ie. French)
- create a start button, a timer (for 1 minute) and a title for the timer (visually above it)
    - start button refreshes game 
    - timer resets with start button click 
- make it default that each flag is hidden until clicked 
- when a box is clicked, make the flag visible 
- when a consecutive box is clicked, ensure that only two flags will be compared at a single time
    - compare the two flags:
        - if match, keep BOTH cards visible
        - if no match, hide BOTH cards after a 2 second timer delay
- if all flags are matched, all flags are visible, AND the timer is under 1 minute, display: "Congratulations, you won!"
    - else, display: "Sorry! You ran out of time!


1 Define required constants
    - two arrays:
        - flagArray1 with the following property:
            - flag (key) and image of the flag (value)
        - flagArray2 as a copy of flagArray1 to match against

2 Define required variables used to track the state of the game
    - use a board to represent the boxes to choose from 
    - let timer
    - let isSolved
    - the following properties on BOTH arrays:
        - flag key
    - the following properties on flagArray1:
        - isMatch
        - isVisible
3 Cache DOM elements (store a representation of the view, seen by the player, so these elements can be updated/manipulated)
    - store the 18 elements that represent the flags on the page
        - child divs with 2 class names (cell and name of flag)
    - renderMessage()
        - for the "you win" or "you ran out of time" message
    - play again button = start button = initialization ????
        - resets timer
        - resets flags to inital state (hidden)
        - reset messages to initial state (empty string)
4 Upon loading the app should:
    4.1 Initialize the state variables
        - properties of flagArray1:
            - isVisible: false
            - isMatch: false
        - let timer begin at 00:00
        - let isSolved = false
        - let renderMessage = " ";
    4.2 Render those values to the page
    4.3 Wait for the user to interact
5 Handle a player beginning a game
    5.1 player clicks start button
        - timer starts 
        - all states are initialized
6 Handle a player clicking a box
    - player clicks a box --> reveals image of flag (do this through nesting an image tag in the child div --parent is linked to its children)
        - create a function such that only two cards can be compared at a time
        - if the second click reveals a matching flag:
            - flag remains visible for the remainder of the game
                - make sure to remove click-ability if isSolve = true (first thing in event listener)
        - if the second click reveals a non-matching flag:
            - after 2 seconds, hide the flag
                - update isVisible = false
        - for flagArray1, if all objects have the following values: isVisible = true and isMatch = true, AND the timer is under 1 minute, isSolved = true
        - else, isSolved = false
7 Render message based on isSolved values:
    - true: (use DOM to) display "Congratulations, you won!"
    - false: (use DOM to) display "Sorry! You ran out of time!"

## Identify the application's state (data)
- isMatch
- isVisible
- checkIsSolved
- isSolved
- numFlagsVisible