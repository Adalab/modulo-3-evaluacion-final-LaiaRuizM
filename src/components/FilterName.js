const FilterName = ({ handleTypedName, typedName }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleTypedName(value);
  };
  return (
    <label htmlFor="search">
      Search by character:
      <input
        className="main__form--input"
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
