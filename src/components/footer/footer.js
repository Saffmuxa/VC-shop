import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-real">
        <div className="company">
          <div className="start">Компания</div>
          <div>
            <ul>
              <li>
                <a className="link" href="/#">
                  О Компании
                </a>
              </li>
              <li>
                <a className="link" href="/#">
                  Партнерам
                </a>
              </li>
              <li>
                <a className="link" href="/#">
                  Вакансии
                </a>
              </li>
              <li>
                <a className="link" href="/#">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a className="link" href="/#">
                  Персональные данные
                </a>
              </li>
              <li>
                <a className="link" href="/#">
                  Правила продаж
                </a>
              </li>
              <li>
                <a className="link" href="/#">
                  Сервисные центры
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="buyer">
          <div className="start">Покупателям</div>
          <div>
            <ul>
              <li>
                <a className="link" href="/#">
                  Как оформить заказ
                </a>
              </li>
              <li>
                <a className="link" href="/#2">
                  Обмен, возврат, гарантия
                </a>
              </li>
              <li>
                <a className="link" href="/#">
                  Способы оплаты
                </a>
              </li>
              <li>
                <a className="link" href="/#">
                  Кредиты
                </a>
              </li>

              <li>
                <a className="link" href="/#">
                  Доставка
                </a>
              </li>
              <li>
                <a className="link" href="/#">
                  Статус заказа
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mail">
          <div className="start">Связаться с нами</div>
          <div>1-234-57-43-219 (c 07:00 до 02:00)</div>
          <div>
            <a href="/#">Адреса магазинов в г. Красноярск</a>
          </div>
          <div className="sale">Подпишись, и следи за новинками и акциями:</div>
          <input type="email" placeholder="Введите свой email" />
          <div>
            Подписываясь на рассылку, Вы соглашаетесь c условиями{" "}
            <a href="/#2">политики конфиденциальности</a> и{" "}
            <a href="/#dddd">политики обработки персональных данных</a>
          </div>
        </div>
        {/* </div> */}
        {/* <div className="about-me"> */}
        <div className="my-name">
          <h3>Michael Kopich</h3>
          <p>Beginner frontend developer (ReactJS)</p>
        </div>
        <div className="contact-web">
          <a target="_blank" href="/#">
            <img src="/img/vk.svg" alt="VK" />
          </a>
          <a arget="_blank" href="/#">
            <img src="/img/telegram.svg" alt="telegram" />
          </a>
          <a arget="_blank" href="/#">
            <img src="/img/github.svg" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};
