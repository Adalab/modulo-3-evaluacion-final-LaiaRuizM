import "../styles/layouts/FilterName.scss";
const FilterName = ({ handleTypedName, typedName }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleTypedName(value);
  };
  return (
    <label htmlFor="search">
      Search by character:
      <input
        className="form__input--name"
        type="search"
        name="search"
        autoComplete="off"
        placeholder="~ Harry Potter! ⚡️"
        value={typedName}
        onChange={handleChange}
      />
    </label>
  );
};

export default FilterName;
