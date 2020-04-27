import { useState, useEffect } from 'react'


export function useGetMousePosition() {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

    function handleMouseMove({ screenX, screenY }: { screenX: number, screenY: number }) {
        setMouseX(screenX)
        setMouseY(screenY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    })

    return { x: mouseX, y: mouseY }
}