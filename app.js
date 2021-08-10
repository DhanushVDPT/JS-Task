// leap year function
function leapYear() {
    var year = prompt("Please enter a year");
    if (year%4 == 0) {
        if (year%100 != 0) {
            document.getElementById("result").innerHTML = `${year} is a leap year`;
        }
        else if (year%100 == 0 && year%400 == 0) {
            document.getElementById("result").innerHTML = `${year} is a leap year`;
        }
        else {
            document.getElementById("result").innerHTML = `${year} is not a leap year`;
        }
    }
    else {
        document.getElementById("result").innerHTML = `${year} is not a leap year`
    }
}


// Fibonacci generator function
function fibGen() {
    var n = Number(prompt("Please enter the number of terms you want"));
    var starter = 0;
    var number = 0;
    var prev_number = 0;
    var dummy;
    var series = "";
    if (n == 1) {
        document.getElementById("series").innerHTML = `Series: ${starter}`;
    }
    else {
        for(var i=0; i<n; i++) {
            dummy = number;
            if (i == 1) {
                number = 1;
            }
            number += prev_number;
            prev_number = dummy;
            series += number + " ";
        }
        document.getElementById("series").innerHTML = "Check Console"
        console.log(`Series: ${series}`);
    }
}