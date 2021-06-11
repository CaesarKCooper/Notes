function showStringExample() {
const String = "String"
document.getElementById("String").innerHTML = String;
}

function showIndexStringExample() {
const String = "String"
document.getElementById("Character").innerHTML = String.charAt(0);
}

function showSplitStringExample() {
const String = "String"
const splitString = String.split("")
document.getElementById("Split").innerHTML = splitString ;
}

function showUppercaseStringExample() {
const String = "String"
document.getElementById("Uppercase").innerHTML = String.toUpperCase();
}

function showConvertDataTypeExample() {
let number = 2001;
number = String(number)
document.getElementById("ConvertData").innerHTML = typeof number;
}