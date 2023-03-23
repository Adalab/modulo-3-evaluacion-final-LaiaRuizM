import "../styles/layouts/FilterName.scss";
const FilterName = ({ handleTypedName, typedName }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleTypedName(value);
  };
  return (
    <>
      <label htmlFor="search">Search by character:</label>
      <input
        className="form__input-text"
        type="search"
        name="search"
        autoComplete="off"
        placeholder="~ Harry Potter! ⚡️"
        value={typedName}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterName;
