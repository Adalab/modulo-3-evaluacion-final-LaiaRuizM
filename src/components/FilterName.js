const FilterName = () => {
  return (
    <label htmlFor="search">
      <input
        className="main__form--input"
        type="search"
        name="search"
        autoComplete="off"
        value={""}
        // onChange={handleChange}
      />
    </label>
  );
};

export default FilterName;
