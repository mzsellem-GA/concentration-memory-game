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
let targetId;


function flipFlag(e){
  targetId = e.target.id; //grabs id of click
  const name = e.target.dataset.name
  const flagObject = flagsArray.filter(card => name === card.name) //accesses each flag "card" object
  console.log("hello it me", flagObject);
  // targetSource = e.target.src; // grabs image source of target
  // console.log("ts1", targetSource) // CAN I NOT STORE THE DOM TARGET IN A VARIABLE AND THEN USE IT?
  targetSource = flagObject[0].front; //captures the front property of the flagsArray
  console.log("ts2", targetSource)
  e.target.src = targetSource; //reassigns the value of the target source to teh flag array image
  flipped++; //increments flipped by 1 with each click

  // targetId = e.target.id; // accesses target's id property -we will use this to use the 
  // document.getElementById method to target the cards in the DOM to change their properties
  // based on the game conditions/state without having to loop thorugh ALL of the cards and classes

  // targetDatasetName = e.target.dataset.name; //grabs the string of the name property


pickedFlagNameArray.push(name); //push clicked target's dataset name into pickedFlagNameArray
pickedFlagIdArray.push(targetId); //updates the array
console.log("is this picked flags ID array?", pickedFlagIdArray);
if(pickedFlagNameArray.length === 1) {
  console.log("array after 1st click", pickedFlagNameArray);// see if cards are pushed into array
  return;
}
if(pickedFlagNameArray.length === 2){
  if(pickedFlagNameArray[0] === pickedFlagNameArray[1]){ //if the value of the indices are ===, empty the array
    console.log("array after second click", pickedFlagNameArray)
    return;
  } else {
    console.log("mismatch", pickedFlagNameArray)
    setTimeout(() => {
      const getId0 = document.getElementById(pickedFlagIdArray[0]);
      console.log(getId0);
      getId0.src = flagObject[0].back;
      const getId1 = document.getElementById(pickedFlagIdArray[1]);
      console.log(getId1);
      getId1.src = flagObject[0].back;
    }, 2000); 
  }
}
    
    }
parentDiv.addEventListener('click', flipFlag);



//increase the time between flipping the card back over to the back so the change can be perceived (set timeout)
//use the pickedCardsId array to have whatever cards are in there to do the flip together
  //after flip, be sure to empty the pickedCardsId array


  // if(pickedFlagNameArray.length < 2){
  //   pickedFlagNameArray.push(targetDatasetName); //push clicked target's dataset name into pickedFlagNameArray
  //   console.log("did we push into the pickedFlagName array?", pickedFlagNameArray);// see if cards are pushed into array
    
  //   if(pickedFlagNameArray[0] === pickedFlagNameArray[1]){ //if the value of the indices are ===, empty the array
  //     pickedFlagNameArray.length = 0;
  //     console.log("it me", pickedFlagNameArray)
  //     return;
  //   } else if (pickedFlagNameArray[0] !== pickedFlagNameArray[1]) {
  //     pickedFlagNameArray.length = 0;
  //     setTimeout(() => {
  //       e.target.src = flagObject[0].back;
  //     }, 2000); 
  //   }
  //   }

  