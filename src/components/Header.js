import { Link } from "react-router-dom";
import logohp from "../images/logohp.png";
import "../styles/layouts/Header.scss";
const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <i className="fa-solid fa-angles-left arrow"> Back Home ⚡️ ! </i>
      </Link>
      <img
        className="header__img"
        src={logohp}
        alt="Harry Potter's logo"
        title="Harry Potter's logo"
      />
      <p className="header__text">
        Instead of a wand flick, a keystroke was enough to bring you to
        Hogwarts.
      </p>
    </header>
  );
};
export default Header;
