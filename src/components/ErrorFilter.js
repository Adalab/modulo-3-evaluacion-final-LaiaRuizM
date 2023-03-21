const ErrorFilter = ({ handleTypedName }) => {
  const handleReset = (ev) => {
    ev.preventDefault();
    handleTypedName(ev.currentTarget.id);
  };
  return (
    <section className="section__warning">
      <p>
        <span>The creature that you are looking for isn't here</span>
      </p>
      <button id="reset" onClick={handleReset}>
        Try again!
      </button>
    </section>
  );
};

export default ErrorFilter;
