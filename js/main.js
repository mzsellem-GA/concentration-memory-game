 /*----- constants -----*/
// flagsArray1 = [
//     {front: 'australian-flag.png', back: 'fields-back-of-card.png'},
//     {front: 'brazilian-flag.png', back: 'fields-back-of-card.png'},
//     {front: 'canadian-flag.png', back: 'fields-back-of-card.png'},
//     {front: 'french-flag.png', back: 'fields-back-of-card.png'},
//     {front: 'indian-flag.png', back: 'fields-back-of-card.png'},
//     {front: 'romanian-flag.png', back: 'fields-back-of-card.png'},
//     {front: 'usa-flag.png', back: 'fields-back-of-card.png'},
//     {front: 'japanese-flag.png', back: 'fields-back-of-card.png'}
// ];
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




// let childDiv = document.createElement("div");
// childDiv.classList.add("child");
// parentDiv.append(childDiv);
// console.log(parentDiv);



// const imageInChildDiv = parentDiv.createElement("img");
// img.src = "australian-flag.png";
// childDiv.appendChild(imageInChildDiv);


  /*----- event listeners -----*/


  /*----- functions -----*/
