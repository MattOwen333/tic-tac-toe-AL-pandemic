const gameState = {
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
};

//.reverse()

function renderBoard() {
  $(".board").empty();
  gameState.board.forEach((row, rowIndex) => {
    row.forEach((tile, tileIndex) => {
      //  console.log(tile);
      $(".board").append(
        $(`<div class="cell">${tile !== null ? tile : ""}</div>`)
          .data("tile", tileIndex)
          .data("row", rowIndex)
      );
    });
  });
}

$(document).ready(() => {
  renderBoard();
  $(".reset").click(function() {
    console.log("click");
    gameState.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    renderBoard();
  });
  $(".board").on("click", ".cell", function() {
    const column = $(this).data("tile");
    const row = $(this).data("row");
    gameState.board[row][column] = gameState.players[0];

    //identify  where in the board in the state to  store player $(this).
    // figure out where to assign bracket

    renderBoard();
    console.log(gameState.board);
    checkForWin();
    gameState.players.reverse();
  });
});

function checkForWin() {
  for (let i = 0; i < gameState.board.length; i++) {
    console.log(
      gameState.board[i][0] === gameState.board[i][1] &&
        gameState.board[i][2] === gameState.board[i][1]
    );
    if (
      gameState.board[i][0] === gameState.board[i][1] &&
      gameState.board[i][2] === gameState.board[i][1] &&
      gameState.board[i][0] !== null
    ) {
      alert(gameState.players[0] + " Wins!");
    }
    if (
      gameState.board[0][i] === gameState.board[1][i] &&
      gameState.board[2][i] === gameState.board[1][i] &&
      gameState.board[0][i] !== null
    ) {
      alert(gameState.players[0] + " Wins!");
    }
  }
  if (
    gameState.board[0][0] === gameState.board[1][1] &&
    gameState.board[2][2] === gameState.board[0][0] &&
    gameState.board[0][0] !== null
  ) {
    alert(gameState.players[0] + " Wins!");
  }
  if (
    gameState.board[2][0] == gameState.board[1][1] &&
    gameState.board[0][2] == gameState.board[2][0] &&
    gameState.board[2][0] != null
  ) {
    alert(gameState.players[0] + " Wins!");
  }
}

/*
  start with empty 3x3 grid
      initialize the grid in JS
      render board
  players take turns clicking on grid
      update state/grid in JS
      render board
  first player to get 3 in a row wins
*/

//we need to see if there is a winner
// function to check for winner
//      returns player that won, otherwise returns null
// if board[0][0] !== null and board[0][0] === board[0][1] and board[0][1] === board[0][2]
//      return board[0][0]
// check columns same way
// check diaganols
//     if board[0][0] === board[1][1] === board[2][2]
//          return board[0][0]
// at the end return null

//render

//render
//checkForWin

// allTodos.forEach(todo => {
//   if (todo.isComplete) {
//     createElementFromTodo(todo).appendTo($(".completed-todos"));
//   } else {
//     createElementFromTodo(todo).appendTo($(".pending-todos"));
//   }
// });

// $("main").on("click", ".action.complete", function() {
//   const close = $(this).closest(".todo");
//   const closeData = close.data("todo");
//   closeData.isComplete = true;
//   splitTodos();
//   renderTodos();
// });
