import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Yaroslav</em>
          </strong>
          <br />
          I'm a frontend developer.
        </h1>
        <a download href="cv_ru.pdf" className="btn" rel="noopener">
          Download CV
        </a>
      </div>
    </header>
  );
}

export { Header };
