// import loaderHP from "../images/loader.gif";
import loaderHP from "../images/loader2.gif";

const LoadingHP = () => {
  return (
    <div className="loader__container">
      <div className="lds-ellipsis">
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
