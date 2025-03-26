const but1 = document.querySelectorAll(".but");
const check = document.getElementById("win");
let per = 1;
let win = 0;

but1.forEach(but => {
    but.addEventListener('click', function () {
        if (win == 0) {
            if (but.innerHTML === "") {
                if (per == 1) {
                    per = 0;
                    but.innerHTML = "X";
                } else {
                    per = 1;
                    but.innerHTML = "O";
                }
                checkwin();
            }
        }
    });
});

function checkwin() {
    if (but1[0].innerHTML !== "" && but1[0].innerHTML === but1[1].innerHTML && but1[1].innerHTML === but1[2].innerHTML) {
        check.innerHTML = "Win";
        win = 1;
    }
    if (but1[3].innerHTML !== "" && but1[3].innerHTML === but1[4].innerHTML && but1[4].innerHTML === but1[5].innerHTML) {
        check.innerHTML = "Win";
        win = 1;
    }
    if (but1[6].innerHTML !== "" && but1[6].innerHTML === but1[7].innerHTML && but1[7].innerHTML === but1[8].innerHTML) {
        check.innerHTML = "Win";
        win = 1;
    }
    if (but1[0].innerHTML !== "" && but1[0].innerHTML === but1[3].innerHTML && but1[3].innerHTML === but1[6].innerHTML) {
        check.innerHTML = "Win";
        win = 1;
    }
    if (but1[1].innerHTML !== "" && but1[1].innerHTML === but1[4].innerHTML && but1[4].innerHTML === but1[7].innerHTML) {
        check.innerHTML = "Win";
        win = 1;
    }
    if (but1[2].innerHTML !== "" && but1[2].innerHTML === but1[5].innerHTML && but1[5].innerHTML === but1[8].innerHTML) {
        check.innerHTML = "Win";
        win = 1;
    }
    if (but1[0].innerHTML !== "" && but1[0].innerHTML === but1[4].innerHTML && but1[4].innerHTML === but1[8].innerHTML) {
        check.innerHTML = "Win";
        win = 1;
    }
    if (but1[2].innerHTML !== "" && but1[2].innerHTML === but1[4].innerHTML && but1[4].innerHTML === but1[6].innerHTML) {
        check.innerHTML = "Win";
        win = 1;
    }
}

