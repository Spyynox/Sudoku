var time = (new Date()).getTime();
const puzzle = [
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 6, 0, 0, 0, 0, 0],
    [0, 7, 0, 0, 9, 0, 2, 0, 0],
    [0, 5, 0, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 4, 5, 7, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 3, 0],
    [0, 0, 1, 0, 0, 0, 0, 6, 8],
    [0, 0, 8, 5, 0, 0, 0, 1, 0],
    [0, 9, 0, 0, 0, 0, 4, 0, 0]
];

// noBack = (board, y, x, n) => {
//     for (let i = 0; i < 9; i++) {
//         if (board[y][i] === n || board[i][x] === n) {
//             return false;
//         }
//     }

//     const axeX = Math.floor(x / 3) * 3;
//     const axeY = Math.floor(y / 3) * 3;

//     for (let caseX = 0; caseX < 3; caseX++) {
//         for (let caseY = 0; caseY < 3; caseY++) {
//             if (board[axeY + caseY][axeX + caseX] !== n && board[axeY + caseY][axeX + caseX] !== 0) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

sudokuRules = (board, y, x, n) => {
    for (let i = 0; i < 9; i++) {
        if (board[y][i] === n || board[i][x] === n) {
            return false;
        }
    }

    const axeX = Math.floor(x / 3) * 3;
    const axeY = Math.floor(y / 3) * 3;

    for (let caseX = 0; caseX < 3; caseX++) {
        for (let caseY = 0; caseY < 3; caseY++) {
            if (board[axeY + caseY][axeX + caseX] === n) {
                return false;
            }
        }
    }

    return true;
}

sudokuResolver = (board) => {
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            if (board[y][x] === 0) {
                for (let n = 1; n <= 9; n++) {
                    if (sudokuRules(board, y, x, n)) {
                        board[y][x] = n;
                        if (sudokuResolver(board)) {
                            return board;
                        }
                    }
                }
                board[y][x] = 0;
                return false;
            }
        }
    }

    return board;
}
var html = '<table><tbody>';


for (const element of sudokuResolver(puzzle)) {
    html += "<tr>";

    html += "<td>" + element[0] + '</td>';
    html += "<td>" + element[1] + '</td>';
    html += "<td>" + element[2] + '</td>';
    html += "<td>" + element[3] + '</td>';
    html += "<td>" + element[4] + '</td>';
    html += "<td>" + element[5] + '</td>';
    html += "<td>" + element[6] + '</td>';
    html += "<td>" + element[7] + '</td>';
    html += "<td>" + element[8] + '</td>';

    html += "</tr>";
}

html += "</tbody></table>";

document.getElementById("sudoku-resolver").innerHTML = html;

finalTime = new Date().getTime() - time

var time = document.getElementById('time')
time.innerHTML = "Le sudoku a pris " + finalTime + " ms."