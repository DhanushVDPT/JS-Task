document.addEventListener('DOMContentLoaded', () => {
    function roll() {
        diceNums = [1, 2, 3, 4, 5 , 6];
        var num = diceNums[Math.floor(Math.random()*diceNums.length)];
        return num;
    }

    let scores = [];
    let p1clicks = 0;
    let p2clicks = 0;

    function roll1() {
        p1clicks += 1;
        console.log(p1clicks);
        var p1 = document.getElementById("p1score");
        var p1Roll = roll();
        p1.innerHTML = p1Roll;
        scores[0] = p1Roll;
    }

    function roll2() {
        p2clicks += 1;
        console.log(p2clicks);
        var p2 = document.getElementById("p2score");
        var p2Roll = roll();
        p2.innerHTML = p2Roll;
        scores[1] = p2Roll;
    }

    var p1btn = document.getElementById('p1roll-btn');
    var p2btn = document.getElementById('p2roll-btn');
    p1btn.addEventListener('click', roll1);
    p2btn.addEventListener('click', roll2);

    var game = document.getElementsByClassName('game-grid');
    game.addEventListener('click', () => {
        if(p1clicks==1 && p2clicks==1){
            console.log(scores);
            if(scores[0] > scores[1]) {
                document.getElementById('winner').innerHTML = 'Player 1 Wins!';
            }
            else if (scores[1] == scores[0]) {
                document.getElementById('winner').innerHTML = 'Draw';
            }
            else{
                document.getElementById('winner').innerHTML = 'Player 2 Wins!';
            }
        }
    })
})