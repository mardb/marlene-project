//1. setting age to MY current age
let myAge = 15;

//2. dog's early years

let earlyYears = 2;
//step 3
earlyYears *= 10.5;

//Step 4
//this is my age minus the first two years
let laterYears = myAge -= 2;

//Step 5 
//this is my age in dog years minus the early years
laterYears *= 4;
// console.log(laterYears)
// console.log(earlyYears)

//early years  plus later years is equivalent to my total dog years
let myAgeInDogYears = earlyYears + laterYears
console.log(myAgeInDogYears )

//my name in lowercase
let name = 'Marlene';

let myName = name.toLowerCase(name)
console.log(myName)

//Using string interpolation to displayy a sentence with the values
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
