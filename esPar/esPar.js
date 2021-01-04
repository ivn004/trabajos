function numero(num){
    if(num !== 0){
    return num % 2 == 0 ? "El número ingresado es par" : "El número ingresado es impar"
 }else{
     return "ERR"
 }
}
console.log(numero(5))