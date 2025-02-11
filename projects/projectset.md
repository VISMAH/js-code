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