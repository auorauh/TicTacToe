const game = (() => {
    const board = {
        name: 'Gameboard',
        array: ['','','','','','','','',''],
        createBoard: function() {
            // CREATE BOARD
            const gameBoard = document.querySelector('.board');
                while (gameBoard.firstChild) {
                    gameBoard.removeChild(gameBoard.firstChild);
                }
                for (let i = 0; i < board.array.length; i++) {
                    const gameTile = document.createElement('div');
                    gameTile.classList.add('tile');
                    gameTile.innerText = board.array[i];
                    gameTile.id = i+1;
                    gameTile.classList.add()
            // PLAY GAME LOGIC
                gameTile.addEventListener('click', function(){
                    player.play(gameTile);
                    board.createBoard();
                    pcTile(gameTile);
                    PC.play(pcChoice);
                    setTimeout(function() {board.createBoard()}, 500);
                });
            gameBoard.appendChild(gameTile);
                }
        }
    };
    function pcTile(gameTile) {
        const gameBoard = document.querySelector('.board');
        let choice = Math.floor(Math.random() * 9);
        let limit = 0;
        let valid = false;
        function num() {
            let choice = Math.floor(Math.random() * 9);
            pcChoice = (gameBoard.children [choice]);
            limit++
            if (limit == 20) {
                alert('PC "Rage Quit" Please Refesh')
                valid = true;
            }
        }
        pcChoice = (gameBoard.children [choice]);
        while(!valid){   
        if (pcChoice.innerText == 'x' || pcChoice.innerText == 'o' || gameTile.innerText == 'x' || gameTile.innerText == 'o'){
            console.log(pcChoice)
            num();
        } else {
            valid = true;
            return {pcChoice};
        }
    }
        // if (pcChoice == gameTile) {
        //     pcChoice = (gameBoard.children [choice + 1]);
        // } else if (pcChoice == gameTile && choice == 9) {
        //     pcChoice = (gameBoard.children [choice - 1]);
        // }
    }
    board.createBoard();
    const reset = document.querySelector('.reset')
    reset.addEventListener('click', function(){
        board.array = ['','','','','','','','','']
        board.createBoard();
    })
    const makePlayer = (name, marker) => {
        const play = (gameTile) => {
            let position = game.board['array'];
            if (position[gameTile.id-1] == 'x' || position[gameTile.id-1] ==  'o') {
                //do nothing
            } else {
                position[gameTile.id-1] = marker;
            }
        }
        return {
            name,
            marker,
            play
        }
    }
    const computer = () => {
        const prototype = makePlayer('PC', 'o');
        const choseTile = () => pcTile(gameTile);
        return Object.assign({}, prototype, {choseTile});
    };
    const PC = computer('PC', 'o');
    const player = makePlayer ('Tre', 'x');
    return {
        board
    };
})();



// 1  2  3
// 4  5  6
// 7  8  9
