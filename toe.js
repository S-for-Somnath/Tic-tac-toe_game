let boxes = document.querySelectorAll(".box");
let resetB = document.querySelector("#resetg");
let resetB2 = document.querySelector('#newg');
let turnO = true;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    document.getElementById("winner-msg").innerText = `Winner is ${winner}!`;
    document.getElementById("popup").style.display = "flex";
    

    disableBoxes();
};

const checkWinner = () => {
    for (const pattern of winPattern) {
        let pv1 = boxes[pattern[0]].innerText;
        let pv2 = boxes[pattern[1]].innerText;
        let pv3 = boxes[pattern[2]].innerText;

        if (pv1 !== "" && pv2 !== "" && pv3 !== "") {
            if (pv1 === pv2 && pv2 === pv3) {
                showWinner(pv1);
                return;
            }
        }
    }


    const isDraw = [...boxes].every(box => box.innerText !== "");
    if (isDraw) {
        document.getElementById("winner-msg").innerText = "It's a Draw!";
        document.getElementById("popup").style.display = "block";
    }
};

const closePopup = () => {
    document.getElementById("popup").style.display = "none";
};


const resetGame = () => {
    enableBoxes();
    turnO = true;
    document.getElementById("popup").style.display = "none";
};

resetB.addEventListener("click", resetGame);
resetB2.addEventListener("click", resetGame);


