#Number.prototype.toExponential()


All JavaScript objects inherit properties and methods from their prototype called Object.prototype. In this case, Number is the object and .toExponential() is the method that is inherited from the Number object prototype.

.toExponential() will express a number in exponential notation. By default, .toExponential() will express the result with as many fraction digits (number of digits after decimal point) as the original number but you can set any number of digits after the decimal point.

```
0.000052345678.toExponential() // 5.2345678e-5
0.000052345678.toExponential(3) // 5.234e-5

```


