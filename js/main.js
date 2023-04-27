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
let noMatch = 0;
let targetDatasetName;
let targetSource;
let pickedFlagNameArray = [];
let pickedFlagIdArray = [];
let unmatchedFlagArray = [];
let targetId;



function renderMessages(){
  if(flipped === 20){ //insert conditions for winning
   document.querySelector('h2').innerContent = "Congratulations! You won!"
  } else {
    document.querySelector('h2').innerContent = "Sorry! That's too many guesses!"
  }
}



function flipFlag(e){
  targetId = e.target.id; //grabs id of click
  const name = e.target.dataset.name //grabs the string of the name property
  const flagObject = flagsArray.filter(card => name === card.name) //accesses each flag "card" object
  targetSource = flagObject[0].front; //captures the front property of the flagsArray
  e.target.src = targetSource; //reassigns the value of the target source to teh flag array image
 
  // targetId = e.target.id; // accesses target's id property -we will use this to use the 
  // document.getElementById method to target the cards in the DOM to change their properties
  // based on the game conditions/state without having to loop thorugh ALL of the cards and classes

  pickedFlagNameArray.push(name); //push clicked target's dataset name into pickedFlagNameArray
  pickedFlagIdArray.push(targetId); //updates the array
  console.log("is this picked flag ID array?", pickedFlagIdArray);
  console.log("is this picked flag name array?", pickedFlagNameArray);

  if(pickedFlagNameArray.length === 1) {
  // console.log("array after 1st click", pickedFlagNameArray);// see if cards are pushed into array
    return;
  }
  if(pickedFlagNameArray.length === 2){
    if(pickedFlagNameArray[0] === pickedFlagNameArray[1]){ //if the value of the indices are ===, empty the array
    console.log("flag name array after second click", pickedFlagNameArray)
    flipped++; //increments flipped by 1 with each click
    console.log("how many matches?", flipped);

    if(flipped === 8){ //insert conditions for winning
      document.querySelector('h3').innerText = "Congratulations! You won!"
      console.log("you won"); 
    } else if(noMatch === 20) {
       document.querySelector('h3').innerText = "Sorry! That's too many guesses!"
     }

    pickedFlagNameArray = [];
    pickedFlagIdArray = [];
    return;
    } else if(pickedFlagIdArray[0] !== pickedFlagIdArray[1]) {
      noMatch++;
      // console.log("mismatch", pickedFlagNameArray)
      setTimeout(function () {
      const getId0 = document.getElementById(pickedFlagIdArray[0]);
      getId0.src = flagObject[0].back;
      const getId1 = document.getElementById(pickedFlagIdArray[1]);
      getId1.src = flagObject[0].back;
      }, 2000); 
    }
  }
}

parentDiv.addEventListener('click', flipFlag);
const button = document.querySelector('button');
button.addEventListener('click', function() {
  window.location.reload();
})