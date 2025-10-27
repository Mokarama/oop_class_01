

//By creating instance of object 

let person=Object();
person.first_name="shanta";
person.last_name="Mim";
person.age=34;
person.city="Dhaka";
person.isBang=true;

person.getName=()=>{
    return `My Full name is ${person.first_name}`
}
console.log(person.getName());


let person2=Object();

person2.first_name="Shanta";
person2.last_name="Mim";
person2.age=34;
person2.isMuslim=true;
person2.getName=()=>{
    return  `My full name is ${first_name} ${last_name}`
}

console.log(person2)


const person3=Object();
person3.name='Maisha';
person3.isMuslim=true;
person3.getName=()=>{
    return `${person3.name} ${person3.isMuslim}`
}