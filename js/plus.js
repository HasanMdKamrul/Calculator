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