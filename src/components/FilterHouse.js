const FilterHouse = ({ handleSelectHouse, selectHouse }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleSelectHouse(value);
  };
  return (
    <label htmlFor="houses">
      Select your favorite house!
      <select
        name="houses"
        id="houses"
        onChange={handleChange}
        value={selectHouse}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </label>
  );
};

export default FilterHouse;
