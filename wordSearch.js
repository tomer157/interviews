/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board.length === 0) return false;

  let r = board.length;
  let col = board[0].length;
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const dfs = (x, y, k) => {
    if (board[x][y] !== word[k]) {
      return false;
    }

    if (k === word.length - 1) {
      return true;
    }

    board[x][y] = '*';
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;

      if (i >= 0 && i < r && j >= 0 && j < col) {
        if (dfs(i, j, k + 1)) {
          return true;
        }
      }
    }

    board[x][y] = word[k];
    return false;
  };

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < col; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  'ABCB'
);
