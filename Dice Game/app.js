//dice roll
function roll() {
	setTimeout(function () {
		var rollp1 = Math.floor(Math.random() * 6) + 1;
		var rollp2 = Math.floor(Math.random() * 6) + 1;

		if (rollp1 === rollp2) {
			document.querySelector("#winner").innerHTML = "Draw!";
		}
		else if (rollp1 < rollp2) {
			document.querySelector("#winner").innerHTML = "Player 2 WINS!";
		}
		else {
			document.querySelector("#winner").innerHTML = "Player 1 WINS!";
		}
        document.querySelector("#p1score").innerHTML = rollp1;
        document.querySelector("#p2score").innerHTML = rollp2;
	}, 1000);
}