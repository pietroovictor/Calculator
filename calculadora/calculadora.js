function insert(num){
    let res = document.getElementById('resultado')
    res.innerHTML += num
}

function erase(){
    let res = document.getElementById('resultado')
    res.innerHTML = ''
}

function backSpace(){
    let res = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = res.substring(0, res.length -1);
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}