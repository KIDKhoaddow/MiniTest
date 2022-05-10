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
function sumArray(){
    let numb_a=document.getElementById("numb_a").value;
    let numb_b=document.getElementById("numb_b").value;
    let NumbEquivalent= (numb_b==numb_a);
    let Greater=numb_a<numb_b;
    let Smaller=numb_a>numb_b;
    let result;
    if(NumbEquivalent){
        document.getElementById("result").innerText=("Tổng các số từ a->b là : "+numb_a);
    }
    else if(Greater){
        let num=numb_b-numb_a+1;
        result=numb_a*(num)+(num-1)*num/2;
        document.getElementById("result").innerText=(result);
    }
    else {
        let num=numb_a-numb_b+1;
        result=numb_b*(num)+(num-1)*num/2;
        document.getElementById("result").innerText=(result);
    }

}
function showCentury(){
    let year=document.getElementById("numb_a").value;
    let century=parseInt(year/100) ;
    document.getElementById("result").innerText=century;
}

function checkTriagle(){
    let Edge_a=parseFloat(document.getElementById("numb_a").value);
    let Edge_b=parseFloat(document.getElementById("numb_b").value);
    let Edge_c=parseFloat(document.getElementById("numb_c").value);

    let isTriagle=((Edge_a+Edge_b)>Edge_c) && ((Edge_c+Edge_b)>Edge_a) && ((Edge_a+Edge_c)>Edge_b);

    let isEquilateralTriangle=(Edge_a==Edge_b)&&(Edge_b==Edge_c);

    let isIsoscelesTriangle=(Edge_a==Edge_b)||(Edge_a==Edge_c)||(Edge_b==Edge_c);
    let isRightAngledTriangle=((Math.pow(Edge_a,2)+Math.pow(Edge_b,2))==Math.pow(Edge_c,2)||
                                (Math.pow(Edge_c,2)+Math.pow(Edge_b,2))==Math.pow(Edge_a,2)||
                                (Math.pow(Edge_c,2)+Math.pow(Edge_a,2))==Math.pow(Edge_b,2));
    if(isTriagle){
        if(isEquilateralTriangle){
            document.getElementById("result").innerText="Đây là tam giác đều";
        }
        else if(isIsoscelesTriangle){
            document.getElementById("result").innerText="Đây là tam giác cân";
        }
        else if(isRightAngledTriangle){
            document.getElementById("result").innerText="Đây là tam giác Vuông";

        }
        else{
            document.getElementById("result").innerText="Đây là tam giác ";
        }
    }
    else{
        document.getElementById("result").innerText="Đây không phải là tam giác";

    }
}