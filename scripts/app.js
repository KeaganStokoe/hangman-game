const puzzleEl = document.querySelector('#puzzle')
const guessesRemainingEl = document.querySelector('#guessesRemaining')

let game 

window.addEventListener('keypress', (e) => {
    const guess = e.key
    game.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessesRemainingEl.textContent = game.statusMessage

    game.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })

}

const startGame = async () => {
    const puzzle = await newPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

startGame()

document.querySelector('#reset').addEventListener('click', startGame)




