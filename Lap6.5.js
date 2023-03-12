function whileDemo(input){

    let totalSum = 0;
    let index = 0;
    let currentInput = input[index];

    while (currentInput !== "NoMoreMoney"  ){

        let inputAsNumber = Number(currentInput);

        if (inputAsNumber < 0){
            console.log("Invalid operation!");break;
        } else { 
            totalSum += inputAsNumber;
            console.log(`Increase: ${inputAsNumber.toFixed(2)}`);

        }
    index++;
    currentInput = input[index]
    }

    console.log(`Total: ${totalSum.toFixed(2)}`);




}

whileDemo (["120","45.55","-150"])
