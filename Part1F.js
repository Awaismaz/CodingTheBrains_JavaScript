//Types of For loops:
//1. To iterate a code block n times
//2. for/in for looping through elements in object
//3. for/of for looping over array

//For general syntax

//for (initialization; condition; increment) {
//      Block of Code
//}

//Initialization is executed at start of first loop
//condition is checked at end of each iteration
//increment is executed at the end of each iteration

for (var x=1; x<11; x=x+1){
    if (x%2==0){
        console.log("Value of x:" + x)
    }
}

var s="Hello World"

for (i=0; i<s.length; i++){
    console.log(s[i]);
}
