const FilterGender = ({ handleGenderFilter, genderFilter }) => {
  const handleInput = (ev) => {
    const value = ev.target.value;
    handleGenderFilter(value);
  };
  return (
    <fieldset>
      <legend>Search by gender:</legend>
      <input
        className="main__form--input"
        type="radio"
        id="all"
        name="gender"
        value="all"
        checked={genderFilter === "all"}
        onChange={handleInput}
      />
      <label>All genders</label>
      <input
        className="main__form--input"
        type="radio"
        id="male"
        name="gender"
        value="male"
        checked={genderFilter === "male"}
        onChange={handleInput}
      />
      <label>Males</label>
      <input
        className="main__form--input"
        type="radio"
        id="female"
        name="gender"
        value="female"
        checked={genderFilter === "female"}
        onChange={handleInput}
      />
      <label>Females</label>
      <input
        className="main__form--input"
        type="radio"
        id="other"
        name="gender"
        value="other"
        checked={genderFilter === "other"}
        onChange={handleInput}
      />
      <label>Other gender</label>
    </fieldset>
  );
};

export default FilterGender;
