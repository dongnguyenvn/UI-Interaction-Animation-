import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className='container fluid'>
                <div className='header-inner'>
                    <Link to='/'>Short.</Link>
                    <div className='hamburger-menu'>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
