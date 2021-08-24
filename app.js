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

// random name
function randomName() {
    var names = prompt("Please enter names separated by commas");
    var namesArray = names.split(",");
    var randomName = namesArray[Math.floor(Math.random()*namesArray.length)];
    console.log(randomName);
}

//json Parse
function jsonParse() {
    var jsonObject = {};
    var givenString = `'{"hi": "there", "hello": "mate", "'sup": "yo"}'`;
    var useful = givenString.slice(2, givenString.length-1)
    jsonObject = Object(useful);
    console.log(jsonObject);
}
jsonParse();


//json Stringify
function objectStringify() {
    objectString = "'{";
    var givenObject = {"hi": "there", "hello": "mate", "'sup": "yo"};
    for(var i = 0; i < Object.keys(givenObject).length; i++) {
        objectString += '"' + Object.keys(givenObject)[i] + '"' + ": " + '"' +  givenObject[Object.keys(givenObject)[i]] + '"';
        if (i != Object.keys(givenObject).length-1) {
            objectString += ', ';
        }
    }
    objectString += "}'";
    console.log(objectString);
}
objectStringify();