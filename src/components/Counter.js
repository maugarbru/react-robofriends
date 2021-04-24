import React from 'react';
import useCounter from '../hooks/useCounter'

const Counter = () => {
    const counter = useCounter({
        step: 1, condition: (contador) => contador < 10
    })
    return (
        <div {...(true ? { prop1: 'hola' } : { prop2: 'mundo' })} className="tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5">
            Counter: {counter.contador}
            <button className="ml5 ba b--green grow bg-lightest-blue" onClick={counter.agregar}>+</button>
            <button className="ba b--green grow bg-lightest-blue" onClick={counter.disminuir}>-</button>
        </div>
    );
}

export default Counter;