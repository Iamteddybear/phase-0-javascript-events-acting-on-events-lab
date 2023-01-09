// Your code here
let dodger = document.getElementById("dodger");
console.log(dodger);

document.addEventListener("keydown", function (target) {
    console.log(target);

    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    

    if (target.key === "ArrowLeft" && left >= 10) {
        dodger.style.left = `${left - 10}px`;
    }

    if (target.key === "ArrowRight" && left <= 350) {
        dodger.style.left = `${left + 10}px`;
    }
});
moveDodgerLeft(left)