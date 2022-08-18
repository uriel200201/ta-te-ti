import './ScoreBoards.css'
import React from 'react'

const ScoreBoards = ({ scoreX, scoreO }) => (
    < div className="score-board" >
        <div className="scoreX">{scoreX}</div>
        <div className="scoreO">{scoreO}</div>
    </div >

)

export default ScoreBoards