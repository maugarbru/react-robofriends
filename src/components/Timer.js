import React, { useEffect, useState } from 'react'

const Timer = ({ initial = 0 }) => {
    const [timer, setTimer] = useState(initial)
    const [instant, setInstant] = useState(0)
    const [stopTimer, setStopTimer] = useState(false)

    const actionButton = () => {
        if (!stopTimer) {
            setStopTimer(true)
            setInstant(timer)
        } else {
            setStopTimer(false)
        }
    }

    const restart = () => {
        setStopTimer(false)
        setTimer(initial)
    }

    useEffect(() => {
        if (timer > 0) {
            !stopTimer ? setTimeout(() => {
                setTimer(timer - 1)
            }, 1000) : setTimer(instant)
        }
    }, [timer, stopTimer, instant])

    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5">
            Timer: {timer}
            { timer > 0 ?
                <button className="ml5 ba b--green grow bg-lightest-blue" onClick={actionButton}>{stopTimer ? 'Resume' : 'Stop'}</button>
                : <button className="ml5 ba b--green grow bg-lightest-blue" onClick={restart}>Restart</button>}

        </div>
    );
}

export default Timer