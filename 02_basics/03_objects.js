// const tinderuser = new Object();   singelton object 
const tinderuser ={}   //non singleton object hai 

tinderuser.id ="123abc"
tinderuser.name="sammy"
tinderuser.isLoggedIn = false


// console.log(tinderuser)

const regularuser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
                  firstname:"sanskriti",
                  lastname:"singh"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3 ={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2} //spread 

// console.log(obj3)

const users =[
{
    name:"sanskriti",
    email:"sanskriti@gmail.com",
    phoneno:"1234"
},
{
    name:"sanskriti",
    email:"sanskriti@gmail.com",
    phoneno:"1234"
},
{
    name:"sanskriti",
    email:"sanskriti@gmail.com",
    phoneno:"1234"
},
{
    name:"sanskriti",
    email:"sanskriti@gmail.com",
    phoneno:"1234"
}

]

// console.log(Object.keys(tinderuser));  //value returned as an array 

// console.log(tinderuser.hasOwnProperty('isLoggedIn'))


const course ={
      cname :"javascript",
      price:999,
      courseInstructor:"Hitesh"
}

const {courseInstructor: instructor} =course //destructuring

console.log(instructor)

