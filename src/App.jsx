import { useState } from "react";
import LeadForm from "./Components/LeadForm";
import LeadTable from "./Components/LeadTable";
import FilterBar from "./Components/FilterBar";

function App() {
  const [leads, setLeads] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <h1>Smart Lead Automation</h1>
      <LeadForm setLeads={setLeads} setLoading={setLoading} />
      <FilterBar setFilter={setFilter} />
      <LeadTable leads={leads} filter={filter} loading={loading} />
    </>
  );
}

export default App;
