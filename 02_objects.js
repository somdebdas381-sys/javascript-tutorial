// const tinder_user2 = new Object();//this is a singleton object
const tinder_user = {}//this is a normal object

// console.log(tinder_user);
//  console.log(tinder_user2);




// const nestedObj = {
//     fullName : {
//         firstName : "somdeb",
//         lastName : {
//             title : "das",
//         }
//     }
// }

// console.log(nestedObj.fullName.firstName);
// console.log(nestedObj.fullName.lastName.title);

//object assign:
const target = {a: 1, b: 2 }
const source = {c: 3, d: 4 }
// const returnedTarget = Object.assign({},target, source);//we create a new obj and store the final result
// console.log(returnedTarget);
const ans = {...target, ...source};
// console.log(ans);



//uses of object in database like:
const users = [
    {
        name : "som1",
        email : "som1@gmail.com"
    },
    {
        name : "som2",
        email : "som2@gmail.com"
    },
    {
        name : "som3",
        email : "som2=3@gmail.com"
    },
    
]

// console.log(users[0].email);

tinder_user.Name = "somdeb";
tinder_user.phNo = 1011;
tinder_user.pincode = 721101;

//some functions

// console.log(Object.keys(tinder_user));
// console.log(Object.values(tinder_user));
// console.log(Object.entries(tinder_user));
// console.log(tinder_user.hasOwnProperty('Name'));//to check the key is present or not

//object destructuring:
const course = {
    title:"javaSricpt2.0",
    price:999,
    courseInstructor: "chai aur code",
}

// console.log(course.courseInstructor);

const {courseInstructor : mentor,title} = course; //destructure
console.log(mentor);



