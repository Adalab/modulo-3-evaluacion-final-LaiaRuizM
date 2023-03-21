import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

const Filters = ({
  typedName,
  handleTypedName,
  handleSelectHouse,
  selectHouse,
}) => {
  return (
    <section>
      <form className="main__form">
        <FilterName
          typedName={typedName}
          handleTypedName={handleTypedName}
        ></FilterName>
        <FilterHouse
          handleSelectHouse={handleSelectHouse}
          selectHouse={selectHouse}
        ></FilterHouse>
      </form>
    </section>
  );
};
export default Filters;
