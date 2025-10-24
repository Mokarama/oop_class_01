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
console.log(person.getName())