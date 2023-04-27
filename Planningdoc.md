# Match the Flag

This is a game of concentration. Can you correctly match pairs of flags with a guess restriction? Let's find out!

☐ Screenshot(s): Images of your actual game.

☐ Technologies Used: List of the technologies used, e.g., JavaScript, HTML, CSS...

☐ Getting Started: In this section include the link to your deployed game and any instructions you deem important.

☐ Next Steps: music on start, shuffle feature

USER STORY

As a player I want:
- The directions to be visible upon navigating to the page so I know what to do
- To click on a card and have it display a flag so that I can begin memorizing them
- To click on another card (to match the first card clicked) and:
    - if the same flag is displayed, keep the images displaying so that I stop looking for that flag
    - if the flags are different, display wrong click until next click so that I have more time to memorize its location
- To finish the game after a set amount of wrong guesses and:
    - To see a message rendered above the board that says "Sorry! That's too many guesses!"
        - To not be able to continue playing if I did not complete the game in a certain number of guesses, because the game is over
    - A congratulatory message to be rendered above the board if I match all the flags under the amount of wrong guesses because it's validating
        - If the congratulatory message is rendered, I want the directions to the game to disappear

Game Specific MVPs
- To use flags of countries as theme for game 
- Display wrong match for some predetermined amount of time
- To finish the game after a certain number of wrong guesses

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

- Minimalistic wood table, comfy, home-feel

## Wireframe the UI (no code)

![figma representation](Concentration-Memory-Game-Wireframe.png)


## Pseudocode (example structure from connect four)
1. Define required constants
    - two arrays:
        - flagArray1 with the following property:
            - front (key) and image of the flag (value)
            - back (key) another image (value --which will be the same for every card)
        - flagArray2 as a copy of flagArray1 to match against
            - with only front, back, and isMatch properties
2. Define required variables used to track the state of the game
    - let timer
    - let isSolved
    - the following properties on BOTH arrays:
        - flag key
    - the following properties on flagArray1:
        - isMatch
        - isVisible
3. Cache DOM elements (store a representation of the view, seen by the player, so these elements can be updated/manipulated)
    - store the 9 elements that represent the flags on the page
        - child divs with 2 class names (cell and name of flag)
    - renderMessage()
        - for the "you win" or "you ran out of time" message
    - start button
        - resets timer
        - resets flags to inital state (hidden)
        - reset messages to initial state (empty string)
4. Upon loading the app should:
    4.1 Initialize the state variables
        - properties of flagArray1:
            - isVisible: false
            - isMatch: false
        - let timer begin at 00:00
        - let isSolved = false
        - let renderMessage = " ";
    4.2 Render those values to the page
    4.3 Wait for the user to interact
5. Handle a player beginning a game
    5.1 player clicks start button
        - timer starts 
        - all states are initialized
6. Handle a player clicking a box
    - player clicks a box --> reveals image of flag (do this through nesting an image tag in the child div --parent is linked to its children)
        - create a function (numFlagsVisible) such that only two cards can be compared at a time
        - if the second click reveals a matching flag:
            - flag remains visible for the remainder of the game
                - make sure to remove click-ability if isSolve = true (first thing in event listener)
        - if the second click reveals a non-matching flag:
            - after 2 seconds, hide the flag
                - update isVisible = false
        - for flagArray1, if all objects have the following values: isVisible = true and isMatch = true, AND the timer is under 1 minute, isSolved = true
        - else, isSolved = false
7. Render message based on isSolved values:
    - true: (use DOM to) display "Congratulations, you won!"
    - false: (use DOM to) display "Sorry! You ran out of time!"

## Identify the application's state (data)
- isMatch: are two flags matched or not
- isVisible: is the flag visible or not
- timer: tracks time throughout the game (used in logic to determine win/loss)
- isSolved: determines the outcome of the game