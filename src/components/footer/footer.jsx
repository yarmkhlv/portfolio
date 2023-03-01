import "./footer.css";
import gitHub from "./../../img/icons/gitHub.svg";
import telegram from "./../../img/icons/telegram.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="social">
          <li className="social__item">
            <a
              href="https://github.com/yarmkhlv"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitHub} alt="Link to GitHub" />
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://www.linkedin.com/in/yaroslav-mikhailov-602112267/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedIn} alt="Link to LinkedIn" />
            </a>
          </li>
          <li className="social__item">
            <a href="https://t.me/yarmkhlv" target="_blank" rel="noreferrer">
              <img src={telegram} alt="Link to Telegram" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export { Footer };
