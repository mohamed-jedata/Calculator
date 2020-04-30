
var op ;
var result ;


function click1(){
    document.getElementById('result').value+="1";
}
function click2(){
    document.getElementById('result').value+="2";
}
function click3(){
    document.getElementById('result').value+="3";
}
function click4(){
    document.getElementById('result').value+="4";
}
function click5(){
    document.getElementById('result').value+="5";
}
function click6(){
    document.getElementById('result').value+="6";
}
function click7(){
    document.getElementById('result').value+="7";
}
function click8(){
    document.getElementById('result').value+="8";
}
function click9(){
    document.getElementById('result').value+="9";
}
function click0(){
    document.getElementById('result').value+="0";
}

function Clear(){
    document.getElementById('result').value="";
  }

function Addition(){
result = Number(document.getElementById('result').value);
document.getElementById('result').value="";
op = '+';

}

function  Sous() {
    result = Number(document.getElementById('result').value);
    document.getElementById('result').value="";
    op = '-';
  }

function Product(){
    result = Number(document.getElementById('result').value);
    document.getElementById('result').value="";
    op = '*';
}

function Division(){
    result = Number(document.getElementById('result').value);
    document.getElementById('result').value="";
    op = '/';
}

function Equal(){
 
    switch (op) {
        case '+':
            result += Number(document.getElementById('result').value);
            document.getElementById('result').value = result;
            break;
        case '-':
            result -= Number(document.getElementById('result').value);
            document.getElementById('result').value = result;
            break;
        case '/':
            result /= Number(document.getElementById('result').value);
            document.getElementById('result').value = result;
           break;
        case '*':
            result *= Number(document.getElementById('result').value);
            document.getElementById('result').value = result;
        break;
        default:
            break;
    }

}

