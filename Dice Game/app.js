//dice roll
function roll() {
	setTimeout(() => {
		var rollp1 = Math.floor(Math.random() * 6) + 1;
		var rollp2 = Math.floor(Math.random() * 6) + 1;

		// dice simulation
		var diceOne = document.getElementById('dice1');
		var diceTwo = document.getElementById('dice2');

		for (var i = 1; i <= 6; i++) {
			diceOne.classList.remove('show-' + i);
			if (rollp1 === i) {
				diceOne.classList.add('show-' + i);
			}
		}
		for (var k = 1; k <= 6; k++) {
			diceTwo.classList.remove('show-' + k);
			if (rollp2 === k) {
				diceTwo.classList.add('show-' + k);
			}
		}

		if (rollp1 === rollp2) {
			document.querySelector("#winner").innerHTML = "Draw!";
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