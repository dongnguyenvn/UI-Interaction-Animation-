import { FC, useState } from 'react'
import productsData from '../../data/products'
import Close from '../CloseSvg'
import MenuProductItem from './MenuProductItem'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

//Transition
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

//Variants
const parent = {
    animate: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 1,
        },
    },
}

type MenuProps = {
    handleToggleMenuSate: () => void
    handleToggleCursorHover: () => void
    menuState: boolean
}

const Menu: FC<MenuProps> = ({
    handleToggleMenuSate,
    menuState,
    handleToggleCursorHover,
}) => {
    return (
        <AnimatePresence>
            {menuState && (
                <>
                    <motion.div
                        initial={{ visibility: 'hidden' }}
                        animate={{
                            visibility: 'visible',
                            transition: { delay: 1 },
                        }}
                        exit={{
                            visibility: 'hidden',
                            transition: { delay: 1 },
                        }}
                        className='products'
                    >
                        <Link to='/'>
                            <div className='menu-title'>Products</div>
                        </Link>
                        <div
                            className='close'
                            onClick={handleToggleMenuSate}
                            onMouseEnter={handleToggleCursorHover}
                            onMouseLeave={handleToggleCursorHover}
                        >
                            <Close />
                        </div>
                        <div className='menu'>
                            <div className='container'>
                                <div className='menu-inner'>
                                    <motion.ul
                                        variants={parent}
                                        initial='initial'
                                        animate='animate'
                                        exit='exit'
                                    >
                                        {productsData.map((p) => (
                                            <MenuProductItem
                                                key={p.id}
                                                {...p}
                                            />
                                        ))}
                                    </motion.ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <Panel />
                </>
            )}
        </AnimatePresence>
    )
}

const Panel = () => {
    const [panelComplete, setPanelComplete] = useState<boolean>(false)
    return (
        <>
            <motion.div
                style={{
                    backgroundColor: panelComplete ? 'pink' : 'aquamarine',
                }}
                initial={{ height: 0 }}
                animate={{
                    height: [0, window.innerHeight, 0],
                    bottom: [null, 0, 0],
                }}
                exit={{
                    height: [0, window.innerHeight, 0],
                    top: [null, 0, 0],
                }}
                transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
                className='left-panel-background'
            ></motion.div>
            <motion.div
                style={{
                    backgroundColor: panelComplete ? 'pink' : 'aquamarine',
                }}
                initial={{ height: 0 }}
                animate={{
                    height: [0, window.innerHeight, 0],
                    bottom: [0, 0, window.innerHeight],
                }}
                exit={{
                    height: [0, window.innerHeight, 0],
                    bottom: [null, 0, 0],
                }}
                transition={{ ...transition, duration: 2, times: [0, 0.5, 1] }}
                className='right-panel-background'
                onAnimationStart={() => {
                    document.body.classList.add('body-lock')
                }}
                onAnimationComplete={() => {
                    setPanelComplete(!panelComplete)
                    document.body.classList.remove('body-lock')
                }}
            ></motion.div>
        </>
    )
}

export default Menu
