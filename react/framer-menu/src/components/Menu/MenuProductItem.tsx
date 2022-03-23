import { motion } from 'framer-motion'
import { FC, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useMousePosition from '../../hooks/useMousePosition'

//Transition
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

//Variants
const titleSlideUp = {
    initial: { y: 200 },
    animate: { y: 0 },
}

const maskAnimation = {
    initial: {
        width: '100%',
    },
    animate: {
        width: 0,
    },
}

type MenuProductItemProps = {
    title: string
    id: string
    leftLineFlex: number
    rightLineFlex: number
    thumbnailPosition: number
    offset: number
    img: string
}

const MenuProductItem: FC<MenuProductItemProps> = ({
    title,
    id,
    leftLineFlex,
    rightLineFlex,
    thumbnailPosition,
    offset,
    img,
}) => {
    const { x, y } = useMousePosition()
    const [hover, setHover] = useState<boolean>(false)
    const [listItemPosition, setListItemPosition] = useState<{
        top: number | undefined
        left: number | undefined
    }>({ top: 0, left: 0 })
    const listItemRef = useRef<HTMLLIElement>(null)

    useEffect(() => {
        setListItemPosition({
            top: listItemRef.current?.offsetTop,
            left: listItemRef.current?.offsetLeft,
        })
    }, [hover])

    const toggleHover = () => {
        setHover(!hover)
    }
    return (
        <li
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            ref={listItemRef}
        >
            <Link to={`/product/${id}`}>
                <div className='wrapper'>
                    <div className={`line left flex-${leftLineFlex}`}>
                        <motion.div
                            variants={maskAnimation}
                            transition={{ ...transition, duration: 1 }}
                            className='mask'
                        ></motion.div>
                    </div>
                    <div className='title'>
                        <h2>
                            <motion.div
                                variants={titleSlideUp}
                                transition={transition}
                                className='text'
                            >
                                {title}
                            </motion.div>
                        </h2>
                    </div>
                    <div
                        className='thumbnail'
                        style={{ left: thumbnailPosition }}
                    >
                        <img src={img} alt='a' />
                        <motion.div
                            variants={maskAnimation}
                            transition={{ ...transition, duration: 1 }}
                            className='mask'
                        ></motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: hover ? 1 : 0,
                            x:
                                (x as number) -
                                (listItemPosition.left as number) +
                                offset,
                            y: (y as number) - (listItemPosition.top as number),
                        }}
                        className='floating-image'
                    >
                        <img src={img} alt='a' />
                    </motion.div>
                    <div className={`line right flex-${rightLineFlex}`}>
                        <motion.div
                            variants={maskAnimation}
                            transition={{ ...transition, duration: 1 }}
                            className='mask right'
                        ></motion.div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default MenuProductItem
