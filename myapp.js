let optionsWidget = document.getElementsByName('cssProperties')
let setButton = document.getElementById('set');
let box = document.getElementById('box');


setButton.addEventListener('click', set);

// console.log(optionsWidget)
function set () {
    function looping(option){
        userValue = []
        for (i=0; i<option.length; i++) {
            console.log(option[i].value);
            userValue.push(option[i].value)
        }
        console.log(userValue)
        box.className = userValue[0];
        box.classList.add(userValue[1]);
        box.classList.add(userValue[2]);
    };
   looping(optionsWidget)
};