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

const parentDiv = document.querySelector(".parent-div");
const button = document.querySelector('button');

  /*----- state variables -----*/

// let isSolved;
let match = 0;
let noMatch = 0;
let targetDatasetName;
let targetSource;
let pickedFlagNameArray = [];
let pickedFlagIdArray = [];
let unmatchedFlagArray = [];
let targetId;

  /*----- cached elements  -----*/

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
        flagTag.dataset.name = arr[i].name; 
        flagTag.style.height = "150px"; 
        flagTag.style.width = "200px"; 
        flagTag.style.margin = "auto";
        childDiv.append(flagTag);
        }
    }

makeChildDivAndImageTags(flagsArray);


  /*----- event listeners -----*/

parentDiv.addEventListener('click', flipFlag);

button.addEventListener('click', function() {
  window.location.reload();
})

  /*----- Functions -----*/

// window.onload = function() {
//     document.getElementById("my_audio").play();
// }

function flipFlag(e){
  targetId = e.target.id; 
  const name = e.target.dataset.name 
  const flagObject = flagsArray.filter(card => name === card.name) 
  targetSource = flagObject[0].front; 
  e.target.src = targetSource; 

  pickedFlagNameArray.push(name);
  pickedFlagIdArray.push(targetId); 
  // console.log("what does this picked flag ID array contain after push?", pickedFlagIdArray);
  // console.log("what does this picked flag name array contain after push?", pickedFlagNameArray);

  if(pickedFlagNameArray.length === 1) {
    console.log("Name array after 1st click", pickedFlagNameArray);// see if cards are pushed into array
    console.log("ID array after 1st click", pickedFlagIdArray);// see if cards are pushed into array
    return;
  }
  if(pickedFlagNameArray.length === 2){
    if(pickedFlagNameArray[0] === pickedFlagNameArray[1]){ 
    console.log("flag name array after second click", pickedFlagNameArray)
    console.log("flag ID array after second click", pickedFlagIdArray)
    match++; 
    console.log("how many matches?", match);
    pickedFlagNameArray = [];
    pickedFlagIdArray = [];

    if(match === 8){ // conditions for winning
      document.querySelector('h3').innerText = "Congratulations! You won!"; 
      document.querySelector('h2').innerText = '';

    } else if(noMatch === 20) { // conditions for losing
       document.querySelector('h3').innerText = "Sorry! That's too many guesses!"
       document.querySelector('h2').innerText = '';
     }
    return;
    } else if(pickedFlagIdArray[0] !== pickedFlagIdArray[1]) {
      console.log("flag name array if noMatch", pickedFlagNameArray)
      console.log("flag ID array if noMatch", pickedFlagIdArray)
      pickedFlagNameArray.push(name); 
      pickedFlagIdArray.push(targetId)
      noMatch++;
      console.log("noMatch", noMatch);
      setTimeout(function () {
      const getId0 = document.getElementById(pickedFlagIdArray[0]);
      getId0.src = flagObject[0].back;
      const getId1 = document.getElementById(pickedFlagIdArray[1]);
      getId1.src = flagObject[0].back;
      }, 2000); 
    }
  }
}