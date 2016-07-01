#Number.prototype.toExponential()

All JavaScript objects inherit properties and methods from their prototype called Object.prototype. In this case, Number is the object and .toExponential() is the method that is inherited from the Number object prototype.

.toExponential() will return a number in exponential notation as a string. By default, .toExponential() will express the result with as many fraction digits (number of digits after decimal point) as the original number but you can set any number of digits after the decimal point.

.toExponential() is written as:

```
numberObject.toExponential(digits);

```
The *digits* is the number of digits after the decimal point and is optional.

.toExponential() will throw 2 types of errors:

1. *RangeError* is when digits is either less than 0 (zero) or greater than 20.
2. *TypeError* is when .toExponential() is called on a non-number

**Examples**

```
var num1 = 0.000052345678;
num1.toExponential(); // "5.2345678e-5"
num1.toExponential(3); // "5.234e-5"

var num2 = 3398763.89;
num2.toExponential(); // "3.39876389e+6"
num2.toExponential(2); // "3.40e+6"
num2.toExponential(120); //Uncaught RangeError: toExponential() argument must be between 0 and 20(…)

var str = "hello";
str.toExponential(); // Uncaught TypeError: str.toExponential is not a function(…)

```







```


