var result = document.getElementById("result");
var clear = document.getElementById("clear");

var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var divide = document.getElementById("divide");

var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var multiply = document.getElementById("multiply");

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var minus = document.getElementById("minus");

var zero = document.getElementById("zero");
var dot = document.getElementById("dot");
var equalTo = document.getElementById("equalTo");
var plus = document.getElementById("plus");

seven.addEventListener("click", function () {
  result.value += "7";
});

eight.addEventListener("click", function () {
  result.value += "8";
});

nine.addEventListener("click", function () {
  result.value += "9";
});

divide.addEventListener("click", function () {
  result.value += "/";
});

four.addEventListener("click", function () {
  result.value += "4";
});

five.addEventListener("click", function () {
  result.value += "5";
});

six.addEventListener("click", function () {
  result.value += "6";
});

multiply.addEventListener("click", function () {
  result.value += "*";
});

one.addEventListener("click", function () {
  result.value += "1";
});

two.addEventListener("click", function () {
  result.value += "2";
});

three.addEventListener("click", function () {
  result.value += "3";
});

minus.addEventListener("click", function () {
  result.value += "-";
});

zero.addEventListener("click", function () {
  result.value += "0";
});

dot.addEventListener("click", function () {
  result.value += ".";
});

equalTo.addEventListener("click", function () {
  result.value = eval(result.value);
});

plus.addEventListener("click", function () {
  result.value += "+";
});

clear.addEventListener("click", function () {
  result.value = "";
});
