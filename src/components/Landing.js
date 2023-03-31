import { Link } from "react-router-dom";
import "../styles/layouts/Landing.scss";
const Landing = () => {
  return (
    <div className="landing">
      <Link to={"/list"} className="landing__title">
        Press here to enter in Hogwarts. Enjoy it!
      </Link>
    </div>
  );
};

export default Landing;
