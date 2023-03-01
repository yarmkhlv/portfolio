import "./btn_git_hub.css";
import gitHubIcon from "./../../img/icons/gitHubDark.svg";

function BtnGitHub({ link }) {
  return (
    <a className="btn-outline" href={link} target="_blank" rel="noreferrer">
      <img src={gitHubIcon} alt="Icon" />
      GitHub repo
    </a>
  );
}

export { BtnGitHub };
