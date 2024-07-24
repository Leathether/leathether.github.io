//This is the javascript for the calculator

const element = document.getElementById("output");
var num1 = 0;
var num2 = 0;
var power = 0;
var sign = "!";
var dot = false;

// These are soley for the zero function

var zeros = 0;
var inBox = String; 












function oneFunction(){
    if(dot == false){ 
        if(sign == "!"){
                num1 = num1*10+1;
                element.innerHTML = num1;
        } else {
            num2 = num2*10+1;
            element.innerHTML = num1 + " " + sign + " " + num2;
        }
    } else {
        zeros = 0;
        if(sign == "!"){
                power = power - 1;
                num1 = num1 + Math.pow(10, power)*1;
                element.innerHTML = num1;
            } else {
                power = power - 1;
                num2 = num2 + Math.pow(10, power)*1;
                element.innerHTML = num1 + " " + sign + " " + num2;
        }
    }   
};










function twoFunction(){
    if(dot == false){
        if(sign == "!"){
            num1 = num1*10+2;
            console.log(num1);
            element.innerHTML = num1;
        } else {
            num2 = num2*10+2;
            console.log(num2);
            element.innerHTML = num1 + " " + sign + " " + num2;
        }
    } else {
        zeros = 0;
        if(sign == "!"){
                power = power - 1;
                num1 = num1 + Math.pow(10, power)*2;
                console.log(num1);
                element.innerHTML = num1;
        } else {
                power = power - 1;
                num2 = num2 + Math.pow(10, power)*2;
                console.log(num2);
                element.innerHTML = num1 + " " + sign + " " + num2;
        
        }
    }
};












function threeFunction(){
    if(dot == false){
        if(sign == "!"){
            num1 = num1*10+3;
            console.log(num1);
            element.innerHTML = num1;
        } else {
            num2 = num2*10+3;
            console.log(num2);
            element.innerHTML = num1 + " " + sign + " " + num2;
        }
    } else {
        zeros = 0;
        if(sign == "!"){
                power = power - 1;
                num1 = num1 + Math.pow(10, power)*3;
                console.log(num1);
                element.innerHTML = num1;
        } else {
                power = power - 1;
                num2 = num2 + Math.pow(10, power)*3;
                console.log(num2);
                element.innerHTML = num1 + " " + sign + " " + num2;
        }
    }
};







function subtractFunction(){
    if(sign == "!"){
        sign = "-";
        element.innerHTML = num1 + " " + sign;
        power = 0;
        dot = false;
        zeros = 0;
    }
}
















function fourFunction() {
    if(dot == false){
        if(sign == "!"){
            num1 = num1*10+4;
            element.innerHTML = num1;
        } else {
            num2 = num2*10+4;
            element.innerHTML = num1 + " " + sign + " " + num2;
        } 
    } else {
        zeros = 0;
        if(sign == "!"){
            power = power - 1;
            num1 = num1 + Math.pow(10, power)*4;
            element.innerHTML = num1;
        } else {
            power = power - 1;
            num2 = num2 + Math.pow(10, power)*4;
            element.innerHTML = num1 + " " + sign + " " + num2;
        }
    }
};
















function fiveFunction(){
    if(dot == false){
        if(sign == "!"){
            num1 = num1*10+5
            element.innerHTML = num1;
        } else {
            num2 = num2*10+5;
            element.innerHTML = num1 + " " + sign + " " + num2;
        } 
    } else {
        zeros = 0;
        if(sign == "!"){
            power = power - 1;
            num1 = num1 + Math.pow(10, power)*5;
            element.innerHTML = num1;
        } else {
            power = power - 1;
            num2 = num2 + Math.pow(10, power)*5;
            element.innerHTML = num1 + " " + sign + " " + num2;
        }
    
    }
};















function sixFunction(){
    if(dot == false){
        if(sign == "!"){
            num1 = num1*10+6;
            element.innerHTML = num1;
        } else {
            num2 = num2*10+6;
            console.log(num2);
            element.innerHTML = num1 + " " + sign + " " + num2;
        }
    } else {
        zeros = 0;
        if(sign == "!"){
                power = power - 1;
                num1 = num1 + Math.pow(10, power)*6;
                element.innerHTML = num1;
        } else {
                power = power - 1;
                num2 = num2 + Math.pow(10, power)*6;;
                element.innerHTML = num1 + " " + sign + " " + num2;
        }
    }
};








function multiplyFunction(){
    if(sign == "!"){
        sign = "*"
        element.innerHTML = num1 + " " + sign;
        power = 0;
        dot = false;
        zeros = 0;
    }
}

















function sevenFunction() {
    if(dot == false){
        if(sign == "!"){
            num1 = num1*10+7;
            element.innerHTML = num1;
        } else {
            num2 = num2*10+7;
            element.innerHTML = num1 + " " + sign + " " + num2;
        }
    } else {
        zeros = 0;
        if(sign == "!"){
            power = power - 1;
            num1 = num1 + Math.pow(10, power)*7;
            element.innerHTML = num1;
        } else {
            power = power - 1;
            num2 = num2 + Math.pow(10, power)*7;
            element.innerHTML = num1 + " " + sign + " " + num2;
        }
    }   
};













function eightFunction() {
    if(dot == false){
        if(sign == "!"){
            num1 = num1*10+8;
            element.innerHTML = num1;
        } else {
            num2 = num2*10+8;
            element.innerHTML = num1 + " " + sign + " " + num2;
        }
    } else {
        zeros = 0;
        if(sign == "!"){
            power = power - 1;
            num1 = num1 + Math.pow(10, power)*8;
            element.innerHTML = num1;
        } else {
            power = power - 1;
            num2 = num2 + Math.pow(10, power)*8;
            element.innerHTML = num1 + " " + sign + " " + num2;
        }
    }
};









function nineFunction() {
    if(dot == false){
        if(sign == "!"){
            num1 = num1*10+9;
            element.innerHTML = num1;
        } else {
            num2 = num2*10+9;
            element.innerHTML = num1 + " " + sign + " " + num2;
        }
    } else {
        zeros = 0;
        if(sign == "!"){
            power = power - 1;
            num1 = num1 + Math.pow(10, power)*9;
            element.innerHTML = num1
        } else {
            power = power - 1;
            num2 = num2 + Math.pow(10, power)*9;
            element.innerHTML = num1 + " " + sign + " " + num2;
        }
    }
};





















function divideFunction(){
    if(sign == "!"){
    sign = "/";
    element.innerHTML = num1 + " " + sign;
    power = 0;
    dot = false;
    zeros = 0;
    }
}





function equalsFunction(){
    var answer = 0;
    if(sign == "/"){
        answer = num1 / num2;
        element.innerHTML = num1 + " / " + num2 + " = " + answer;
        num1 = answer;
        num2 = 0;
        sign = "!";
    } else if(sign == "*") {
        answer = num1 * num2;
        element.innerHTML = num1 + " * " + num2 + " = " + answer;
        num1 = answer;
        num2 = 0;
        sign = "!";
    } else if(sign == "-") {
        answer = num1 - num2;
        element.innerHTML = num1 + " - " + num2 + " = " + answer;
        num1 = answer;
        num2 = 0;
        sign = "!";
    } else if(sign == "+") {
        answer = num1 + num2;
        element.innerHTML = num1 + " + " + num2 + " = " + answer;
        num1 = answer;
        num2 = 0;
        sign = "!";
    } 
}















function zeroFunction() {
    if(dot == false){
        if(sign != "/" && sign != "*" && sign != "-" && sign != "+"){
                num1 = num1*10;
                element.innerHTML = num1;
        } else {
                num2 = num2*10
                element.innerHTML = num1 + " " + sign + " " + num2;
        }
    } else {
        zeros = zeros + 1;
        var zerosTemp = zeros;
        console.log(zeros);
        if(sign != "/" && sign != "*" && sign != "-" && sign != "+"){
            power = power - 1
            inBox = num1;
            if(num1 % 1 == 0){
                inBox = inBox + ".";
            } while(zerosTemp > 0){
                inBox = inBox + "0";
                zerosTemp = zerosTemp - 1;
            }
            element.innerHTML = inBox;
        } else {
            power = power - 1
            inBox = num1 + " " + sign + " " + num2;
            if(num2 % 1 == 0){
                inBox = inBox + ".";
            } while(zerosTemp > 0){
                inBox = inBox + "0";
                zerosTemp = zerosTemp - 1;
            }
            element.innerHTML = inBox;
        }
    }
}










function dotFunction(){
    dot = true;
}



function addFunction(){
    if(sign == "!"){
        sign = "+";
        element.innerHTML = num1 + " " + sign;
        power = 0;
        dot = false;
        zeros = 0;
    }
}