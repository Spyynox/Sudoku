var t0 = performance.now();

let sudoku = [
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 6, 0, 0, 0, 0, 0],
    [0, 7, 0, 0, 9, 0, 2, 0, 0],
    [0, 5, 0, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 4, 5, 7, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 3, 0],
    [0, 0, 1, 0, 0, 0, 0, 6, 8],
    [0, 0, 8, 5, 0, 0, 0, 1, 0],
    [0, 9, 0, 0, 0, 0, 4, 0, 0],
]
function sudokuRules(sudoku) {
    sudoku.forEach((y, i) => {
        line = []
        y.forEach((v, index) => {
            if (index % 1 == 0) line.push("|")
            line.push(v)
        })
        console.log(line.join(""))
    })
    return true
}

function sudokuResolver(sudoku, y, x, n) {
    for (let i = 0; i < 9; i++) {
        if (sudoku[y][i] == n) {
            return false
        }
    }
    for (let i = 0; i < 9; i++) {
        if (sudoku[i][x] == n) {
            return false
        }
    }
    x0 = Math.floor(x / 3) * 3
    y0 = Math.floor(y / 3) * 3
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (sudoku[y0 + i][x0 + j] == n) {
                return false
            }
        }
    }

    return true
}
let solution = 0
function solve(sudoku) {
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            if (sudoku[y][x] == 0) {
                for (let n = 1; n < 10; n++) {
                    if (sudokuResolver(sudoku, y, x, n)) {
                        sudoku[y][x] = n
                        solve(sudoku)
                        sudoku[y][x] = 0
                    }
                }
                return
            }
        }
    }

    sudokuRules(sudoku)
}
solve(sudoku)

var t1 = performance.now();
var progress = document.getElementById('progress')
progress.innerHTML = "Le sudoku a pris " + (t1 - t0) + " ms."
console.log("Le sudoku a pris " + (t1 - t0) + " ms.")
console.log("Le sudoku a pris " + t1 + " ms.") 