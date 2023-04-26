 /*----- constants -----*/
flagsArray = [
    {name: "australian", front: 'australian-flag.png', back: 'fields-back-of-card.png', isMatch: false},
    {name: "brazilian", front: 'brazilian-flag.png', back: 'fields-back-of-card.png'},
    {name: "canadian", front: 'canadian-flag.png', back: 'fields-back-of-card.png'},
    {name: "french", front: 'french-flag.png', back: 'fields-back-of-card.png'},
    {name: "indian", front: 'indian-flag.png', back: 'fields-back-of-card.png'},
    {name: "romanian", front: 'romanian-flag.png', back: 'fields-back-of-card.png'},
    {name: "usa", front: 'usa-flag.png', back: 'fields-back-of-card.png'},
    {name: "japanese", front: 'japanese-flag.png', back: 'fields-back-of-card.png'},
    {name: "australian", front: 'australian-flag.png', back: 'fields-back-of-card.png'},
    {name: "brazilian", front: 'brazilian-flag.png', back: 'fields-back-of-card.png'},
    {name: "canadian", front: 'canadian-flag.png', back: 'fields-back-of-card.png'},
    {name: "french", front: 'french-flag.png', back: 'fields-back-of-card.png'},
    {name: "indian", front: 'indian-flag.png', back: 'fields-back-of-card.png'},
    {name: "romanian", front: 'romanian-flag.png', back: 'fields-back-of-card.png'},
    {name: "usa", front: 'usa-flag.png', back: 'fields-back-of-card.png'},
    {name: "japanese", front: 'japanese-flag.png', back: 'fields-back-of-card.png'},
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
        flagTag.id = (`card${[i]}`);
        flagTag.dataset.name = arr[i].name; //grabs the name property in flagsArray, and assigns that to the dataset for this element
        flagTag.style.height = "150px"; //covers the child div
        flagTag.style.width = "200px"; //covers the child div
        flagTag.style.margin = "auto";
        childDiv.append(flagTag);
        }
    }

makeChildDivAndImageTags(flagsArray);


  /*----- event listeners -----*/

let flipped = 0;
let targetDatasetName;
let targetSource;
let pickedFlagNameArray = [];
let pickedFlagIdArray = [];
let pickedFlagNameArray2 = [];
let targetId;

function flipFlag(e){
  const name = e.target.dataset.name
  const flagObject = flagsArray.filter(card => name === card.name) //accesses each flag "card" object
  // targetSource = e.target.src; // grabs image source of target
  // console.log("ts1", targetSource) // CAN I NOT STORE THE DOM TARGET IN A VARIABLE AND THEN USE IT?
  targetSource = flagObject[0].front; //captures the front property of the flagsArray
  console.log("ts2", targetSource)
  e.target.src = targetSource; //reassigns the value of the target source to teh flag array image
  flipped++; //increments flipped by 1 with each click

  targetId = e.target.id; // accesses target's id property -we will use this to use the 
  // document.getElementById method to target the cards in the DOM to change their properties
  // based on the game conditions/state without having to loop thorugh ALL of the cards and classes

  targetDatasetName = e.target.dataset.name; //grabs the string of the name property

  if(pickedFlagNameArray.length < 2){
    pickedFlagNameArray.push(targetDatasetName); //push clicked target's dataset name into pickedFlagNameArray
    console.log("did we push into the pickedFlagName array?", pickedFlagNameArray);// see if cards are pushed into array
  }
  else {
    return;
  }


  if (pickedFlagNameArray[0] === pickedFlagNameArray[1]){ //if the value of the indices are ===, do nothing
    return;
  } else { 
    pickedFlagNameArray2.push(targetDatasetName); // push the Ids of the clicked target into pickedFlagIdArray
    console.log("did we push into the pickedFlagNameArray2?", pickedFlagNameArray2);
    if(pickedFlagNameArray2[0] !== pickedFlagNameArray2[1]) { //USE NAMES INSTEAD OF IDS
      setTimeout(() => {
        e.target.src = flagObject[0].back;
      }, 2000); 
    }
   }
  } 
parentDiv.addEventListener('click', flipFlag);



//increase the time between flipping the card back over to the back so the change can be perceived (set timeout)
//use the pickedCardsId array to have whatever cards are in there to do the flip together
  //after flip, be sure to empty the pickedCardsId array