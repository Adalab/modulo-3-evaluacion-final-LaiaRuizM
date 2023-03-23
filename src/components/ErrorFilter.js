import PropTypes from "prop-types";
const ErrorFilter = ({ typedName, handleTypedName }) => {
  const handleReset = (ev) => {
    ev.preventDefault();
    handleTypedName(ev.currentTarget.id);
  };
  return (
    <section className="section__warning">
      <p>
        There is not any character who has any coincidence with the following
        word {typedName}
      </p>
      <button id="reset" onClick={handleReset}>
        Wow, maybe you should try again!
      </button>
    </section>
  );
};

export default ErrorFilter;

ErrorFilter.propTypes = {
  typedName: PropTypes.string,
  handleTypedName: PropTypes.func,
};
