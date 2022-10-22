import React, { useState } from 'react'
import '../css/tile.css'

type props = {
    adjacentBombs: number
    isBomb: boolean
}

const Tile = (props: props) => {
    
    const [label, setLabel] = useState('')
    const [dug, setDug] = useState(false)
    const [className, setClassName] = useState('tile')
    
    return(
        <div className={className}
            onContextMenu={(event) => {
                event.preventDefault()
                if(!dug) {
                    if(label === 'F') {
                        setClassName('tile')
                        setTimeout(() => setLabel(''), 75)
                    }
                    else {
                        setClassName('tile flagged')
                        setLabel('F')
                    }
                }
            }}

            onClick={() => {
                if(label !== 'F') {
                    setLabel(props.isBomb ? 'B' : props.adjacentBombs.toString())
                    setDug(true)
                    setClassName(props.isBomb ? 'tile bomb' : 'tile dug')
            }
        }}>
            <p>{label}</p>
        </div>
    )
}

export default Tile