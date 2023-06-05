// In JavaScript, functions follow this general form:
// (parameters are also commonly called arguments)

function name(parameter1, parameter2, parameter3) {
    //code to be executed
}

// Simple function with no input parameters
function hello(){
    console.log("hello world!");
}

//Fetch complete function object
hello

//Call Function
hello();

function hellome(name){
    console.log("Hello "+name);
}

hellome("Awais")

// EXAMPLE
function addNum(num1,num2){
    console.log(num1+num2);
}
addNum(30,20)

adNum() //Will Throw error

// Default parameters
function addNum(num1=0,num2=0){
    console.log(num1+num2);
}
addNum()

addNum(10)
addNum(10,5)


// Without Return
function formal(name="Sam",title="Sir"){
    console.log(title+" "+name)
}

"Welcome" + formal()

function formal(name="Sam",title="Sir"){
    return (title+" "+name)
}

"Welcome " + formal()

//Variable Scope

function times2(num){
    var result = num *2;
    return result
}

times2(4)

//Global Variable

var result=2;

function times2(num){
    result = num *2;
    return result
}

times2(4)




