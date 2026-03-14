const holes = document.querySelectorAll(".hole");
const scoreDisplay = document.getElementById("score");

let score = 0;
let currentHole = null;
let gameInterval;

function randomHole(){

holes.forEach(hole=>{
hole.classList.remove("active");
hole.textContent="";
});

const index = Math.floor(Math.random()*holes.length);
currentHole = holes[index];

currentHole.classList.add("active");
currentHole.textContent="🐹";

}

holes.forEach(hole=>{

hole.addEventListener("click",()=>{

if(hole === currentHole){

score++;
scoreDisplay.textContent = score;

hole.classList.remove("active");
hole.textContent="";

}

});

});

function startGame(){

score = 0;
scoreDisplay.textContent = score;

clearInterval(gameInterval);

gameInterval = setInterval(randomHole,800);

setTimeout(()=>{

clearInterval(gameInterval);
alert("Game Over! Your Score: "+score);

},20000);

}