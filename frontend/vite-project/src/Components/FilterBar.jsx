const FilterBar = ({ setFilter }) => (
  <div className="filter-bar">
    <button onClick={() => setFilter("")}>All</button>
    <button onClick={() => setFilter("Verified")}>Verified</button>
    <button onClick={() => setFilter("To Check")}>To Check</button>
  </div>
);

export default FilterBar;
