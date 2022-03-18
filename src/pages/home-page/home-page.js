import React from "react";
import { HItem } from "../../components/h-item/h-item";
import "./home-page.scss";
import { Hards } from "./cards";

export const HomePage = () => {
  return (
    <div className="homePage">
      <div className="content">
        <div className="content__sub">
          <h1>Всё железо</h1>

          <div className="search-block">
            <img width={25} src="/img/search.svg" alt="logo" />
            <input
              // value={searchValue}
              // onChange={onChangeSearchInput}
              placeholder="Поиск..."
              className="search-input"
            />
            {/* {searchValue && (
        <img
          // onClick={() => setsearchValue("")}
          // width={25}
          // height={25}
          src="/img/x.ico"
          alt="logo"
        />
      )} */}
          </div>
        </div>
        {/* <div className="cards">{renderCards()}</div> */}
      </div>
      <div className="cards">
        {/* В этом диве создаются карточки с товаром, в зависимости от количества товаров в массиве Hards */}
        {Hards.map((arrItem) => (
          <HItem hardItem={arrItem} key={arrItem.id} />
        ))}
      </div>
    </div>
  );
};
