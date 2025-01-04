const myArr =[0,1,2,3,4,5];
const myHeros=["shaktiman","iron man"]

const myarr2 = new Array(1,2,3,4)
// console.log(myArr[0]);

// array methods 

// myArr.push(39)
// myArr.push(59)
// console.log(myArr.pop())
// console.log(myArr);


console.log(myArr)

const myn1=myArr.slice(1,3)

console.log("slice",myn1);

const myn2 =myArr.splice(1,3)
console.log("splice",myn2);
console.log("changes to original array",myArr)
