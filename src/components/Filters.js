import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import FilterGender from "./FilterGender";

const Filters = ({
  typedName,
  handleTypedName,
  handleSelectHouse,
  selectHouse,
  handleGenderFilter,
  genderFilter,
  handleResetData,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="main__form" onSubmit={handleSubmit}>
        <FilterName
          typedName={typedName}
          handleTypedName={handleTypedName}
        ></FilterName>
        <FilterHouse
          handleSelectHouse={handleSelectHouse}
          selectHouse={selectHouse}
        ></FilterHouse>
        <FilterGender
          handleGenderFilter={handleGenderFilter}
          genderFilter={genderFilter}
        ></FilterGender>
        <input
          class=""
          type="button"
          value="⚡️ Reset!"
          title="Press here to delete and re-start your information!"
          onClick={handleResetData}
        />
      </form>
    </section>
  );
};
export default Filters;
