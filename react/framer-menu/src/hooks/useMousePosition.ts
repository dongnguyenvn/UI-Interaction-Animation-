import { useEffect, useState } from 'react'

const useMousePosition = () => {
    const [position, setPosition] = useState<{
        x: number
        y: number
    }>({ x: 0, y: 0 })
    useEffect(() => {
        const handleSetPositon = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleSetPositon)
        return () => window.removeEventListener('mousemove', handleSetPositon)
    }, [])

    return position
}

export default useMousePosition
