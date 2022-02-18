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
                    setTimeout(function() {test();}, 500);
                    
                    pcTile(gameTile);
                    PC.play(pcChoice);
                    setTimeout(function() {board.createBoard()}, 500);
                });
            gameBoard.appendChild(gameTile);
                }
        }
    };
    // 1  2  3
    // 4  5  6
    // 7  8  9
    //TEST LOGIC 
    function test() {
        let current= game.board['array'];
        function end(){
            player.winner = true;
            alert('player wins');
            board.array = ['','','','','','','','','']
            board.createBoard();
        }
        if (current[0] == 'x' && current[1] == 'x' && current[2] == 'x') {
            end();
        }
        if (current[3] == 'x' && current[4] == 'x' && current[5] == 'x') {
            end();
        }
        if (current[6] == 'x' && current[7] == 'x' && current[8] == 'x') {
            end();
        }
        if (current[2] == 'x' && current[4] == 'x' && current[6] == 'x') {
            end();
        }
        if (current[0] == 'x' && current[4] == 'x' && current[8] == 'x') {
            end();
        }
        if (current[0] == 'x' && current[3] == 'x' && current[6] == 'x') {
            end();
        }
        if (current[1] == 'x' && current[4] == 'x' && current[7] == 'x') {
            end();
        }
        if (current[2] == 'x' && current[5] == 'x' && current[9] == 'x') {
            end();
        }
    }
    // Random PC Logic 
    function pcTile(gameTile) {
        if (player.winner == false){
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
    } else {
        //don't play if the game is over
        pcChoice = undefined;
    }
    }
    //create first blank array
    board.createBoard();
    //RESET BUTTON
    const reset = document.querySelector('.reset')
    reset.addEventListener('click', function(){
        board.array = ['','','','','','','','','']
        board.createBoard();
    })
    //CREATE PLAYER OBJECTS
    const makePlayer = (name, marker) => {
        let winner = false;
        const play = (gameTile) => {
            player.winner = false;
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
            winner,
            play
        }
    }
    //CREATE PC PLAYER WITH PC LOGIC
    const computer = () => {
        const prototype = makePlayer('PC', 'o');
        const choseTile = () => pcTile(gameTile);
        return Object.assign({}, prototype, {choseTile});
    };
    //PLAYERS TO BE CREATED
    const PC = computer('PC', 'o');
    const player = makePlayer ('Tre', 'x');
    return {
        board
    };
})();