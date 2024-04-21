let colorwidget = document.getElementById('background');
let widthwidget = document.getElementById('width');
let heightwidget = document.getElementById('height');
let optionsWidget = document.getElem
let setButton = document.getElementById('set');


setButton.addEventListener('click', set);
function set () {
    let classes = []
    function looping(option){
        for (i=0; i<option.length; i++) {
            console.log(option[i].getAttribute('value'));
        }
    };
   looping(optionsWidget)
   console.log(classes);
};