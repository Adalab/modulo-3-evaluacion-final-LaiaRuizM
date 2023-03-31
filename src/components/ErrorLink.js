import { Link } from "react-router-dom";
import "../styles/layouts/ErrorLink.scss";
const ErrorLink = () => {
  return (
    <>
      <Link to={"/list"}>
        <i className="fa-solid fa-angles-left arrow"> Return ⚡️ ! </i>
      </Link>
      <section className="section__warning">
        <p>
          <span className="section__warning--span">
            Page not found. Error 404.
          </span>
        </p>
      </section>
    </>
  );
};

export default ErrorLink;
