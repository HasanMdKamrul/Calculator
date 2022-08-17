// ** get input value

const getInputValue = (id) =>{
    const inputField = document.getElementById(id);
    const inputValueString = inputField.value;
    const value = parseFloat(inputValueString);

    return value;
}

// ** get arithmatic operator 

const getArithmaticOperators = (id) =>{
    const inputField = document.getElementById(id);
    const inputValueString = inputField.value;

    return inputValueString;
}

// ** getTextValue 

const getTextValue = (id)=>{
    const inputTextField = document.getElementById(id);
    const inputValueString = inputTextField.innerText;

    return inputValueString;
}

// ** set display value

const setDisplayValue = (id,value)=>{
    const displayField = document.getElementById(id);
    displayField.innerText = value;
}

// ** addition 

const operationResult = (operator,input1,input2)=>{ 

    if ( operator === '+') {
        const total = input1 + input2;

        return total;

    } else if ( operator === '-'){
        const total = input1 - input2;

        return total;
    } else if ( operator === '*'){
        const total = input1 * input2;

        return total;
    } else if ( operator === '/'){
        const total = input1 / input2;

        return total;
    } else if ( operator === '%'){
        const total = input1 % input2;

        return total;
    }
}
