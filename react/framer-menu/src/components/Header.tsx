import { motion } from 'framer-motion'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type HeaderProps = {
    handleToggleMenuSate: () => void
    handleToggleCursorHover: () => void
}
const Header: FC<HeaderProps> = ({
    handleToggleMenuSate,
    handleToggleCursorHover,
}) => {
    return (
        <header>
            <div className='container fluid'>
                <div className='header-inner'>
                    <Link to='/'>Short.</Link>
                    <div
                        className='hamburger-menu'
                        onClick={handleToggleMenuSate}
                        onMouseEnter={handleToggleCursorHover}
                        onMouseLeave={handleToggleCursorHover}
                    >
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
