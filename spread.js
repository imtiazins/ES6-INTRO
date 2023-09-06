// এ্যরে বা অবজেক্ট নিয়ে সাধারনত spread  কাজ করা হয় 

const max = Math.max ( 32,3,545,7657,333,2);
const number = [32,3,545,7657,333,2];
// const arrayMax = Math.max (...number); এ্যারে থেকে max  বের করাতে চাইলে এর আগে  ...  ৩ ডটস  ইউজ করতে হয়   
const arrayMax = Math.max (...number);  


console.log(arrayMax);
console.log(max);



//   use spread operator to copy

const friends = [ 4,6,7,8,43,76];
const bondhu =friends ;
const dosto = [...friends]
console.log(dosto);
console.log(friends);

const sonkha =[...friends ,555]
console.log(sonkha);