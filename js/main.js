 /*----- constants -----*/
flagsArray1 = [
    {front: 'australian-flag.png', back: 'fields-back-of-card.png'},
    {front: 'brazilian-flag.png', back: 'fields-back-of-card.png'},
    {front: 'canadian-flag.png', back: 'fields-back-of-card.png'},
    {front: 'french-flag.png', back: 'fields-back-of-card.png'},
    {front: 'indian-flag.png', back: 'fields-back-of-card.png'},
    {front: 'romanian-flag.png', back: 'fields-back-of-card.png'},
    {front: 'usa-flag.png', back: 'fields-back-of-card.png'},
    {front: 'japanese-flag.png', back: 'fields-back-of-card.png'}
];
// flagsArray2 = [
//     {front: 'australian-flag.png', back: 'fields-back-of-card.png'},
//     {front: 'brazilian-flag.png', back: 'fields-back-of-card.png'},
//     {front: 'canadian-flag.png', back: 'fields-back-of-card.png'},
//     {front: 'french-flag.png', back: 'fields-back-of-card.png'},
//     {front: 'indian-flag.png', back: 'fields-back-of-card.png'},
//     {front: 'romanian-flag.png', back: 'fields-back-of-card.png'},
//     {front: 'usa-flag.png', back: 'fields-back-of-card.png'},
//     {front: 'japanese-flag.png', back: 'fields-back-of-card.png'},
// ]

  /*----- state variables -----*/
// let timer;
// let isSolved;

  /*----- cached elements  -----*/
const parentDiv = document.querySelector(".parent-div");
function createChildDivs (num) {
    for(let i=0; i < num; i++){
        let childDiv = document.createElement("div");
        childDiv.classList.add("child-div");
        childDiv.style.height = "150px"
        childDiv.style.width = "200px"
        parentDiv.append(childDiv);
        }
}
createChildDivs(16);



function insertFlag () {
    let childDiv = document.querySelector(".child-div");
    const flagTag = document.createElement("img");
    img.src = "https://www.rawpixel.com/board/537381/vincent-van-gogh-free-original-cc0-public-domain-paintings";
    childDiv.appendChild(flagTag);
}
insertFlag();






  /*----- event listeners -----*/


  /*----- functions -----*/
  let timer; 
  let timeLeft = 60;
  
  function gameOver() {
    cancelInterval(timer);
    $('#playAgainButton').show();
  }
  
  function updateTimer() {
    timeLeft = timeLeft - 1;
    if(timeLeft >= 0)
      $('#timer').html(timeLeft);
    else {
      gameOver();
    }
  }
  
  function start() {
    timer = setInterval(updateTimer, 1000);
    updateTimer();
     $('#playAgainButton').hide();
  }
