// Any method with element will return a single object.
// Any method with elements will return an array.

// console.log( document.getElementsByTagName('p') );

// console.log( document.getElementById('hello') );

// console.log( document.getElementsByClassName('pClass') );

// console.log( 
//     document.querySelectorAll( 
//         ' p[data-content="123"], body > h1.pClass > span '
//     ) 
// );



// function classtextchanger(classname, newtext){
//     document.getElementById(classname).innerText = newtext;
// }

// classtextchanger('hello', 'hi')

// console.log(classtextchanger);

var styleme = document.getElementById('styleme');

styleme.style.background = 'red';
styleme.style.color = 'white';

console.log(getComputedStyle(styleme))