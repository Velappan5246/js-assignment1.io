let str1 = 'Today is';
let str2 = '      a beautiful day     '
let str3 = ' In Hawaii.     '

let t1 = str1.trim()
let t2 = str2.trim()
let t3 = str3.trim()

let result = `'${t1} ${t2} ${t3}'`;

strconcat();

function strconcat() {
    let content = ""

    content += `
    <tr>
        <td>${str1}</td>
        <td>${str2}</td>
        <td>${str3}</td>
        <td>${result}</td>
    </tr>
    `
    document.getElementById("strconcat").innerHTML = content;
}


//  ============== Question 1 =====================

document.getElementById("btn1").addEventListener("click", function(){
    let enteredAlphabet = document.getElementById("str").value;

    let reenter = enteredAlphabet.toLocaleLowerCase();


    if (isNaN(reenter)) {
        let result = checkVowelOrNot (reenter)
        document.getElementById("result1").innerHTML = result;
    } else {
        document.getElementById("result1").innerHTML = "It is a Number";
    }

});

function checkVowelOrNot (str) {
    let output = "";
    switch (str) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            output += `It is a vowel`
            break;
    
        default:
            output += `It is a consonant`
            break;
    }
    return output;
}


// ======== Question 2 ===================


let calbtn = document.getElementsByClassName("calculate");




for (let i = 0; i < calbtn.length; i++) {
    calbtn[i].addEventListener('click', function(e){
        e.preventDefault();
        let resultCal = '';
        let data = calbtn[i].getAttribute("data-cal")  
        resultCal += calculation(data);
        document.getElementById("result2").innerHTML = resultCal;
    });
}


function calculation(data) {
    let result = '';
    let number1 = document.getElementById("number1").value;

    let number2 = document.getElementById("number2").value;

    

    switch (data) {
        case "add":
            result = parseInt(number1) + parseInt(number2);
            break;

        case "sub":
            result = parseInt(number1) - parseInt(number2)
            break;
            
        case "mul":
            result = parseInt(number1) * parseInt(number2)
            break;
        case "div":
            result = parseInt(number1) / parseInt(number2)
            break;
        default:
            result = parseInt(number1) + parseInt(number2)
            break;
    }

    console.log(result);
    return  result ;
}

document.getElementById('clk').addEventListener('click',checkTriangle)


function checkTriangle() {

    let a = document.getElementById('num_1').value;
    let b = document.getElementById('num_2').value;
    let c = document.getElementById('num_3').value;
    let result = document.getElementById('result3')


    if(a == b == c) {
        result.innerHTML = 'It is Equilateral Triangle'
    }else if (a==b || a==c || b==c){
        result.innerHTML = 'It is Isosceles Triangle'
    }else {
        result.innerHTML = 'It is Scalene Triangle'
    }

}


document.getElementById('bill').addEventListener('click',checkBill)
function checkBill () {
    let bill;
    let enterUnit = document.getElementById('unit').value;

    if (enterUnit <= 50) {
        bill = enterUnit * 0.5;
    }else if (enterUnit > 50 && enterUnit <= 150){
        bill = (50 * 0.5) + (enterUnit - 50) * 0.75;
    }else if(enterUnit > 150 && enterUnit <= 250){
        bill = (50 * 0.5) + (100 * 0.75) + (enterUnit - 150) * 1.2;
    }else {
        bill = (50 * 0.5) + (100 * 0.75) + (100 * 1.2) + (enterUnit - 250) * 1.5;
        bill += bill * 0.2;
    }

    document.getElementById('result4').innerHTML = bill;
}