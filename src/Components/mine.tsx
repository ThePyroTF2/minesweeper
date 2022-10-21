import React, { useState } from 'react'
import '../css/mine.css'

type props = {
    adjacent: number
    isMine: boolean
}

const Mine = (props: props) => {
    
    const [num, setNum] = useState('')
    var [dug, setDug] = useState(false)
    
    return(
        <div className="mine" onContextMenu={(event) => {event.preventDefault(); if(!dug) setNum(num === 'F' ? '' : 'F')}} onClick={(event) => {setNum(props.isMine ? 'B' : props.adjacent.toString()); setDug(true)}}>
            <p>{num}</p>
        </div>
    )
}

export default Mine