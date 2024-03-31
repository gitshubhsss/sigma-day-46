let started = false;
let level = 0;
let btnClasses = ["red", "yellow", "green", "purple"];
let gameSeq = [];
let userSeq = [];
//1)press any key to start the game
document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("game started");
    started = true;
  }
  levelUp();
});

//2)level up

function levelUp() {
  userSeq = [];
  level++;
  let h2 = document.querySelector("h2");
  h2.innerText = `Level ${level}`;
  let randInx = Math.floor(Math.random() * 4);
  let randColor = btnClasses[randInx];
  let randBtnPress = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  flashBtn(randBtnPress);
}

//3)flashBtn

function flashBtn(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 500);
}

//4)select all the buttons from the user
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", userPress); //passing the userpress() as an callback
}

function userPress() {
  let btn = this;
  let btns = btn.getAttribute("id");
  userSeq.push(btns);
  console.log(userSeq);
  userFlash(btn); //calling to userflash fun
  checkAns(userSeq.length - 1);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
}
//5)
function checkAns(idx) {
  if (gameSeq[idx] === userSeq[idx]) {
    if (gameSeq.length === userSeq.length) {
      setTimeout(levelUp(), 1000);
    }
  } else {
    let h2 = document.querySelector("h2");
    h2.innerText = "Game over press any key to start again";
    reset();
  }
}
function reset() {
  started = true;
  level = 0;
  userSeq = [];
  gameSeq = [];
}

