class TicTacToe {
    constructor() {

    	this.battleField = [[],[],[]];
    	this.player = 'x';
    	this.winner = null;
    	this.turnS = 0;

    }

    getCurrentPlayerSymbol() {

    	return this.player;
    }

    nextTurn(rowIndex, columnIndex) {

    	if (this.battleField[rowIndex][columnIndex] != null) {
    		return;
    	}
    	this.turnS++;

    	this.battleField[rowIndex][columnIndex] = this.player;
    	
    	if ( (this.battleField[0][0] && this.battleField[0][0] === this.battleField[1][0] && this.battleField[0][0] === this.battleField[2][0]) ||
    		 (this.battleField[0][1] && this.battleField[0][1] === this.battleField[1][1] && this.battleField[0][1] === this.battleField[2][1]) ||
    		 (this.battleField[0][2] && this.battleField[0][2] === this.battleField[1][2] && this.battleField[0][2] === this.battleField[2][2]) ||
      		 (this.battleField[0][0] && this.battleField[0][0] === this.battleField[0][1] && this.battleField[0][0] === this.battleField[0][2]) ||
    		 (this.battleField[1][0] && this.battleField[1][0] === this.battleField[1][1] && this.battleField[1][0] === this.battleField[1][2]) ||
    		 (this.battleField[2][0] && this.battleField[2][0] === this.battleField[2][1] && this.battleField[2][0] === this.battleField[2][2]) ||
    		 (this.battleField[0][0] && this.battleField[0][0] === this.battleField[1][1] && this.battleField[0][0] === this.battleField[2][2]) ||
    		 (this.battleField[0][2] && this.battleField[0][2] === this.battleField[1][1] && this.battleField[0][2] === this.battleField[2][0]) ) 

    		 { this.winner = this.player; }
    		
    	this.player = (this.player == 'x') ? 'o' : 'x';
    	
    }

    isFinished() {

    	return (this.isDraw() == true || this.getWinner() != null) ? true : false;

	}

    getWinner() {

    	return (this.winner == null) ? null : this.winner;

    }

    noMoreTurns() {

    	return (this.turnS == 9) ? true : false;

    }

    isDraw() {

    	return (this.getWinner() == null && this.noMoreTurns() == true) ? true : false;

    }

    getFieldValue(rowIndex, colIndex) {

    	return (this.battleField[rowIndex][colIndex] != null) ? this.battleField[rowIndex][colIndex] : null;

    }
}

module.exports = TicTacToe;
