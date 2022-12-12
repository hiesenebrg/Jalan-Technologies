const prompt = require("prompt-sync")();


let total_bill= 0;
class cofeemaker{
    constructor( coffee){
        let total = 0;
        let coffeeMenu =  {
            Espresso: {
              milk: 60, 
              cream: 75, 
              latte: 100
              },
            Cappuccino: {
              milk: 80, 
              cream: 90, 
              latte: 125 
              },
            Latte: {
              milk: 100, 
              cream: 125, 
              latte: 150
              }
          }
         
        console.log(`${coffee} is Selected`);
        console.log("Please Enter the add-On from the Add-On list");
        
        for(let keys in coffeeMenu){
            if(keys === `${coffee}`){
                console.log(`${JSON.stringify(coffeeMenu[keys])}`)
                total+=coffeeMenu[keys]["milk"] +coffeeMenu[keys]["cream"]+coffeeMenu[keys]["latte"];
                console.log(`Your base price for ${coffee} is ${total}`);
                let select = prompt("To add Ad-On please Press 1 for Milk , 2 for Cream and 3 for latte and 4 for go back: ")
                while(select!=4){
                if(select==1){
                    total +=coffeeMenu[keys]["milk"];
                    console.log("Item Milk Seleceted")
                }
                else if(select==2){
                    total +=coffeeMenu[keys]["cream"];
                    console.log("Item Cream Seleceted")
                }else if (select==3){
                    total +=coffeeMenu[keys]["latte"];
                    
                    console.log("Item Latte Seleceted")
                }
                
                else{
                    console.log("No Add-on Selected")
                }
                console.log(`Total bill is ${total}`);
                select = prompt("To add Ad-On please Press 1 for Milk , 2 for Cream and 3 for latte and 4 for go back: ")
            }
        }
        }
        total_bill+=total;
        
    }
}

function cofee(nos){
    let i =0;
    while(nos!=0){
        i+=1;
        console.log(`Select Cofee and Add-On for Person ${i}`)

console.log(`Please select the coffee from Espresso , Cappuccino and Latte`)
let input = prompt("Please Enter 1 for Espresso , 2 for Cappuccino and 3 for Latte : ")
if(input==1) new cofeemaker("Espresso");
if(input==2) new cofeemaker(`Cappuccino`);
if(input==3) new cofeemaker(`Latte`);

nos-=1;
    }
}
console.log(`Welcome to CoffeMaker, Hope This coffee makes your day`);
let nos = prompt("please eneter the number of cups : ")
cofee(nos);
console.log(`Total bill is ${total_bill}`);


