#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 100000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    {
        name: "pin",
        message: "Enter Your Pin Code",
        type: "number",
    }
)

if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code !")

    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"Please Select Option",
                type:"list",
                choices:["Withdraw","Fast Cash", "Deposit","Pay Bills","Check Balance","Cancel Transaction"],
            }
        ]
    );

        if (operationAns.operation === "Withdraw") {
            let amountAns = await inquirer.prompt(
                {
                    name: "amount",
                    message: "Enter Your Amount",
                    type: "number",
                }
            );

            myBalance -= amountAns.amount;

            console.log("Your Remaining Balance: " + myBalance);

        }   else if (operationAns.operation === "Fast Cash") {
                let fastcashAns = await inquirer.prompt(
                    {
                        name: "fastcashamount",
                        message: "Select an Option",
                        type: "list",
                        choices:["1000","3000","5000","10000","25000"],
                    }
                );
                if (fastcashAns.fastcashamount === "1000") {
                    myBalance -= 1000;
                    console.log("Your Remaining Balance: " + myBalance);
                } else if (fastcashAns.fastcashamount === "3000") {
                    myBalance -= 3000;
                    console.log("Your Remaining Balance: " + myBalance);
                } else if (fastcashAns.fastcashamount === "5000") {
                    myBalance -= 5000;
                    console.log("Your Remaining Balance: " + myBalance);
                } else if (fastcashAns.fastcashamount === "10000") {
                    myBalance -= 10000;
                    console.log("Your Remaining Balance: " + myBalance);
                } else if (fastcashAns.fastcashamount === "25000") {
                    myBalance -= 25000;
                    console.log("Your Remaining Balance: " + myBalance);
                } else 
                        {console.log("Invalid Option")}
        }   else if (operationAns.operation === "Deposit") {
                let depositAns = await inquirer.prompt(
                    {
                        name: "depositamount",
                        message: "Enter Your Amount you want to deposit",
                        type: "number",
                    }
                );
                myBalance += depositAns.depositamount;
                console.log("Your Current Balance is: " + myBalance);
        
            }
              else if (operationAns.operation === "Pay Bills") {
                    let paybillsAns = await inquirer.prompt(
                        {
                            name : "paybills",
                            message : "Select Option",
                            type : "list",
                            choices : ["SSGC","K-Electric","Water","Mobile"],
                        }
                    );
                    if (paybillsAns.paybills === "SSGC") {
                        console.log("Your SSGC Billing Amount is 800");
                        let ssgcBillAns = await inquirer.prompt(
                            {
                                name: "ssgcBill",
                                message: "If you want to pay bill now Y/N",
                                type: "list",
                                choices:["Y","N"],
                            }
                        )
        
                            if (ssgcBillAns.ssgcBill === "Y") {
                                myBalance -= 800;
                                console.log("Your Remaining Balance: " + myBalance);
                            } else if (ssgcBillAns.ssgcBill === "N") {
                                console.log("Your Remaining Balance: " + myBalance);
                            }
                        } else if (paybillsAns.paybills === "K-Electric") {
                            console.log("Your K-Electric Billing Amount is 4000");
                            let kelectricBillAns = await inquirer.prompt(
                                {
                                    name: "kelectricBill",
                                    message: "If you want to pay bill now Y/N",
                                    type: "list",
                                    choices:["Y","N"],
                                }
                            )
                            if (kelectricBillAns.kelectricBill === "Y") {
                                myBalance -= 4000;
                                console.log("Your Remaining Balance: " + myBalance);
                            } else if (kelectricBillAns.kelectricBill === "N") {
                                console.log("Your Remaining Balance: " + myBalance);
                            }
                        } else if (paybillsAns.paybills === "Water") {
                            console.log("Your Water Billing Amount is 500");
                            let waterBillAns = await inquirer.prompt(
                                {
                                    name: "waterBill",
                                    message: "If you want to pay bill now Y/N",
                                    type: "list",
                                    choices:["Y","N"],
                                }
                            )
                            if (waterBillAns.waterBill === "Y") {
                                myBalance -= 500;
                                console.log("Your Remaining Balance: " + myBalance);
                            } else if (waterBillAns.waterBill === "N") {
                                console.log("Your Remaining Balance: " + myBalance);
                            }
                        } else if (paybillsAns.paybills === "Mobile") {
                            console.log("Your Mobile Billing Amount is 1500");
                            let mobileBillAns = await inquirer.prompt(
                                {
                                    name: "mobileBill",
                                    message: "If you want to pay bill now Y/N",
                                    type: "list",
                                    choices:["Y","N"],
                                }
                            )
                            if (mobileBillAns.mobileBill === "Y") {
                                myBalance -= 1500;
                                console.log("Your Remaining Balance: " + myBalance);
                            } else if (mobileBillAns.mobileBill === "N") {
                                console.log("Your Remaining Balance: " + myBalance);
                            }
                        } else {console.log("Invalid Option")}
                    
                        
                    }
              
        
           else if (operationAns.operation === "Check Balance") {
            console.log("Your Available Balance is: " + myBalance);
        }
        

        else if (operationAns.operation === "Cancel Transaction") {
            console.log("Transaction Cancelled");
        } else {
            console.log("Invalid Option");
        }
    }    

else {
    console.log("Incorrect Pin Code !")
}
