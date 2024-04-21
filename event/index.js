var number = document.createElement('div');

var clickerer = document.getElementsByClassName('cars')[0]

var clickererr = document.getElementsByClassName('cars') 
console.log(clickererr)
clickerer.addEventListener('click', function () {
    let htmlNum = document.getElementsByClassName('clicked')[0];
    counter = Number(htmlNum.innerHTML)
    counter += 1
    htmlNum.innerHTML = counter
});

