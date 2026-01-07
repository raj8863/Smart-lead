const FilterBar = ({ setFilter }) => (
  <>
    <button onClick={() => setFilter("")}>All</button>
    <button onClick={() => setFilter("Verified")}>Verified</button>
    <button onClick={() => setFilter("To Check")}>To Check</button>
  </>
);

export default FilterBar;
