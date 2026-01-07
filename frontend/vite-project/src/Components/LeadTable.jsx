const LeadTable = ({ leads, filter, loading }) => {
  if (loading) {
    return <p className="loading-text">Processing leads...</p>;
  }

  const filteredLeads = filter
    ? leads.filter(l => l.status === filter)
    : leads;

  if (!filteredLeads.length) {
    return <p className="empty-text">No leads found</p>;
  }

  return (
    <table className="lead-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Confidence</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {filteredLeads.map(l => (
          <tr key={l._id}>
            <td>{l.name}</td>
            <td>{l.country}</td>
            <td>{l.confidence}%</td>
            <td>
              <span
                className={
                  l.status === "Verified"
                    ? "status verified"
                    : "status check"
                }
              >
                {l.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadTable;
