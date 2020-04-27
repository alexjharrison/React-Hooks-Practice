import React from 'react'
import { useGetMousePosition } from '../hooks/useGetMousePosition';

function AppHeader() {
    const { x, y } = useGetMousePosition()

    return (
        <header style={styles}>
            <h1>Header</h1>
            <p>X: {x}</p>
            <p>Y: {y}</p>
        </header>
    )
}

export default AppHeader

const styles = {
    backgroundColor: 'red'
}