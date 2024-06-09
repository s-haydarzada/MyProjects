export default class View {
    constructor() {
      this.gameContainer = document.querySelector(".container");
      this.buttons = this.gameContainer.querySelectorAll("button");
      this.modal = document.querySelector(".modal");
      this.overlay = document.querySelector(".overlay");
      this.message = document.querySelector(".message");
      this.newGameBtn = document.querySelector(".new");
      this.resetBtn = document.querySelector(".reset");
  
    }
  
    listenButtonClick(callback) {
        this.buttons.forEach(btn => {
          btn.addEventListener("click", () => {
            callback(btn);
          });
        })
    }
  
    listenNewGameBtnClick(callback) {
      this.newGameBtn.addEventListener('click', callback)
    }
  
    listenResetBtnClick(callback) {
      this.resetBtn.addEventListener('click', callback)
    }
  
    addToBoard(board) {
      this.buttons.forEach((btn, i) => {
        btn.textContent = board[i];
      });
    }
  
    switchBtnClass(curPlayer, btn) {
      btn.classList.remove("btn_x");
      btn.classList.remove("btn_o");
      curPlayer === "X" ? btn.classList.add("btn_x") : btn.classList.add("btn_o");
    }
  
    showModal(winner) {
      this.modal.classList.remove("hidden");
      this.overlay.classList.remove("hidden");
      this.message.textContent = `${winner ? `${winner} wins!` : "Draw"}`;
    }
  
    hideModal() {
      this.modal.classList.add("hidden");
      this.overlay.classList.add("hidden");
    }
  
    manageScore(xScore, oScore) {
      document.querySelector(".first p").textContent = xScore;
      document.querySelector(".second p").textContent = oScore;
    }
  }