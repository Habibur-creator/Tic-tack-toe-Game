let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-button");
let msg = document.querySelector("#msg");
let msgContiner = document.querySelector(".msg-container");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContiner.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
            box.style.color = "#081b31";
        } else {
            box.innerText = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
});

const disableBoxes = () => {
    for (box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContiner.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let patarn of winPatterns) {

        let pos1Val = boxes[patarn[0]].innerText;
        let pos2Val = boxes[patarn[1]].innerText;
        let pos3Val = boxes[patarn[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val == pos2Val && pos2Val == pos3Val){
                showWinner(pos1Val);
            }
        }

    }
}

newGameBtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);

