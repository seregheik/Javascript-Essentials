//console.log( this );

// var object = {
//     prop: this,
//     embed:
//     {
//         method: function(){ return this; }
//     }
// };

// var array = [
//     this,
//     function(){ return this; }
// ];

// function global(){
//     return this;
// }

// // Normal invokation
// global();
// object.embed.method();
// array[1]();

// // Assign context
// global.call( object );
// object.embed.method.call( object );
// array[1].call( object );

// // New context
// new global();
// new object.embed.method( object );
// new array[1]();

// var object = {
//   prop: 'hi',
//   method: function () {
//     return this;
//   },
// };

// var array = [
//   this,
//   function () {
//     return this;
//   },
// ];

// function global(){
//     return this;
// }

// function Apple (width, height ) {
//   this.width = width;
//   this.height = height;
 
// }

// Apple.prototype =  {
//   color : function () {return "red"},
//   score : function () {return `this is my score`},
// }

var classRegister = ["Osas","John", "Tristan"];

// for (var i = 0; i < classRegister.length; i++){
//   console.log(classRegister[i])
// }

for (var i in classRegister) {
  console.log (classRegister[i])
}