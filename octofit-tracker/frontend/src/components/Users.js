
const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('Fetching from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Fetched users:', results);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-4">Users</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr><td colSpan="4" className="text-center">No users found.</td></tr>
              ) : (
                data.map((item, idx) => (
                  <tr key={item.id || idx}>
                    <td>{idx + 1}</td>
                    <td>{item.username || item.name || '-'}</td>
                    <td>{item.email || '-'}</td>
                    <td><button className="btn btn-sm btn-primary" onClick={() => alert(JSON.stringify(item, null, 2))}>View</button></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
