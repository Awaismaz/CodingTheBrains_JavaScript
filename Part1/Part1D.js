//Control Flow (If,Else)
var temp=prompt("What is temperature today?");

if (temp > 30){
    alert("It is hot today!")
}

else if (temp > 10 && temp < 20)
{
    alert("It is pleasant today!")

}
else if (temp > 20 && temp < 30)
{
    alert("It is mild today!")

}

else
{
    alert("It is cold today!")
}