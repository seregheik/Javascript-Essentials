var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons:[
            { maker: "BMW" },
            { maker: "BMW2" }
        ]
    },
    drive: function(){ return "dive"; }
};

var array = [ 
    "string",
    100,
    [ "embed", 200 ],
    { car: "ford" },
    function(){ return "dive"; }
];

car.model = 'osasere'

console.log(car);
delete car.model
console.log(car)
// console.log(car['make'])
// console.log(car['engine']['pistons'][0]['maker'])