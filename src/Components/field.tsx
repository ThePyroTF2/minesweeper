import React from 'react'
import Mine from './mine'
import '../css/field.css'

type props = {
    mines: number
}

const Field = (props: props) => {
    var mines = []
    var mineValues = []
    for(var x = 0; x < 100; x++) {
        mineValues[x] = false
    }
    var nMines = 40

    for(var n = 0; n < nMines;) {
        var mineChoice = Math.floor(Math.random() * 100)

        if(!mineValues[mineChoice]) {
            mineValues[mineChoice] = true
            nMines--
        }
    }

    for(var i = 0; i < props.mines; i++) {
        mines[i] = <Mine adjacent={0} isMine={mineValues[i]}/>
    }

    

    // for(var mine of mines) {

    // }

    return(
        <div className="field">
            {mines}
        </div>
    )
}

export default Field