import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

const Filters = () => {
  return (
    <section>
      <form className="main__form">
        <FilterName></FilterName>
        <FilterHouse></FilterHouse>
      </form>
    </section>
  );
};
export default Filters;
