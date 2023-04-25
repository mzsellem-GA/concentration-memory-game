 /*----- constants -----*/
flagsArray1 = [
    {name: "australian", front: 'australian-flag.png', back: 'fields-back-of-card.png'},
    {name: "brazilian", front: 'brazilian-flag.png', back: 'fields-back-of-card.png'},
    {name: "canadian", front: 'canadian-flag.png', back: 'fields-back-of-card.png'},
    {name: "french", front: 'french-flag.png', back: 'fields-back-of-card.png'},
    {name: "indian", front: 'indian-flag.png', back: 'fields-back-of-card.png'},
    {name: "romanian", front: 'romanian-flag.png', back: 'fields-back-of-card.png'},
    {name: "usa", front: 'usa-flag.png', back: 'fields-back-of-card.png'},
    {name: "japanese", front: 'japanese-flag.png', back: 'fields-back-of-card.png'}
];
flagsArray2 = [
    {front: 'australian-flag.png', back: 'fields-back-of-card.png'},
    {front: 'brazilian-flag.png', back: 'fields-back-of-card.png'},
    {front: 'canadian-flag.png', back: 'fields-back-of-card.png'},
    {front: 'french-flag.png', back: 'fields-back-of-card.png'},
    {front: 'indian-flag.png', back: 'fields-back-of-card.png'},
    {front: 'romanian-flag.png', back: 'fields-back-of-card.png'},
    {front: 'usa-flag.png', back: 'fields-back-of-card.png'},
    {front: 'japanese-flag.png', back: 'fields-back-of-card.png'},
]
// flagsArray1[i].isMatch
// flagsArray1[e.target.id].isMatch
  /*----- state variables -----*/
// let timer;
// let isSolved;

  /*----- cached elements  -----*/
const parentDiv = document.querySelector(".parent-div");
const childDiv = document.getElementsByClassName("child-div");
const image = document.querySelectorAll("img");
// console.log('marley', childDiv) //array of childDivs
function childDivAndFlagOneLoop (arr) {
    for(let i=0; i < arr.length; i++){
        let childDiv = document.createElement("div");
        childDiv.classList.add("child-div");
        childDiv.style.height = "150px";
        childDiv.style.width = "200px";
        childDiv.style.display = "flex";
        parentDiv.append(childDiv);

        const flagTag = document.createElement("img");
        flagTag.src = flagsArray1[i].back; 
        flagTag.classList.add("front");
        flagTag.dataset.name = arr[i].name; //grabs the name property in flagsArray1, and assigns that to the dataset for this element
        flagTag.style.height = "150px"; //covers the child div
        flagTag.style.width = "200px"; //covers the child div
        flagTag.style.margin = "auto";
        childDiv.append(flagTag);
        }
    }
function childDivAndFlagTwoLoop (arr) {        
    for(let i=0; i < arr.length; i++){
        let childDiv = document.createElement("div");
        childDiv.classList.add("child-div");
        childDiv.style.height = "150px";
        childDiv.style.width = "200px";
        childDiv.style.display = "flex";
        parentDiv.append(childDiv);

        const flagTag = document.createElement("img");
        flagTag.src = flagsArray1[i].front; 
        flagTag.classList.add("front");
        flagTag.style.height = "100px";
        flagTag.style.margin = "auto";
        childDiv.append(flagTag);
        }
}
childDivAndFlagOneLoop(flagsArray1);
childDivAndFlagTwoLoop(flagsArray2);


  /*----- event listeners -----*/

function flipFlag(e){
    const name = e.target.dataset.name
    const flagObject = flagsArray1.filter(card => name === card.name)
    console.log(flagObject[0].front)
    // console.log("hi", front);
    // e.target.src = flagsArray1[0].back 
    e.target.src = flagObject[0].front; 
    // this flips a card from the back to the front 
    //next steps: track clicks through a state variable 
   
}

parentDiv.addEventListener('click', flipFlag);


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
