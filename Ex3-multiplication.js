
function Multiplication(){
    let number_a=parseFloat(document.getElementById("number-a").value) ;
    let number_b=parseFloat(document.getElementById("number-b").value) ;
    let result=number_a*number_b;
    document.getElementById("outResult").innerText=result;
}
