//Object toyeri kora - By using an Object Constructor


function person(){
    this.first_name="Shanta";
    this.last_name="Mim";
    this.age=34;
    this.city="Dhaka";
    this.isBangladeshi=true;

    this.getName=()=>{
        return `My full name is ${this.first_name} ${this.last_name}`
    }
}

let personInstance= new person();

console.log(personInstance)
console.log(personInstance.getName())