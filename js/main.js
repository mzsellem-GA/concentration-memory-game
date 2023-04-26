 /*----- constants -----*/
flagsArray = [
    {name: "australian", front: 'australian-flag.png', back: 'fields-back-of-card.png'},
    {name: "brazilian", front: 'brazilian-flag.png', back: 'fields-back-of-card.png'},
    {name: "canadian", front: 'canadian-flag.png', back: 'fields-back-of-card.png'},
    {name: "french", front: 'french-flag.png', back: 'fields-back-of-card.png'},
    {name: "indian", front: 'indian-flag.png', back: 'fields-back-of-card.png'},
    {name: "romanian", front: 'romanian-flag.png', back: 'fields-back-of-card.png'},
    {name: "usa", front: 'usa-flag.png', back: 'fields-back-of-card.png'},
    {name: "japanese", front: 'japanese-flag.png', back: 'fields-back-of-card.png'},
    {name: "australian-2", front: 'australian-flag.png', back: 'fields-back-of-card.png'},
    {name: "brazilian-2", front: 'brazilian-flag.png', back: 'fields-back-of-card.png'},
    {name: "canadian-2", front: 'canadian-flag.png', back: 'fields-back-of-card.png'},
    {name: "french-2", front: 'french-flag.png', back: 'fields-back-of-card.png'},
    {name: "indian-2", front: 'indian-flag.png', back: 'fields-back-of-card.png'},
    {name: "romanian-2", front: 'romanian-flag.png', back: 'fields-back-of-card.png'},
    {name: "usa-2", front: 'usa-flag.png', back: 'fields-back-of-card.png'},
    {name: "japanese-2", front: 'japanese-flag.png', back: 'fields-back-of-card.png'},
]

  /*----- state variables -----*/
// let timer;
// let isSolved;

  /*----- cached elements  -----*/
const parentDiv = document.querySelector(".parent-div");

function makeChildDivAndImageTags (arr) {
    for(let i=0; i < arr.length; i++){
        let childDiv = document.createElement("div");
        childDiv.classList.add("child-div");
        childDiv.style.height = "150px";
        childDiv.style.width = "200px";
        childDiv.style.display = "flex";
        parentDiv.append(childDiv);

        const flagTag = document.createElement("img");
        flagTag.src = flagsArray[i].back; 
        flagTag.classList.add("front");
        flagTag.dataset.name = arr[i].name; //grabs the name property in flagsArray1, and assigns that to the dataset for this element
        flagTag.style.height = "150px"; //covers the child div
        flagTag.style.width = "200px"; //covers the child div
        flagTag.style.margin = "auto";
        childDiv.append(flagTag);
        }
    }

makeChildDivAndImageTags(flagsArray);


  /*----- event listeners -----*/
let flipped = 0;
function flipFlag(e){
    const name = e.target.dataset.name
    const flagObject = flagsArray.filter(card => name === card.name) //accesses each flag "card" object
    e.target.src = flagObject[0].front; 
    flipped++; //increments flipped by 1 with each click
    // if(flipped%2 == 0){
    //     if(){

    //     }
    // } else{

    // }
}

parentDiv.addEventListener('click', flipFlag);

//create a function (numFlagsVisible) such that only two cards can be compared at a time
    // do this by tracking how many cards are flipped
    // if card values === to each other, do nothing
    // if card values !== to each other, flip cards back over after 2 seconds (timeout(expr, 2000)??)

















  /*----- functions -----*/
//   let timer; 
//   let timeLeft = 60;
  
//   function gameOver() {
//     cancelInterval(timer);
//     $('#playAgainButton').show();
//   }
  
//   function updateTimer() {
//     timeLeft = timeLeft - 1;
//     if(timeLeft >= 0)
//       $('#timer').html(timeLeft);
//     else {
//       gameOver();
//     }
//   }
  
//   function start() {
//     timer = setInterval(updateTimer, 1000);
//     updateTimer();
//      $('#playAgainButton').hide();
//   }
