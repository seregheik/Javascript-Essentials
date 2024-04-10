// console.log( "Hello world" );

// console.log( 200 );

// console.log( true );

// console.log( null );

// var num = 10;

// console.log( num );

// console.log( "string", 10.11, true, false, null, num );

function makeCoffee( sugar, milk) {
    var instructions = "Boil water,"
    
    instructions += " pour into cup, ";
    instructions +=  " add coffee granules, ";
    instructions +=  " add " + sugar + " spoons of sugar, ";	
    instructions +=  " add " + milk + "% milk. ";	

    return instructions;
}

console.log( makeCoffee( 2, 20 ) );

var car = {
    color: "red",
    speed: 200,
    drive: function () {return "drive"}
}

var shoppingList = [
    "apple",
    "banana",
    "orange",
    "mango",
    "kiwi",
    "pineapple"	
];