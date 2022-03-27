import { useEffect, useState, Children, cloneElement } from "react";
import "./carousel.scss";

const PAGE_WIDTH = 300;
export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const lefty = () => {
    setOffset((currentOfset) => {
      const newOffset = currentOfset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
      // currentOfset равен 0, из useState(0)/ далее к 0 прибавляется PAGE_WIDTH и выбирается наименьшее число из полученного и нуля. Возвращается новая переменная и идет в offset
    });
  };

  const righty = () => {
    setOffset((currentOfset) => {
      const newOffset = currentOfset - PAGE_WIDTH;
      // const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      return Math.max(newOffset, -2 * PAGE_WIDTH);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(
          child
          // style: {
          //   height: "100%",
          //   // maxWidth: `${PAGE_WIDTH}px`,
          //   // minWidth: `${PAGE_WIDTH}px`,
          // },
        );
      })
    );
  }, []);

  return (
    <div className="wrapper">
      <button className="arrow" onClick={lefty}>
        <img width={30} src="./img/left-arrow.svg" alt="left" />
      </button>
      <div className="main-container">
        <div
          className="all-pages-container"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages}
        </div>
      </div>
      <button className="arrow" onClick={righty}>
        <img width={30} src="./img/right-arrow.svg" alt="right" />
      </button>
    </div>
  );
};
