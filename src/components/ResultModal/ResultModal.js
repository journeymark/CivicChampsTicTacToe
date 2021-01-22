import React from 'react';
import classNames from 'classnames';

import './ResultModal.css';

export const ResultModal = (props) => {
    const resultModalClasses = classNames({
        'modal-open': props.isGameOver
    });

    const message = props.winner ? `${props.winner} wins!`: 'Tied!';

    return (
        <div id="modal-overlay" className={resultModalClasses}>
            <div id="game-result-modal">
            <div id="result-container">
                <div id="winner-container">
                <span>{message}</span>
                </div>
        </div>
        <div id="new-game-container">
            <button
                id="new-game-button"
                onClick={props.onNewGameClicked}>Play again!</button>
        </div>
        </div>
        </div>
  );
}