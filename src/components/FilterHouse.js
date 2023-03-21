const FilterHouse = () => {
  return (
    <label htmlFor="houses">
      Select your favorite house!
      <select name="houses" id="houses" onChange={""}>
        <option value="All">All houses</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </label>
  );
};

export default FilterHouse;
