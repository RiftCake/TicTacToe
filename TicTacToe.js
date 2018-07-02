var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]

  handlClick = function(event) {
      var cell = event.target
      console.log(cell.id)

      cell.innerHTML = currentPlayer;

      if(currentPlayer === "X" ) {
        playerSelections = playerXSelections;
        nextPlayer = "O";
      } else {
        playerSelections = playerOSelections;
        nextPlayer = "X";
      }
    
      playerSelections.push(parseInt(cell.id));
    

      if(checkWinner(playerSelections)) {
        alert("Player " + currentPlayer + " wins!")
        resetGame();
      }
     
    // Swap players
    currentPlayer = nextPlayer;
    }
         var cells = document.querySelectorAll("td");

        for(let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', handlClick)
     }

 
     function checkWinner(){   
         for (let i = 0; i < winningCombinations.length; i++){
              let matches =0;
            for(let j = 0; j < winningCombinations[i].length; j++){
                if(playerSelections.includes(winningCombinations[i][j])){
                    matches++;
                }
                console.log("matches " + matches)
            

            }
            if(matches == 3){
                return true;
            }

        }
    }
    function checkDraw() {
      return playerOSelections.length + playerXSelections.length >= cells.length
    } 
  
    function resetGame() {
      playerXSelections = new Array();
      playerOSelections = new Array();
      for(var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = ""
      }
    }
