//Class

class person{
    first_name="Shanta";
    last_name="Mim";
    age=43;
    isBangladeshi=true;
    city="Dhaka";

    getName(){
        return `My name is ${this.first_name} ${this.last_name}`
    }
}

let personObj=new person();
// console.log(personObj.city)




//class redecliear

class person1{
    first_name="Taslima";
    last_name="Nasrin";
    city="Dhaka";
    isBangladeshi=true;
    age=32;

    getName(){
        `My first name ${this.first_name} ${this.last_name}`
    }
}

let personObj1=new person1();
console.log(personObj1);
console.log(personObj1.first_name);