//Buttons variables
let clearBtn = document.querySelector(".clear-btn");
let backspaceBtn = document.querySelector(".delete-btn");
let equalBtn = document.querySelector(".equal");
let operationBtn = Array.from(document.querySelectorAll(".operation"));
let numsBtn = Array.from(document.querySelectorAll(".nums"));
let calcDispaly = document.getElementById("display");


// Global variables
let tempNumber = 0;
let tempOperation = "";
let number1 = 0;
let number2 = 0;
let operation = "";
let displayArray = [];
let result = "";

//Clear variables values
function emptyVariables(){
    displayArray = [];
    tempNumber = 0;
    number1 = 0;
    number2 = 0;
    tempNumber = 0;
    tempOperation = "";
    operation = "";
    
}

// Clear function
clearBtn.addEventListener("click", clearContent);
function clearContent(){
    calcDispaly.innerHTML = "";
    emptyVariables();
    result = "";
}

//Delete function
backspaceBtn.addEventListener("click",backspc);
function backspc(){
    displayArray.pop();
    calcDispaly.innerHTML = displayArray.join('');
}

// Get result after equal       
equalBtn.addEventListener("click",getResult);

function getResult(){
    number2 = parseInt(displayArray.join(''));
    result = Calc(operation,number1,number2);
    
    if (result.toString().length > 6){
        calcDispaly.innerHTML = ("=" + result.toExponential(1));
    }
    else{
        calcDispaly.innerHTML = ("=" + result);
    }
    
    emptyVariables();
}

// Numbers buttons
numsBtn.map( button => {
    button.addEventListener("click", (e) => {
        
        if( operation === ""){
           result=""
       }

        if(displayArray.length < 6){
            displayArray.push(e.target.innerText);
            calcDispaly.innerText = displayArray.join('');
        }
        }
    );
});


//Operators buttons
operationBtn.map( button => {
    button.addEventListener("click", (e) => { 
        tempOperation = e.target.innerText;

        // if array is empty assign zero
        if(result != "")
        {
            tempNumber = result;
        }
        
        else if (displayArray === undefined || displayArray.length == 0) {
            tempNumber = 0;
        }
        else
        {

            tempNumber = parseInt(displayArray.join(''));
        }
        
        //check for previous operation
        if(operation !== ""){
            number1 = Calc(operation,number1,tempNumber);
        }
        else{
            number1 = tempNumber;
        }

        displayArray = [];
        operation = tempOperation;
        calcDispaly.innerText = operation;
        }
    );
});


//Calculator function
function Calc(oper,a,b){
    switch (oper){
        case "+": return a + b;
        case "-": return a - b;  
        case "x": return a * b; 
        case "÷": return a / b;
        default: return "unknown operation";             
    }
}

