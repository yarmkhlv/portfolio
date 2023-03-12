import { Header } from "../components/header/header";

function Home() {
  return (
    <div>
      <Header />
      <main className="section">
        <div className="container">
          <h1 className="title-1">Skills</h1>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, React, Redux, Redux Toolkit, Tailwind,
                HTML, CSS, NPM, GIT
              </p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export { Home };
