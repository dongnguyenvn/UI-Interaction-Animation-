import './App.scss';
import imgGirl from './images/girl.webp';
import imgBoy from './images/boy.webp';
import arrow from './images/arrow-right.svg';

import { useRef, useEffect } from 'react';
import { gsap, Power3 } from 'gsap';

function App() {
  const heroRef = useRef();
  const imagesRef = useRef();
  const contentRef = useRef();
  useEffect(() => {
    const girl = imagesRef.current.firstChild;
    const boy = imagesRef.current.lastChild;

    const headLineFirst = contentRef.current.firstChild.firstChild;
    const headLineSecond = headLineFirst.nextSibling;
    const headLineThird = headLineSecond.nextSibling;
    const contentP = contentRef.current.firstChild.nextSibling;
    const contentButton = contentRef.current.lastChild;

    gsap.to(heroRef.current, { css: { visibility: 'visible' } });
    gsap
      .timeline({ defaults: { ease: Power3.easeOut }, delay: 0.8 })
      .from(girl, { y: 1280, duration: 1.2 }, 'start')
      .from(girl.firstChild, { scale: 1.6, duration: 2 }, 0.2)
      .from(boy, { y: 1280, duration: 1.2 }, 0.2)
      .from(boy.firstChild, { scale: 1.6, duration: 2 }, 0.2);

    gsap
      .timeline({ defaults: { duration: 1, ease: Power3.easeOut }, delay: 0.8 })
      .from(
        [
          headLineFirst.firstChild,
          headLineSecond.firstChild,
          headLineThird.firstChild,
        ],
        { y: 44, delay: 0.8, stagger: 0.15 },
        'start'
      )
      .from(contentP, { y: 20, opacity: 0 }, 1.4)
      .from(contentButton, { y: 20, opacity: 0 }, 1.6);
  }, []);
  return (
    <div className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={contentRef}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Relieving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
              <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
              <div className="btn-row">
                <button className="explore-button">
                  Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={imagesRef}>
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
