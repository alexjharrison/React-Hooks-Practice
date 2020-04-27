import React, { useContext } from 'react'
import { CountContext } from '../context';
import SubCounter from './SubCounter'

function Counter() {
    const { count, increment, decrement } = useContext(CountContext)

    return (
        <>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} style={{ marginLeft: 10 }}>Decrement</button>
            <h1>{count}</h1>
            <SubCounter />
        </>
    )
}

export default Counter