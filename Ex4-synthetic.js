function showInfoSquare(){
    let numb_a=document.getElementById("numb_a").value;
    let perimeterSquare=numb_a*4;
    let areaSquare=Math.pow(numb_a,2);
    document.getElementById("result").innerText=("Độ dài hình vuông cạnh a là:"+numb_a+"\n"+
        "Chu vi hình vuông là :"+perimeterSquare+"\n"+
        "Diện tích hình vuông là :"+areaSquare)

}
function showSquareTwoNumber(){
    let numb_a=document.getElementById("numb_a").value;
    let numb_b=document.getElementById("numb_b").value;
    let squareNumberA=Math.pow(numb_a,2);
    let squareNumberB=Math.pow(numb_b,2);
    document.getElementById("result").innerText=("Bình phương của a là:"+squareNumberA
    +"\n"+ "Bình phương của b là:"+squareNumberB)

}

function ShowCentury(){
    let numb_a=document.getElementById("numb_a").value;

}
function SumArray(){
    let numb_a=document.getElementById("numb_a").value;
    let numb_b=document.getElementById("numb_b").value;
    
}