import gi_big from "./../img/projects/gi_big.jpg";
import gi_small from "./../img/projects/gi_small.jpg";
import weather_big from "./../img/projects/weather_big.jpg";
import weather_small from "./../img/projects/weather_small.jpg";
import movies_small from "./../img/projects/movies_small.jpg";
import movies_big from "./../img/projects/movies_big.jpg";
import meta_big from "./../img/projects/meta_big.jpg";
import meta_small from "./../img/projects/meta_small.jpg";

const projectsList = [
  {
    title: "Movies Service",
    skills: "TypeScript, React, Redux, responsive design",
    img: movies_small,
    bigImg: movies_big,
    gitHubLink: "https://yarmkhlv.github.io/pet_prj_movies/",
    id: 1,
  },
  {
    title: "Game landing",
    skills: "HTML, CSS, native JS, responsive design",
    img: gi_small,
    bigImg: gi_big,
    gitHubLink: "https://yarmkhlv.github.io/pet_prj_game_landing/",
    id: 2,
  },
  {
    title: "Weather",
    skills: "React, Redux Toolkit, JS, Requests, LocalStorage",
    img: weather_small,
    bigImg: weather_big,
    gitHubLink: "https://yarmkhlv.github.io/pet_prj_weather/",
    id: 3,
  },
  {
    title: "Crypto",
    skills: "TypeScript, React, Redux Toolkit, React-router, Tailwind",
    img: meta_small,
    bigImg: meta_big,
    gitHubLink: "https://yarmkhlv.github.io/test/",
    id: 4,
  },
];

export { projectsList };
