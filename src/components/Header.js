import { Link } from "react-router-dom";
import logohp from "../images/logohp.png";
import "../styles/layouts/Header.scss";
const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>Back Home!</Link>
      <img
        className="header__img"
        src={logohp}
        alt="Harry Potter's logo"
        title="Harry Potter's logo"
      />
    </header>
  );
};
export default Header;
