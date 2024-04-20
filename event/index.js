let a = Number(document.getElementsByClassName('clicked')[0].innerHTML);
additional =(aa)=>{
    aa += 1;
    return aa
}
clicker = () => {
    a = additional(a)
    console.log(a);
    document.getElementsByClassName('clicked')[0].innerHTML = a;
}

