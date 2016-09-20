//In the space below each problem, write the code to answer. This page connects to index.html

/* 1.--------
 Write the JavaScript to display the current day and time in the following format and output it to the html page to the span with an id of "question-1"
*/

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var theOutput = ("Today is " + daylist[day] + ".");

console.log(theOutput);
document.getElementById('answer1').innerHTMl= theOutput;


var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12)? " PM ":" AM ";

hour = (hour >= 12)? hour - 12: hour;

if (hour===0 && prepand===' PM '){
  if (minute===0 && second===0) {
    hour=12;
    prepand=' Noon';
  }
  else{
    hour=12;
    prepand=' PM';
  }
}

if (hour===0 && prepand===' AM '){
  if (minute===0 && second===0){
    hour=12;
    prepand=' Midnight';
  }
  else{
    hour=12;
    prepand=' AM';
  }
}

//second = (second <=9)? "0" + second: second;
theOutput +=  "<br/>Current Time : " + hour +  ":" + minute + ":" + second + " " + prepand;
console.log(theOutput);
document.getElementById('answer1').innerHTML= theOutput;



//2. ---------//

var day = today.getDate();
day = (day < 10) ? '0' + day : day;
var month = today.getMonth();
month += 1;
month = (month < 10) ? '0' + month : month;
var year = today.getFullYear();
var dashFormat = (month + "-" + day + "-"+ year + "<br>");
var slashFormat = (month + "/" + day + "/"+ year + "<br>");
var dayFormat = (day + "/" + month + "/"+ year);
var theOutput = (dashFormat + slashFormat + dayFormat);

// if (month<10){
//     theOutput = ("0" + month + "-" + day + "-"+ year);
// }
//
// if (day<10){
//     theOutput = (month + "-" + "0" + day + "-"+ year);
// }


console.log(dashFormat);
console.log(slashFormat);
console.log(dayFormat);
document.getElementById('answer2').innerHTML= theOutput;
// document.getElementById('answer2').innerHTML= slashFormat;
// document.getElementById('answer2').innerHTML= dayFormat;



//3. ------//

function printPage() {
    window.print();
}

//4. ---------//

var guessNum = document.getElementById('answer4');
function enterNum() {
    var randomInteger = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    console.log(randomInteger);

    var inputNum = prompt("Enter a number between 1 and 5");

    if (inputNum == randomInteger) {
      alert("Good Work");
    }

    else {
      alert("Not Matched");
    }
}



// function getRandomIntInclusive(1, 5) {
//   min = Math.ceil(1);
//   max = Math.floor(5);
//   return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
