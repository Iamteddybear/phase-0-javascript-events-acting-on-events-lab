// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerLeft(position) {
    if (position >= 0) {
        dodger.style.left = `${position - 10}px`;
    }
}

function moveDodgerRight(position) {
    if (position <= 360) {
        dodger.style.left = `${position + 10}px`;
    }
}

document.addEventListener("keydown", function (target) {
    const leftNumbers = dodger.style.left.replace("px", "");

    const leftPosition = parseInt(leftNumbers, 10);

    if (target.key === "ArrowLeft") {
        moveDodgerLeft(leftPosition);
    }

    if (target.key === "ArrowRight") {
        moveDodgerRight(leftPosition);
    }
});
