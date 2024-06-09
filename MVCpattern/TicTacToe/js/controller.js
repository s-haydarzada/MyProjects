export default class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
  
    init() {
      this.view.listenButtonClick((btn) => {
        this.buttonClickHandler(btn.dataset.value);
        this.view.switchBtnClass(btn.textContent, btn);
      });
  
      this.view.listenNewGameBtnClick(() => {
        this.newGameClickHandler();
      });
  
      this.view.listenResetBtnClick(() => {
        this.resetClickHandler();
      });
    }
  
    buttonClickHandler(i) {
      this.model.makeMove(i);
      this.view.addToBoard(this.model.board);
  
      if (this.model.winner) {
        this.view.showModal(this.model.winner);
        this.model.updateScore(this.model.xScore, this.model.oScore);
        this.view.manageScore(this.model.xScore, this.model.oScore);
      } else if (this.model.checkBoardIsFull()) {
        this.view.showModal(this.model.winner);
      }
    }
  
    startNewGame() {
      this.model.resetGame();
      this.view.addToBoard(this.model.board);
      this.view.hideModal();
    }
  
    newGameClickHandler() {
      this.startNewGame();
    }
  
    resetClickHandler() {
      this.startNewGame();
      this.view.manageScore(0, 0);
      this.model.updateScore();
    }
  }