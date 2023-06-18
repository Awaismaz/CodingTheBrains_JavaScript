
//JSON = JavaScript Object Notation
var vehicleInfo = {
    make: "Toyota", 
    year: 2011, 
    model: "Prius"
}

vehicleInfo['make']

vehicleInfo['year']

var mess = { 
    a: "hello", 
    b: ['x','y','z'] , 
    c: {'inside': [ 4 ,5, ["weird"]]}
};

mess['c']['inside'][2][0]

vehicleInfo['year']

vehicleInfo['year']=2012

vehicleInfo['year']+=1

console.dir(vehicleInfo)

for (var x in vehicleInfo){
    // console.log(x)
    console.log(x + ": " + vehicleInfo[x])
}


var vehicleInfo = {
    make: "Toyota", 
    year: 2011, 
    model: "Prius",
    updateyear: function(){ //Define a Method
        alert("Year Updated")
    }
}

vehicleInfo.updateyear() //call a Method


var vehicleInfo = {
    make: "Toyota", 
    year: 2011, 
    model: "Prius",
    updateyear: function(new_year){ //Define a Method
        this.year=new_year;
        alert("Year Updated to " + this.year)
    }
}

vehicleInfo.updateyear(2013)




