function cal(...num1){

    return num1;
}

console.log(cal(6,3,3,3,3))


const user ={

    udername:"mahesh",
    age:'34'


}

function handleobject(anyobject){

    console.log(`username is ${anyobject.udername} and age is${anyobject.age}`);

}
handleobject(user);

// arrow function 

((name)=>{

    console.log(`DB Conected ${name} `);
})('mahesh')

