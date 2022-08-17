// ** click hobe jekhane button handler seikhane



document.getElementById('result').addEventListener('click', function(){

    // ** Input 1
    const inputOneValue = getInputValue('input-1');

    // ** Input 2

    const inputTwoValue = getInputValue('input-2');

    // console.log(inputTwoValue);

    // ** Arithmatic Operator 

    const operatorValue = getArithmaticOperators('input-3');

   
    // ** Total 

    const total = operationResult(operatorValue,inputOneValue,inputTwoValue);

    // ** set total value to display

    setDisplayValue('display',total);
    
})


    // ** + button click

    document.getElementById('plus').addEventListener('click', function(){
        // const total = inputOneValue + inputTwoValue;
        // console.log(total);

        const inputOneValue = getInputValue('input-1');
        const inputTwoValue = getInputValue('input-2');

        const total = inputOneValue + inputTwoValue;

        // ** setTotal 

        setDisplayValue('display',total)

        
    });

    