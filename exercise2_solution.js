///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
var x=0
while (x<5){

    console.log("hello")
    
    x=x+1;
}

// For Loop


for (var x=0; x<5; x=x+1){

    console.log("hello");
    
}




/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
var x=1
while (x<26){

    if (x%2!=0){
        console.log("Value of x:" + x)
    }
    
    x=x+1;
}


// METHOD TWO
// For Loop


for (var x=1; x<26; x=x+1){

    if (x%2!=0){
        console.log("Value of x:" + x);
    }
    
}