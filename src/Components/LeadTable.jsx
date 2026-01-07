const LeadTable = ({ leads, filter, loading }) => {
  if (loading) return <p>Processing...</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Confidence</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {leads
          .filter(l => !filter || l.status === filter)
          .map(l => (
            <tr key={l._id}>
              <td>{l.name}</td>
              <td>{l.country}</td>
              <td>{l.confidence}%</td>
              <td>{l.status}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default LeadTable;
