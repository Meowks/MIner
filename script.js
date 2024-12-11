const gameBtn = document.getElementsByClassName("gameBtn");

// Слушатели событий
gameBtn.addEventListener("click",activeArea);

function activeArea() {
    const field = document.getElementsByName("field");
    gameBtn.innerHTML = "ЗАВЕРШИТЬ ИГРУ";

    gameBtn.style.backgroundColor = "red";

    for (let i = 0; i, field.length; i++){
        setInterval(() => {
            field[i].classList.add("active")
        },20 * 1);
    }
}