# Projects related to DOM

## project link 
[Click here](https://stackblitz.com/edit/dom-project-maheshratta-ulhj9xgc?file=index.html)

# Solution Code 

## project 1

```javascript
const buttons=document.querySelectorAll('.button')

const body =document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);

  button.addEventListener('click',function(e){

    console.log(e)
    console.log(e.target);

    if (e.target.id =='grey'){
      body.style.backgroundColor= e.target.id
    }
    if (e.target.id =='white'){
      body.style.backgroundColor= e.target.id
    }
    if (e.target.id =='blue'){
      body.style.backgroundColor= e.target.id
    }
    if (e.target.id =='yellow'){
      body.style.backgroundColor= e.target.id
    }


  })

});


```

# Project 2

```javascript

const form =document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');


  if (height===''|| height <0 || isNaN(height) ){
    results.innerHTML=`Please give me valid heigth ${height}`;

  }
  else if (weight===''|| height <0 || isNaN(weight) ){
    results.innerHTML=`Please give me valid weight ${weight}`;
  }
  else {
    const bmi = (weight/((height*height)/10000)).toFixed(2)

    results.innerHTML= `<span>${bmi}<span>`


  }



   

});



```

# Project 3

```javascript 

const clock = document.getElementById('clock');



setInterval(function(){

  let date = new Date();

clock.innerHTML =date.toLocaleTimeString();



},1000)
```

## project 4 

```javascript
const randomNumber = parseInt(Math.random()*100+1);

const submit= document.querySelector('#subt');
const userInput= document.querySelector('#guessField');
const guessSlot= document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');
const lowOrHi= document.querySelector('.lowOrHi');
const startOver= document.querySelector('.resultParas');


const p = document.createElement('p');


let prevGuess = [ ];

let numGuess=1;

let playGame = true;


if(playGame){
  submit.addEventListener('click',function(e){
   e.preventDefault() ;
   const guess = parseInt(userInput.value);
   console.log(guess);
   validateGuess(guess);
  });
}

function validateGuess(guess){
  //
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess<1){
    alert('Please enter a number more than 1')
  }else if(guess>100){
    alert('Please enter a number less than 100')
  }
  else{
    prevGuess.push();
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game over.Random was ${randomNumber} `);
      endGame();
    }
    else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }


}

function checkGuess(guess){

  if(guess=== randomNumber){
    displayMessage(`you entered it right `);
    endGame();

  }
  else if(guess < randomNumber){
    displayMessage(`Number is too low `);

  }
  else if(guess > randomNumber){
    displayMessage(`Number is too  high `);

  }
  
}
function displayGuess(guess){

  userInput.value= '';
  guessSlot.innerHTML +=` ${guess}, `;
  numGuess ++;
  remaining.innerHTML =`${11- numGuess}`;
  
}
function displayMessage(message){
  lowOrHi,innerHTML=` <h2>${message}</h2>`;
  
}
function endGame(guess){
  // 
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id ="new game ">Start New game </h2>`;
  startOver.appendChild(p);
  playGame= false;
  newGame();
}
function newGame(guess){

  document.querySelector('#newgame')

  newGameButton.addEventListener('click',function(e){
    randomNumber= parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');

    startOver.removeChild(p);
    playGame=true;

  });
  
}




```

##project 5

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table
</div>  `;
}
);
```


##project 6 


```javascript
// generate color 
const randomColor= function(){
  const hex ='0123456789ABCDEF';
  let color= '#';

  for(let i=0;i<6;i++){
    color +=hex[Math.floor(Math.random()*16)];

  }
  return color;



};

const changingcolor =function(){
   document.body.style.background =randomColor;
};

const stopchangingcolor =function(){

};

document.querySelector('#start').addEventListener('click',changingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor);```