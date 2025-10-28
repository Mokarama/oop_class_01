//Getter & Setter

class product{

    set SetPrice(value){
        this.price=value;
    }
    get GetPrice(){
        return this.price;
    }
}

let productObj=new product();
productObj.SetPrice=100;

console.log(productObj)
console.log(productObj.GetPrice);

