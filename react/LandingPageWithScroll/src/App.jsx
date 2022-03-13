import './App.scss';
import Image1 from './img/photo-1536179247184-595913ca4a28.jpeg';
import Image2 from './img/photo-1469817805249-72b7df1c3c05.jpeg';
import Image3 from './img/photo-1593016605825-8cfb409ca3b1.jpeg';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
    const headingRef = useRef();
    const menuRef = useRef();
    const menuSecondRef = useRef();
    const imageFirstRef = useRef();
    const imageSecondRef = useRef();
    const secondSectionRef = useRef();

    useEffect(() => {
        gsap.from(menuRef.current.children, {
            duration: 0.5,
            opacity: 0,
            y: -20,
            stagger: 0.2,
            delay: 0.5,
        });

        gsap.to(imageSecondRef.current, {
            scrollTrigger: {
                trigger: imageSecondRef.current,
                scrub: true,
                start: '80% center',
                markers: true,
            },
            duration: 1.1,
            scale: 1.2,
            height: 380,
        });
        gsap.to(imageFirstRef.current, {
            scrollTrigger: {
                trigger: imageFirstRef.current,
                scrub: true,
                start: '110% center',
            },
            duration: 1.1,
            scale: 1.2,
            height: 250,
        });
        gsap.to(headingRef.current, {
            scrollTrigger: {
                trigger: headingRef.current,
                scrub: true,
                start: '150% center',
            },
            color: '#fff',
            duration: 1.5,
        });
    }, []);
    return (
        <div className="main">
            <header className="header">
                <ul className="menu" ref={menuRef}>
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            Home
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            About us
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            How to work
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            benefits
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            Testimonials
                        </a>
                    </li>
                </ul>
                <ul className="menu menu-right" ref={menuSecondRef}>
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            Blog
                        </a>
                    </li>
                    <li className="menu__item">
                        <a href="#" className="menu__link">
                            Faq
                        </a>
                    </li>
                </ul>
            </header>
            <section className="first-section">
                <div className="info">
                    <h1 className="heading-1" ref={headingRef}>
                        Real estate advice for real locals.
                    </h1>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit voluptatem est quas minus, facilis odit.
                    </p>
                    <a href="#" className="btn btn--start">
                        Get Started
                    </a>
                </div>
                <div className="visuals">
                    <div className="image-container">
                        <img src={Image1} alt="l" ref={imageFirstRef} />
                    </div>
                    <div className="image-container">
                        <img src={Image2} alt="l" ref={imageSecondRef} />
                    </div>
                </div>
            </section>
            <section className="second-section" ref={secondSectionRef}>
                <div className="box"></div>
                <h4 className="heading-4" id="about">
                    About Us
                </h4>
                <h1 className="heading-1" id="buy">
                    Buying a home doesn't have to be a mystery.
                </h1>
                <div className="info-1">
                    <div className="info-1__text">
                        <span className="quote">"</span>
                        <h2 className="heading-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.
                        </h2>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eum labore tempora eveniet adipisci sunt
                            harum, eos nobis asperiores cumque veniam fuga fugit
                            eius ab reiciendis, culpa id recusandae illum
                            quisquam!
                        </p>
                        <a className="btn--learn">Learn More</a>
                    </div>
                    <div className="info-1__visual">
                        <img src={Image3} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
