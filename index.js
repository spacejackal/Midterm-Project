function DCVill(){
    fetch("../DC.json")
    .then(response => response.json())
    .then(chars => loadChars(chars, 1, 0))
    .catch(err => console.log("Error :"+err));
}
function DCHero(){
    fetch("../DC.json")
    .then(response => response.json())
    .then(chars => loadChars(chars, 0, 0))
    .catch(err => console.log("Error :"+err));
}

function mVill(){
    fetch("../Marvel.json")
    .then(response => response.json())
    .then(chars => loadChars(chars, 1, 0))
    .catch(err => console.log("Error :"+err));
}
function mHero(){
    fetch("../Marvel.json")
    .then(response => response.json())
    .then(chars => loadChars(chars, 0, 0))
    .catch(err => console.log("Error :"+err));
}

function DCLHH(){
    fetch("../DC.json")
    .then(response => response.json())
    .then(chars => loadChars(chars,0,1))
    .catch(err => console.log("Error :"+err));
}

function DCLHV(){
    fetch("../DC.json")
    .then(response => response.json())
    .then(chars => loadChars(chars,1, 1))
    .catch(err => console.log("Error :"+err));
}

function MLHH(){
    fetch("../Marvel.json")
    .then(response => response.json())
    .then(chars => loadChars(chars,0, 1))
    .catch(err => console.log("Error :"+err));
}

function MLHV(){
    fetch("../Marvel.json")
    .then(response => response.json())
    .then(chars => loadChars(chars,1, 1))
    .catch(err => console.log("Error :"+err));
}




function showCardsContainingDescriptionA(){
    const inputField = document.getElementById('inputField');
    inputField.style.display = 'block'; // Show the input field
}
function showCardsContainingDescriptionB(){
    fetch("./MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies, 3))
    .catch(err => console.log("Error :"+err));
}


function loadChars(chars, n, s){
     let arraychars = [];
    if( n === 0){
        for(let i = 0; i< chars.heros.length; i++){
            arraychars.push(chars.heros[i]);
        }
    }
    if( n === 1){
        for(let i = 0; i< chars.villans.length; i++){
            arraychars.push(chars.villans[i]);
        }
    }
    
    console.log(arraychars);
     //sorting the movies from low to high
     let sortedChars = [];
     if(s === 1){
         sortedChars = arraychars.sort((p1,p2) => (p1.releaseYear>p2.releaseYear) ? 1 : (p1.releaseYear<p2.releaseYear) ? -1 : 0)
     }
     if(n=== 2){
         sortedChars = arraychars.sort((p1,p2) => (p1.releaseYear<p2.releaseYear) ? 1 : (p1.releaseYear>p2.releaseYear) ? -1 : 0)
     }
     if(n === 3){
         const inputDescription = document.getElementById("descriptionInput").value;
         document.getElementById('inputField').style.display = 'none';
 
         for (let char of arraychars){
             if (char.description.includes(inputDescription)){
             sortedChars.push(char);
         }
         }
     }else{
        sortedChars = arraychars;
     }
 
     console.log("this is array Chars sorted",sortedChars);
     //adding new card
     var CardChar = document.getElementById("col")
     CardChar.innerHTML= "";
 
     for (let i = 0; i < chars.heros.length; i++) {
         let char = sortedChars[i];
         console.log(char);
         
         let name = CardChar.name;
         let year = CardChar.releaseYear;
         let url = CardChar.url;
         console.log(name);
     // construct the HTML element
         let AddCardChar = document.createElement("div");
         AddCardChar.classList.add("col"); // Add Bootstrap class to the column
         AddCardChar.innerHTML = `
         <div class="card shadow-sm">
         <img src=${char.url} class="card-img-top" alt="..."></img>
         <div class="card-body">
         <p class="card-text"> <strong>${char.name}</strong>, ${char.releaseYear}</p>
         </div>
         </div>

             <div class="collapse text-bg-dark" id="more${char.name}">
          <div class="container">
              <p>${char.description}</p>
              <a href="${char.page}">Full page
              
          </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container">
            <a href="#" class="navbar-brand d-flex align-items-center">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#more${char.name}" aria-controls="more${char.name}" aria-expanded="false" aria-label="Toggle navigation">
              More
            </button>
          </div>
        </div>

         `;
         CardChar.appendChild(AddCardChar);
         
  
     } // end of for
 
 
 }



