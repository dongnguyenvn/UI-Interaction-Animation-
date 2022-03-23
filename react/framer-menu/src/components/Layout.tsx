import { Outlet } from 'react-router-dom'
import Menu from './Menu'
import Header from './Header'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useMousePosition from '../hooks/useMousePosition'
import { motion } from 'framer-motion'

const Layout = () => {
    const location = useLocation()
    const [menuState, setMenuState] = useState<boolean>(false)
    const [isCursorHover, setIsCursorHover] = useState<boolean>(false)
    const { x, y } = useMousePosition()

    const handleToggleMenuSate = () => {
        setMenuState(!menuState)
    }
    const handleToggleCursorHover = () => {
        setIsCursorHover(!isCursorHover)
    }

    useEffect(() => {
        setMenuState(false)
    }, [location])

    return (
        <div className='app'>
            <motion.div
                className='cursor'
                animate={{
                    x: x - 12,
                    y: y - 12,
                    scale: isCursorHover ? 1.2 : 1,
                    opacity: isCursorHover ? 1 : 0,
                }}
                transition={{ ease: 'linear', duration: 0.1 }}
            ></motion.div>
            <Header
                handleToggleMenuSate={handleToggleMenuSate}
                handleToggleCursorHover={handleToggleCursorHover}
            />
            <Menu
                handleToggleMenuSate={handleToggleMenuSate}
                menuState={menuState}
                handleToggleCursorHover={handleToggleCursorHover}
            />
            <div>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout
