function loginusermessage(username="sam"){
    return `${username} just logged in `
}

// console.log(loginusermessage())

function calculateCartPrice(...num1){    //rest operator
  return num1
}

// console.log(calculateCartPrice(200,400,600,300,600))

const user = {
   username: "sanskriti",
   price: 233
}

function defineobject(anyobject){
        return (`username is ${anyobject.username} and price is ${anyobject.price}`)
}

console.log(defineobject(user))