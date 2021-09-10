function insert(num){
    let res = document.getElementById('resultado')
    res.innerHTML += num
} //Esta função chama todos os numeros da calculadora

function erase(){
    let res = document.getElementById('resultado')
    res.innerHTML = ''
} //Esta função zera a calculadora

function backSpace(){
    let res = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = res.substring(0, res.length -1);
}//Esta função apaga um numero da calculadora por ver

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    } //Esta é a função de calculos
}
