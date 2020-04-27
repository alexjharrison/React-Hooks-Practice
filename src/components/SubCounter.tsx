import React, { useContext } from 'react'
import { CountContext } from '../context/countContext';

function SubCounter() {
    const { count, increment, decrement } = useContext(CountContext)

    return (
        <>
            <button onClick={increment}>Increment-Sub</button>
            <button onClick={decrement}>Decrement-Sub</button>
            <h2>{count}-Sub</h2>
        </>
    )
}

export default SubCounter
