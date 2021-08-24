var images = ["./images/dice-01.svg", "./images/dice-02.svg", "./images/dice-03.svg", "./images/dice-04.svg", "./images/dice-05.svg", "./images/dice-06.svg"];
var dice = document.querySelectorAll("img");

//dice roll
function roll() {
	dice.forEach(function(die){
        die.classList.add("shake");
    });
	setTimeout(function () {
		dice.forEach(function(die){
            die.classList.remove("shake");
        });
		var rollp1 = Math.floor(Math.random() * 6) + 1;
		var rollp2 = Math.floor(Math.random() * 6) + 1;
		document.querySelector("#die-1").setAttribute("src", images[rollp1-1]);
        document.querySelector("#die-2").setAttribute("src", images[rollp2-1]);

		if (rollp1 === rollp2) {
			document.querySelector("#winner").innerHTML = "DRAW!";
		}
		else if (rollp1 > rollp2) {
			document.querySelector("#winner").innerHTML = "PLAYER 1 WINS!";
		}
		else {
			document.querySelector("#winner").innerHTML = "PLAYER 2 WINS!";
		}
        document.querySelector("#p1score").innerHTML = rollp1;
        document.querySelector("#p2score").innerHTML = rollp2;
	}, 1000);
}

roll();