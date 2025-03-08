// const promise1 = new Promise(function(resolve, reject){
     
    
//     setTimeout(function(){
        
//         console.log('assyng the task ');

//         resolve()
//     },1000)


// });


// promise1.then(function(){
//     console.log("task is done ")
// })


// new promise1(function(resolve,reject) {
//     setTimeout(function(){
//         console.log('assyng  2 the task ')
//         resolve();
//     },1000)

// }).then(function(){
//     console.log("task 2 is done ")
// })


// /// 
// async function getAllUser(params) {
//      const response= await fetch('https://api.github.com/users');
//       const data =response.json();
//       console.log(data);

    
// }
// getAllUser();


fetch('https://api.github.com/users')
.then((Response)=>{
        return Response.json();  
})
.then((data)=>{
    console.log(data);
})
.catch((Error) =>console.log(Error))
