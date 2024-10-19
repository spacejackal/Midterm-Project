function DCVill(){
    fetch("./DC.json")
    .then(response => response.json())
    .then(chars => loadChars(chars, 1))
    .catch(err => console.log("Error :"+err));
}
function DCHero(){
    fetch("./DC.json")
    .then(response => response.json())
    .then(chars => loadChars(chars, 0))
    .catch(err => console.log("Error :"+err));
}

function mVill(){
    fetch("./Marvel.json")
    .then(response => response.json())
    .then(chars => loadChars(chars, 1))
    .catch(err => console.log("Error :"+err));
}
function mHero(){
    fetch("./Marvel.json")
    .then(response => response.json())
    .then(chars => loadChars(chars, 0))
    .catch(err => console.log("Error :"+err));
}



//showCardsSortedByPriceLowHigh();

function showCardsSortedByPriceLowHigh(){
    fetch("./MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies, 1))
    .catch(err => console.log("Error :"+err));
}

function showCardsSortedByPriceHighLow(){
    fetch("./MoviesFromJSON.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies, 2))
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


function loadChars(chars, n){
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
     if(n === 2){
         sortedChars = arraychars.sort((p1,p2) => (p1.releaseYear>p2.releaseYear) ? 1 : (p1.releaseYear<p2.releaseYear) ? -1 : 0)
     }
 
 
     if(n=== 3){
         sortedChars = arraychars.sort((p1,p2) => (p1.releaseYear<p2.releaseYear) ? 1 : (p1.releaseYear>p2.releaseYear) ? -1 : 0)
 
     }
 
     if(n === 4){
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
         <p>${char.description}</p>
         </div>
         </div>
         `;
         CardChar.appendChild(AddCardChar);
         
  
     } // end of for
 
 
 }

function loadMovies(myMovies,n){
    //console.log(myMovies.movies[1])
    let arrayMovies = [];
    for(let i = 0; i< myMovies.movies.length; i++){
        arrayMovies.push(myMovies.movies[i]);
    }

    //sorting the movies from low to high
    let sortedMovies = [];
    if(n === 1){
        sortedMovies = arrayMovies.sort((p1,p2) => (p1.price>p2.price) ? 1 : (p1.price<p2.price) ? -1 : 0)
    }


    if(n=== 2){
        sortedMovies = arrayMovies.sort((p1,p2) => (p1.price<p2.price) ? 1 : (p1.price>p2.price) ? -1 : 0)

    }

    if(n === 3){
        const inputDescription = document.getElementById("descriptionInput").value;
        document.getElementById('inputField').style.display = 'none';

        for (let movie of arrayMovies){
            if (movie.description.includes(inputDescription)){
            sortedMovies.push(movie);
        }
        }
        
    }

    console.log("this is array movies sorted",sortedMovies);
    //adding new card
    var CardMovie = document.getElementById("col")
    CardMovie.innerHTML= "";

    for (let i = 0; i < myMovies.movies.length; i++) {
        let movie = sortedMovies[i];
        console.log(movie);
        
        //adding the movie card to HTML
        let title = CardMovie.title;
        let year = CardMovie.year;
        let url = CardMovie.url;
        console.log(title);
    // construct the HTML element
        let AddCardMovie = document.createElement("div");
        AddCardMovie.classList.add("col"); // Add Bootstrap class to the column
        AddCardMovie.innerHTML = `
        <div class="card shadow-sm">
        <img src=${movie.url} class="card-img-top" alt="..."></img>
        <div class="card-body">
        <p class="card-text"> <strong>${movie.title}</strong>, ${movie.year}, $${movie.price}</p>
        </div>
        </div>
        `;
        CardMovie.appendChild(AddCardMovie);
        
 
    } // end of for


}


