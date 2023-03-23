import "../styles/layouts/FilterGender.scss";
const FilterGender = ({ handleGenderFilter, genderFilter }) => {
  const handleInput = (ev) => {
    const value = ev.target.value;
    handleGenderFilter(value);
  };
  return (
    <fieldset>
      <legend className="form__filters--legend">
        Search by gender:
        <label className="form__filters--label">
          All genders
          <input
            className="form__filters--input"
            type="radio"
            id="all"
            name="gender"
            value="all"
            checked={genderFilter === "all"}
            onChange={handleInput}
          />
        </label>
        <label className="form__filters--label">
          Males
          <input
            className="form__filters--input"
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={genderFilter === "male"}
            onChange={handleInput}
          />
        </label>
        <label className="form__filters--label">
          Females
          <input
            className="form__filters--input"
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={genderFilter === "female"}
            onChange={handleInput}
          />
        </label>
        <label className="form__filters--label">
          Other gender
          <input
            className="form__filters--input"
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={genderFilter === "other"}
            onChange={handleInput}
          />
        </label>
      </legend>
    </fieldset>
  );
};

export default FilterGender;
