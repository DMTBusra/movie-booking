const movieSelect = document.getElementById("movie");
const total = document.getElementById("total");
const film = document.getElementById("film");
const count = document.getElementById("count");
const container =document.getElementsByClassName("container")[0];
const notOccupiedSeats = (".row .seat:not(.occupied)");
const seat =document.querySelector(".seat");

let  price = movieSelect.options[movieSelect.selectedIndex].value;

movieSelect.addEventListener("change",(e)=>{
    
    let  price = movieSelect.options[movieSelect.selectedIndex].value;
    let filmisim = movieSelect.options[movieSelect.selectedIndex].innerText.split(" (")[0];
  
    resultInfo(price,filmisim,counter);

});

const resultInfo = (ücret,filmName,counter) =>{  
    total.innerText = ücret * counter;
    film.innerText = filmName;

    count.innerText = counter;
};
let counter =0;
container.addEventListener("click",(e)=>{
    let filmisim = movieSelect.options[movieSelect.selectedIndex].innerText.split(" (")[0];
     
    if(!e.target.classList.contains("selected") && !e.target.classList.contains("occupied") && e.target.classList.contains("seat") ){
        e.target.classList.add("selected");
        counter += 1;
        resultInfo(price,filmisim,counter);
       
       

    }
    else if(!e.target.classList.contains("occupied") && e.target.classList.contains("seat")) {
     
        e.target.classList.remove("selected");
        counter -= 1;
        resultInfo(price,filmisim,counter);
    }
});




