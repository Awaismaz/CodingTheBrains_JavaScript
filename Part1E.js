// while (condition){
//     # Code executed here
//     # while condition is true
// }

var x=0
while (x<5){
    console.log("Value of x:" + x)
    x=x+1;
}

//How to break while loop

while (true){
    var x=prompt("Enter a Number")
    if (x>10) {
        break;
    }
}

// QUICK EXERCISE

// Write a while loop that prints 
// out only the even numbers from 
// 1 to 10.

var x=1
while (x<11){

    if (x%2==0){
        console.log("Value of x:" + x)
    }
    
    x=x+1;
}

