import React from "react";
import { Link } from "react-router-dom";
import "./home-page.scss";
// import { Carousel } from "./carousel/carouselBox";

export const Home = () => {
  return (
    <>
      <div className="home">
        <Link to="/video-cards">
          <div className="story-block">
            {" "}
            <p>Видеокарты</p>
            <img height={160} src="./img/vcard.png" alt="vcard" />
          </div>
        </Link>
        {/* <Carousel>
          <Link to="/video-cards">
            <div className="slider-card">
              <img height={160} src="./img/vcard.png" alt="vcard" />

              <img
                className="sale"
                height={60}
                src="./img/70s.svg"
                alt="sale"
              />
            </div>
          </Link>
          <Link to="/cpus">
            <div className="slider-cpu">
              <img height={140} src="./img/cpu.png" alt="cpu" />

              <img
                className="sale"
                height={60}
                src="./img/50ss.svg"
                alt="sale"
              />
            </div>
          </Link>
          <Link to="/memos">
            <div className="slider-mem">
              <img height={140} src="./img/mem.png" alt="cpu" />
              <img
                className="sale"
                height={60}
                src="./img/50s.svg"
                alt="sale"
              />
            </div>
          </Link>
        </Carousel> */}
      </div>
    </>
  );
};
