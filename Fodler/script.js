var a = 10;
document.write("The value of a is: " + a + "<br>");

a = ++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br>");

a = a++;
document.write("The value of a++ is: " + a + "<br>");
a++;
document.write("Now the value of a is: " + a + "<br>");

a = --a;
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br>");

a = a--;
document.write("The value of a-- is: " + a + "<br>");
a--;
document.write("Now the value of a is: " + a + "<br>");

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
--a;     
--b;     
++b;     
b--;    

document.write("a is: " + a + "<br>"); 
document.write("b is: " + b + "<br>"); 
document.write("result is: " + result + "<br>"); 

var userName = prompt("Enter your name:");
alert("Welcome, " + userName + "!");

var tableNumber = prompt("Enter a number for table:", 5); 
tableNumber = tableNumber || 5; 

document.write("<h3>Multiplication Table of " + tableNumber + "</h3>");
for (var i = 1; i <= 10; i++) {
  document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");

var totalMarks = 100;

var mark1 = +prompt("Enter obtained marks for " + sub1 + ":");
var mark2 = +prompt("Enter obtained marks for " + sub2 + ":");
var mark3 = +prompt("Enter obtained marks for " + sub3 + ":");

var totalObtained = mark1 + mark2 + mark3;
var percentage = (totalObtained / (totalMarks * 3)) * 100;

document.write(
  "<table border='1'><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>"
);
document.write("<tr><td>" + sub1 + "</td><td>100</td><td>" + mark1 + "</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>100</td><td>" + mark2 + "</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>100</td><td>" + mark3 + "</td></tr>");
document.write("</table>");
document.write("<h3>Total Marks: 300</h3>");
document.write("<h3>Marks Obtained: " + totalObtained + "</h3>");
document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");
