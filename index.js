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
console.log(person)