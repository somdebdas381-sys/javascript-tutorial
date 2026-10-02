const mysym = Symbol("key1");
let title="das";
const obj={
    name:"somdeb",
    [title]:"roy",
    [mysym]:"mykey",//refer the symbol named mysym
    roll:20,
    sec:'A',
    "subjects":["DBMS","OS","DSA"],
}
// console.log(obj["title"]);//Because there is no property called "title".
// console.log(obj[title]);//value of title → "das" then change into roy
// console.log(obj["das"]);//What JS looks for-> "das" then prints roy

// obj.roll = 42;

// console.log(obj.roll);

// Object.freeze(obj);

// obj.roll = 100;//not change beacuse we freeze the obj using --> object.freeze(obj)
// console.log(obj.roll);

obj.greetings1 = function(){
    console.log("hello js user");
}
console.log(obj.greetings1);//greetings is a funtion
console.log(obj.greetings1());

obj.greetings2 = function(){
    console.log(`hi ${this.name}`);//string interpulation
}

console.log(obj.greetings2());



