//name: Kobe Fox
//project: JS 1-10
//date: 10/24/2017 (should be -20% if turned in past 10/23, but I do have a 504 plan...can that apply for one day 10/23-10/24?
function sleep_in(weekday,vacation) {
    if (weekday == false || vacation == true) {
        return true;
    }
    if (weekday == true && vacation == false) {
        return false;
    }
    if (weekday == false && vacation == false) {
        return true;
    }
    if(weekday == true && vacation == true) {
        return true;
    }
}

function monkey_trouble(a_smile, b_smile) {
    if (a_smile === true && b_smile === true) {
        return true;
    }else if (a_smile === false && b_smile === false) {
        return true;
    }else{
        return false;
    }
}

function string_times(str , int) {
    var x = "";
    if (int > 0) {
        for (var i = 0; i < int; i++) {
            x +=str;
        }
        return x;
    }else{
        return 0;
    }
}

function front_times(str , int) {
    var x = "";
    str = str.substring(0,3);
    if (int > 0) {
        for (var i = 0; i < int; i++) {
            x += str;
        }
        return x;
    }else{
        return 0;
    }
}

function string_bits (str){
    var x ="";
    for (var i = 0; i< str.length; i+= 2) {
        x += str[i];
    }
    return x;
}

function caughtSpeeding(spd , birthday){
    if (birthday === false){
        if (spd <= 60){
            return 0;
        }
        if (80 >= spd && spd >= 60 ){
            return 1;
        }
        if (spd >= 81){
            return 2;
        }
    }else{
        if (spd <= 65 ) {
            return 0;
        }
        if (spd <= 85 ){
            return 1;
        }
    }
}

function fizz_buzz (num) {
    if (num % 5 === 0 && num % 3 === 0){
        return "FizzBuzz";
    }
    if (num % 3 === 0){
        return "Fizz";
    }
    if (num % 5 === 0){
        return "Buzz";
    }
    if (num % 5 !== 0 && num % 3 !== 0){
        return num + "!";
    }
}

function tea_party (candy , tea) {
    if (candy < 5 || tea < 5) {
        return 0;
    }else if (candy >= 2* tea || tea >=candy *2){
        return 2;
    }else{
        return 1;
    }
}

function blackjack (hand1, hand2) {
    if (hand1 > 21 && hand2 > 21) {
        return 0;
    }
    if (hand1 > 21 && hand2 < 21){
        return hand2;
    }
    if (hand2 > 21 && hand1 <21){
        return hand1;
    }
    if (hand1 > hand2) {
        return hand1;
    }
    if (hand2 > hand1){
        return hand2;
    }
    if (hand1 === 21){
        return hand1;
    }
    if (hand2 === 21){
        return hand2;
    }
}

function loneSum(a,b,c){
    if (a !== b && a !== c && b !== c) {
        var sum = a + b + c;
        return sum;
    }
    if (a === b && a === c && b === c){
        return 0;
    }
    if (a === b){
        return c;
    }
    if (a === c){
        return b;
    }
    if (b === c){
        return a;
    }
}


function tester() {
    document.getElementById("output").innerHTML = sleep_in(true, false);
    document.getElementById("output").innerHTML = monkey_trouble(true, false);
    document.getElementById("output").innerHTML = string_times(true, false);
    document.getElementById("output").innerHTML = front_times(true, false);
    document.getElementById("output").innerHTML = string_bits(true, false);
    document.getElementById("output").innerHTML = caughtSpeeding(true, false);
    document.getElementById("output").innerHTML = fizz_buzz(true, false);
    document.getElementById("output").innerHTML = tea_party(true, false);
    document.getElementById("output").innerHTML = blackjack(true, false);
    document.getElementById("output").innerHTML = loneSum(true, false);
}

