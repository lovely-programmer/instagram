import { useEffect, useRef, useState } from "react";
import HomePhone from "../assets/home-phones.png";
import Logo from "../assets/logo1.png";
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import Microsoft from "../assets/microsoft.png";
import Footer from "../components/Footer";

function Login() {
  const sliderRef = useRef(null);

  const slideImages = [
    "./screenshot1.png",
    "./screenshot2.png",
    "./screenshot3.png",
    "./screenshot4.png",
  ];

  const imageContainerStyles = {
    backgroundImage: `url(${HomePhone})`,
    backgroundSize: "468.32px 634.15px",
    height: "581.15px",
    marginBottom: "12px",
    backgroundPosition: "-46px 0",
  };

  useEffect(() => {
    const interval = () => {
      const slides = sliderRef.current.querySelector(".slideImages");
      const activeSlide = slides.querySelector("[data-active]");

      let newIndex = [...slides.children].indexOf(activeSlide) + 1;

      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      slides.children[newIndex].dataset.active = true;

      delete activeSlide.dataset.active;
    };

    const time = setInterval(() => {
      interval();
    }, 5000);

    return () => clearInterval(time);
  }, []);

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__content">
          <div
            ref={sliderRef}
            style={imageContainerStyles}
            className="login__content-left"
          >
            <div className="slideImages">
              <div className="slide" data-active>
                <img src={slideImages[0]} alt="" />
              </div>
              <div className="slide">
                <img src={slideImages[1]} alt="" />
              </div>
              <div className="slide">
                <img src={slideImages[2]} alt="" />
              </div>
              <div className="slide">
                <img src={slideImages[3]} alt="" />
              </div>
            </div>
          </div>

          <div className="login__main">
            <div className="login__content-right">
              <div className="login__logo">
                <img src={Logo} alt="" />
              </div>
              <div className="login__form">
                <div className="form__group">
                  <input type="text" required id="username" />
                  <label htmlFor="username">
                    Phone number, username or email
                  </label>
                </div>
                <div className="form__group">
                  <input type="password" required id="password" />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="form__group btn">
                  <button>Log in</button>
                </div>
                <div className="or">
                  <div className="line left"></div>
                  <div>OR</div>
                  <div className="line right"></div>
                </div>
                <div className="facebook__login">
                  <img src={Facebook} />
                  <div>
                    <a href="">Log in with Facebook</a>
                  </div>
                </div>
                <div className="forget__password">
                  <a href="">Forget Password?</a>
                </div>
              </div>
            </div>

            <div className="login__content-right dont__have">
              <p>
                Don't have an account? <a href="">Sign Up</a>
              </p>
            </div>

            <div className="get__app">
              <div className="get">
                <span>Get the app.</span>
              </div>
              <div className="app">
                <a href="">
                  <img src={Google} />
                </a>
                <a href="">
                  <img src={Microsoft} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
