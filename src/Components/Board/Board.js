import React from "react";
import Square from "../Square/Square";
import './Board.css'

const Board = ({ squares, onClick, turn, winningSquares }) => {

    const createSquares = values => (
        values.map(value => {
            return (
                <Square
                    winner={winningSquares.includes(value)}
                    turn={turn}
                    onClick={() => onClick(value)}
                    key={`square_${value}`}
                    value={squares[value]}
                />
            );
        })
    );

    return (
        <div className="board">
            <div className="row">
                {createSquares([0, 1, 2])}
            </div>
            <div className="row">
                {createSquares([3, 4, 5])}
            </div>
            <div className="row">
                {createSquares([6, 7, 8])}
            </div>
        </div>
    );
}

export default Board;