//By object literal
//what is object 
//how to write object using object literal
let person ={
    first_name:"Shanta",
    last_name:"Mim",
    age:34,
    city:"Dhaka",
    isBangladeshi:true,
    getName:()=>{
        return `My name is ${person.first_name} ${person.last_name}`
    }
}
console.log(person);

let person2={
    first_name:"Shanta",
    last_name:"Mim",
    age:34,
    isMuslim:true,
    getName:()=>{
        return `My full name is ${person2.first_name} ${person2.last_name}`
    }
}
console.log(person2);
console.log(person2.getName())

let person3={
    first_name:"Shanta",
    last_name:"Mim",
    age:34,
    isMuslim:true,
    getName:()=>{
        return `My full name is ${person2.first_name} ${person2.last_name}`
    }
}
console.log(person3);
console.log(person3.getName())