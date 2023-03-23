import loaderHP from "../images/loader.gif";
import "../styles/layouts/Loader.scss";

const LoadingHP = () => {
  return (
    <div className="loader__container">
      <div className="load__ellipsis">
        <img
          src={loaderHP}
          className="animation"
          alt="Loader with animation"
          title="Loader with animation"
        />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingHP;
