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

let match = 0;
let noMatch = 0;
let targetDatasetName; 
let targetSource;
let targetId;
let pickedFlagNameArray = [];
let pickedFlagIdArray = [];

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

window.onload = function() {
    document.getElementById("my_audio").play();
}

function flipFlag(e){
  targetId = e.target.id; 
  const name = e.target.dataset.name;
  const flagObject = flagsArray.filter(card => name === card.name); 
  targetSource = flagObject[0].front; 
  e.target.src = targetSource; 

  pickedFlagNameArray.push(name);
  pickedFlagIdArray.push(targetId);

  if(pickedFlagNameArray.length === 1) {
    return;
  }
  if(pickedFlagNameArray.length === 2){
    if(pickedFlagNameArray[0] === pickedFlagNameArray[1]){ 
      match++; 
      pickedFlagNameArray = [];
      pickedFlagIdArray = [];

      if(match === 8){ 
        document.querySelector('h2').innerText = "Congratulations! You won!";
      }
      return;
    } 
    else if (pickedFlagIdArray[0] !== pickedFlagIdArray[1]) {
        pickedFlagNameArray.push(name); 
        pickedFlagIdArray.push(targetId);
        noMatch++;
        setTimeout(function () {
          const getId0 = document.getElementById(pickedFlagIdArray[0]);
          getId0.src = flagObject[0].back;
          const getId1 = document.getElementById(pickedFlagIdArray[1]);
          getId1.src = flagObject[0].back;
          pickedFlagNameArray = [];
          pickedFlagIdArray = [];
        }, 500); 
        if (noMatch == 3) {
          document.querySelector('h2').innerText = "Sorry! That's too many guesses!";
        }
    }
  }
}