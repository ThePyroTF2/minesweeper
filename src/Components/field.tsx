import React from 'react'
import Mine from './mine'
import '../css/field.css'

const Field = () => {
    var mines: any = []

    for(var b = 0; b < 10; b++) {
        mines.push([])
    }
    // Values of all mines as a 2d array of value pairs
    var mineValues: any = []

    // Fill mineValues with 10 rows
    for(var x = 0; x < 10; x++) {
        mineValues.push([])
    }

    // Fill all rows with mines.
    // boolean = whether or not mine is a bomb
    // number = number of adjacent bombs
    for(var y = 0; y < 10; y++) {
        for(var z = 0; z < 10; z++) {
            mineValues[y].push([false, 0])
        }
    }

    // Generate bombs
    var nMines = 40

    for(var n = 0; n < nMines;) {
        var mineChoice1 = Math.floor(Math.random() * 10)
        var mineChoice2 = Math.floor(Math.random() * 10)

        if(!mineValues[mineChoice1][mineChoice2][0]) {
            mineValues[mineChoice1][mineChoice2][0] = true
            nMines--
        }
    }



    for(var i = 0; i < 10; i++) {
        for(var a = 0; a < 10; a++) {
            mines[i][a] = <Mine isMine={mineValues[i][a][0]} adjacent={mineValues[i][a][1]}/>
        }
    }
    
    return(
        <div className="field">
            {mines}
        </div>
    )
}

export default Field