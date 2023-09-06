const difference = (x ,y) => x-y;
const multiply = ( one, two , three) => one * two * three;

// single parameter
const getAge = (person ) => person.age;
const student = {
    name:'Ananta Jalil ',
    age: 38
}
const age = getAge(student);
console.log(age);


const getThird = numbers => numbers[2];
const third = getThird([3,44,56,78,23,3,57,6])
console.log(third);


const doubleIt = num => num*2;

// no parameter

const getPI =() =>Math.PI;
console.log(getPI());


// large arrow function . if we wanna get anythings return from this function . then we have to use the return keyword.

const doMath = ( x,y,z)=>{
    const sum = x +y + z;
    const mult = x * y* z;
    const result = sum + mult;
    return result;
}