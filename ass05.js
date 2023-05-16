
/* -----------------------ASSIGNMENT 05 -------------------------------- */

/* ===========QUESTION NO 01 =============*/

/* var a = 3;
var b = 5;
var sum = a + b;
document.write(`The sum of 3 and 5 is ${sum}`); */

/* ===========QUESTION NO 02 =============*/

/* var a = 3;
var b = 5;
var subtraction = a - b;
document.write(`The difference of 3 and 5 is ${subtraction} <br><br>`);*/

/* var a = 3;
var b = 5;
var multiplication = a * b;
document.write(`The multiplication of 3 and 5 is ${multiplication} <br><br>`); */

/* var a = 3;
var b = 5;
var division = a / b;
document.write(`The division of 3 and 5 is ${division}  <br><br>`); */

/* var a = 3;
var b = 5;
var modulus = a % b;
document.write(`The modulus of 3 and 5 is ${modulus}  <br><br>`); */

/* ===========QUESTION NO 03 =============*/

/* // a. Declare a variable.

var a;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.

document.write('Value after variable declaration is : ' + a + "<br><br>");

// c. Initialize the variable with some number.

var a = 5;

// d. Show the value of variable in your browser like “Initial
// value: 5”.

document.write('Initial value : ' + a + "<br><br>");

// e. Increment the variable.

a++;

// f. Show the value of variable in your browser like “Value after increment is: 6”.

document.write('Value after increment is: ' + a + "<br><br>");

// g. Add 7 to the variable.

var sum = a + 7;

// h. Show the value of variable in your browser like “Value after addition is: 13”.

document.write("Value after addition is: " + sum + "<br><br>" );

// i. Decrement the variable

sum--;

// j. Show the value of variable in your browser like “Value after decrement is: 12”.

document.write("Value after decrement is: " + sum + "<br><br>" )

// k. Show the remainder after dividing the variable’s value by 3.

var remainder = sum % 3;

// l. Output : “The remainder is : 0”.

document.write("The remainder is: " + remainder); */


/* ===========QUESTION NO 04 =============*/

/* var ticketPrice = 600;
document.write(`Total cost to buy 5 tickets to a movie is ${ticketPrice*5} PKR`)  */

/* ===========QUESTION NO 05 =============*/


/* var digit = 4;

document.write("<h3> MULTIPLICATION TABLE OF MY FAVORITE DIGIT IS " + digit + "</h3>");

for(var i = 1; i <= 10; i++){
    var final = digit * i;
    document.write(digit + "  x  " + i + "  =  " + final + "<br>");
} */


/* ===========QUESTION NO 06 =============*/

/* var celsiusTemperature = 25;

var convertedFahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
document.write(celsiusTemperature + "°C is " + convertedFahrenheitTemperature + "°F<br><br>");

var fahrenheitTemperature = 70;

var convertedCelsiusTemperature = (fahrenheitTemperature - 32) * 5/9;
document.write(fahrenheitTemperature + "°F is " + convertedCelsiusTemperature + "°C<br>"); */

/* ===========QUESTION NO 07 =============*/

/* document.write("<h1>Shopping Cart</h1>");
// a. Price of item 1

var priceOfItem1 = 650;
document.write(`Price of Item 1 is ${priceOfItem1} <br><br>`);

// b. Price of item 2

var priceOfItem2 = 100;
document.write(`Price of Item 2 is ${priceOfItem2} <br><br>`);

// c. Ordered quantity of item 1

var orderedQuantityOfItem1 = 3;
document.write(` Ordered quantity of Item 1 is ${orderedQuantityOfItem1} <br><br>`);

// d. Ordered Quantity of item 2
var orderedQuantityOfItem2 = 7;
document.write(` Ordered quantity of Item 2 is ${orderedQuantityOfItem2} <br><br><br>`);

// e. Shipping charges

var shippingCharges = 100;

var totalCostOfOrder = priceOfItem1*3 + priceOfItem2*7 + shippingCharges;
document.write(`Total cost of your order is ${totalCostOfOrder} `);  */


/* ===========QUESTION NO 08 =============*/

/* document.write("<h1>Marks Sheet </h1> <br><br>");

var marksObtained = 804;
document.write(`Marks Obtained : ${marksObtained}<br><br>`);

var totalMarks = 980;
document.write(`Total Marks : ${totalMarks}<br><br>`);

var percentage = (marksObtained/totalMarks) * 100;
document.write(`Percentage : ${percentage} % <br><br>`); */

/* ===========QUESTION NO 09 =============*/

/* document.write("<h1>Currency In PKR </h1> <br><br>");

var dollars = 10;
var riyals = 25;
var totalCurrencyInPkr =10*104.80 + 25*28;
document.write(`Total currency in Pkr is ${totalCurrencyInPkr}`); */


/* ===========QUESTION NO 10 =============*/

/* var myFavNum = 3;
var total = ((myFavNum + 5) * 10) / 2;
document.write(`Total is: ${total}`); */

/* ===========QUESTION NO 11 =============*/

/* document.write("<h1>Age Calculator </h1> <br><br>");

// a. Store the current year in a variable
var currentYear = new Date().getFullYear();
document.write(`Current Year: ${currentYear}<br><br>`)

// b. Store their birth year in a variable
var birthYear = 1999;
document.write(`Birth Year: ${birthYear}<br><br>`)

// c. Calculate their 2 possible ages based on the stored values
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Output the ages to the screen
document.write("Your age is: " + age1 + " or " + age2); */

/* ===========QUESTION NO 12 =============*/

/* document.write("<h1>The Geometrizer </h1> <br><br>");

// a. Store a radius into a variable.

var radius = 20;
document.write(`Radius of circle : ${radius} <br><br>`);

// b. Calculate the circumference based on the radius, and output “The circumference is NN”.

var circumference = 2*3.142*radius;
document.write(`The circumference is : ${circumference} <br><br>`);

// c. Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142

var area = 3.142*20*20;
document.write(`The area is : ${area} <br><br>`);
 */

/* ===========QUESTION NO 13 =============*/

/* document.write("<h1>The Lifetime Supply Calculator </h1> <br><br>");

// a. Store your favorite snack into a variable
var favSnack = 'chocolateChip';
document.write(`Favorite snack: ${favSnack} <br><br>`);

// b. Store your current age into a variable
var currentAge = 15;
document.write(`Current age: ${currentAge} <br><br>`);

// c. Store a maximum age into a variable.
var maxAge = 65;
document.write(`Estimated maximum age: ${maxAge} <br><br>`);

// d. Store an estimated amount per day (as a number).
var estPerDay = 3;
document.write(`Amount of snack per day: ${estPerDay} <br><br>`);

// e. Calculate how many you would eat total for the rest of your life
var remTime = maxAge - currentAge;
var totalAmount = remTime *  estPerDay;

// Output the result
document.write(`You will need ${totalAmount} ${favSnack} to last you until the ripe old age of 65`); */



