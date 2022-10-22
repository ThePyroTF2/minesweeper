import React, { useState } from 'react'
import '../css/mine.css'

type props = {
    adjacent: number
    isMine: boolean
}

const Mine = (props: props) => {
    
    const [num, setNum] = useState('')
    const [dug, setDug] = useState(false)
    const [className, setClassName] = useState('mine')
    
    return(
        <div className={className}
            onContextMenu={(event) => {
                event.preventDefault()
                if(!dug) {
                    if(num === 'F') {
                        setClassName('mine')
                        setTimeout(() => setNum(''), 75)
                    }
                    else {
                        setClassName('mine flagged')
                        setNum('F')
                    }
                }
            }}

            onClick={() => {
                setNum(props.isMine ? 'B' : props.adjacent.toString())
                setDug(true)
                setClassName(props.isMine ? 'mine bomb' : 'mine dug')
        }}>
            <p>{num}</p>
        </div>
    )
}

export default Mine