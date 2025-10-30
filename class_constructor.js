
class person{

    constructor(){
        console.log("I am Constructor method")
    }
}

let personObj=new person();

//constructor paramiter diye kivabe property change kora jay
/*** 
 * 
 
class person1{
    num1=20;
    num2=10;

    constructor(a,b){
        this.num1=a;
        this.num2=b;
    }

    addTwoNum(){
        return this.num1+this.num2;
    }
}

let personObj1=new person1(50, 50);
console.log(personObj1.addTwoNum());

* 
 */

class person2{

    num3=10;
    num4=40;

    constructor(a, b){
        this.num3=a;
        this.num4=b;
    }
    addToNumber(){
        return this.num3*this.num4;
    }
}

let person2Obj=new person2(5, 5);
console.log(person2Obj.addToNumber())