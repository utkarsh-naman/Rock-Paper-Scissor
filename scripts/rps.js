const pElement = document.querySelector('.choice');
const pElement2 = document.querySelector('.stat');
let move = 0;
let stat = JSON.parse(localStorage.getItem('stats')) || {
    win : 0,
    lose : 0,
    tie : 0,
    game : 0,
};

let state = 0;
let comp;
document.getElementById("statgame").innerHTML = stat.game;
document.getElementById("statwin").innerHTML = stat.win;
document.getElementById("statlose").innerHTML = stat.lose;
document.getElementById("stattie").innerHTML = stat.tie;
//console.log(JSON.parse(localStorage.getItem('stats')));

function compute(user){
stat.game++;
move = Math.floor(Math.random()*10);
if(move>=0 && move<3)
  comp=-1;
else if(move>=3 && move<6)
  comp = 0;
else
  comp= 1;

let eval = user-comp;
if(eval==1||eval==-2){
  state=1;
  stat.win++;}
else if(eval==0){
  state = 0;
  stat.tie++;}
else{
  state = -1;
  stat.lose++;}

localStorage.setItem('stats', JSON.stringify(stat));
}

function display(ymove, cmove, result){
  pElement.innerHTML = `You: ${ymove}  ${cmove}:Computer. ${result}`;

  pElement2.innerHTML = `Game:${stat.game}, Win:${stat.win}, Lose:${stat.lose}, Tie:${stat.tie}`;

  
  //alert('Computer chose '+cmove+'. '+result+'\n Game: '+stat.game+'\n Win: '+stat.win+'\n Lose: '+stat.lose+'\n Tie: '+stat.tie);
}

      