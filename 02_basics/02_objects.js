const mysym=Symbol("key1")

const juser={
    name:"sanskriti",
    "fullname" : "sanskriti singh",
    [mysym]: "mykey1",
    age: 21,
    location: "jamshedpur",
    email:"sanskriti213sm2gmail.com",
    isloggedin :false,
    lastlogedin: ["monday" ,"wednesday"]

}

// console.log(juser.email)
// console.log(juser["email"])
// console.log(juser["fullname"])
// console.log(juser[mysym])
// console.log(typeof mysym)

// Object.freeze(juser)
// console.log(juser)


juser.greetings =function(){
    console.log("Hello JSuser ");
}
juser.greetingstwo = function(){
    console.log(`hello js user , ${this.name}`);
}

console.log(juser.greetings())
console.log(juser.greetingstwo())