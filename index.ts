import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js";

let totalBalance:number = 12000;
const pinNumber:number = 2006;

let pinEntered = await inquirer.prompt(
    [
        {
            name: "pin",
             message: " Enter your pin number",
             type:"number", 
      }
    ]
)
if(pinEntered.pin == pinNumber){
    let atmQuestion = await inquirer.prompt([
        {
            name: "account type",
            message:"enter your account type",
            type:'list',
            choices: 
            [
                "current account",
                "saving account",
            ]
        },
        {
            name:"transMethod",
            message:" Select your transaction method",
            type:'list',
            choices:[
                "cash withdrawl",
                "fast cash",
            ]
        },
    ]);
 if( atmQuestion.transMethod == "cash withdrawl")
 {
    let cashwithdrawlAmount = await inquirer.prompt([
        {
            name:'withdrawl',
            message:'enter the amount you want to with draw',
            type:'number',

        }

    ]);
    if(totalBalance >= cashwithdrawlAmount.withdrawl)
        {
            totalBalance -= cashwithdrawlAmount.withdrawl
            console.log(`your total balance :${totalBalance}` )
        }
        else(
            console.log('insufficient balance')
        )

    }
    else{
        let fastcashAmount = await inquirer.prompt(
            [
                {
                    name:`fast cash`,
                    message:'select the amount you want to withdraw',
                    type: 'list',
                    choices:[
                        "1000",
                        "3000",
                        "5000",
                    ]
                }
                
            
                
            ]
        )
        if(totalBalance >= fastcashAmount.fastcash){
            totalBalance -= fastcashAmount.fastcash
            console.log(`your total balance is :${totalBalance}`)
        }
        else(
            console.log('insufficient balance')
        )

        
    }
}
      
