var cty1 = "Pakistan"
var cty2 = "China"
var cty3 = "Afghanistan"

var countries = [cty1,cty2,cty3]

var countries =["Pakistan","China","Afghanistan"]

var countries =[
    "Pakistan", //0
    "China", //1
    "Afghanistan" //2
]

console.log(countries[1])

countries[1]

var mixed=[false, 10, "Pakistan"];


mixed.length // in Python len(mixed)

var myArr = ['one','two','three']

var last_element=myArr.pop()

myArr.push("Three")

myArr.push("Four")

myArr.push("Six")

myArr[myArr.length - 1 ] //Get last element

// You can use a classic for loop
var arr = ['A','B','C']

for (var i=0; i<arr.length; i++){
   console.log(arr[i]) 
}


for (var i=0; i<arr.length; i++){
    alert(arr[i]) 
 }

for (letter in arr){
    alert(letter)
}

arr.forEach(alert);


var course = ["python", "javascript","Django"]

function isAwesome(s){
    console.log(s+=" is Awesome")
}

course.forEach(isAwesome);