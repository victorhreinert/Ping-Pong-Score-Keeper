const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const button1 = document.querySelector('#p1Button');
const button2 = document.querySelector('#p2Button');
const button3 = document.querySelector('#reset');

const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;

let winningScore = 3;
let isGameOver = false;

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score
    p2Display.textContent = p2Score
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');

}
button1.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1Score;
    }

});


button2.addEventListener('click', () => {

    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        p2Display.textContent = p2Score;

    }
});

winningScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(winningScoreSelect.value);
    reset();

});


button3.addEventListener('click', reset);