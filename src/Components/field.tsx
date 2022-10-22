import React from 'react'
import Tile from './tile'
import '../css/field.css'

const Field = () => {
    // Tiles with which to fill the field
    var tiles: any = []

    for(var b = 0; b < 10; b++) {
        tiles.push([])
    }
    // Values of all tiles as a 2d array of value pairs
    var tileValues: any = []

    // Fill tileValues with 10 rows
    for(var x = 0; x < 10; x++) {
        tileValues.push([])
    }

    // Fill all rows with tiles.
    // boolean = whether or not tile is a bomb
    // number = number of adjacent bombs
    for(var row = 0; row < 10; row++) {
        for(var column = 0; column < 10; column++) {
            tileValues[row].push([false, 0])
        }
    }

    // Generate bombs
    var nBombs = 40

    for(var n = 0; n < nBombs;) {
        var row = Math.floor(Math.random() * 10)
        var column = Math.floor(Math.random() * 10)
        var tileChoice = tileValues[row][column]

        if(!tileChoice[0]) {
            tileChoice[0] = true
            nBombs--
        }
    }

    for(var row = 0; row < 10; row++) {
        for(var column = 0; column < 10; column++) {
            for(var adjTile = 0; adjTile < 8; adjTile++) {
                var x: number
                var y: number

                switch(adjTile) {
                    case 0: case 1: case 2:
                        x = row - 1
                        y = column - 1 + adjTile
                        break
                    case 3:
                        x = row
                        y = column - 1
                        break
                    case 4:
                        x = row
                        y = column + 1
                        break
                    case 5: case 6: default:
                        x = row + 1
                        y = column - 6 + adjTile
                        break
                }

                if(x < 0 || x > 9) continue
                if(y < 0 || y > 9) continue

                if(tileValues[x][y][0]) tileValues[row][column][1]++
            }
        }
    }

    for(var row = 0; row < 10; row++) {
        for(var column = 0; column < 10; column++) {
            tiles[row][column] = <Tile isBomb={tileValues[row][column][0]} adjacentBombs={tileValues[row][column][1]}/>
        }
    }
    
    return(
        <div className="field">
            {tiles}
        </div>
    )
}

export default Field