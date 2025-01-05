const user ={
    username:"krish",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sanskriti"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username ="hitesh"
//     console.log(this.username); //undefined (function ke ander direct hum this use nhi kar pa rahe hai)
// }
// chai()

const chai = ()=> {
    let username ="hitesh"
    console.log(this);

}
// chai()

// const addtwo =(num1 , num2) => {
//     return num1+num2
// }
// console.log(addtwo(2,3))

// ***** implicit ******

// const addtwo =(num1 , num2) => num1+num2
// const addtwo =(num1 , num2) => (num1+num2)  

const addtwo =(num1,num2)=> ({username:"hitesh"})
console.log(addtwo(2,3))
