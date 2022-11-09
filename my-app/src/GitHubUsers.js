import { Link, Outlet } from "react-router-dom";
import { useGitHubUsers } from "./useGitHubUsers";

export function GitHubUsers() {
  const { users, error, isLoading, onRefresh } = useGitHubUsers();
  return (
    <div>
      <button onClick={onRefresh}>Refresh the data</button>
      {isLoading && <h3>Loading</h3>}
      {error && <h3>Error has occured</h3>}
      {users && !error && (
        <ul>
          {users.map((user) => (
            <div>
              <li key={user.login}>
                <Link to={`/users/${user.login}`}>{user.login}</Link>
              </li>
              <li>{user}</li>
            </div>
          ))}
        </ul>
      )}
      <Outlet />
    </div>
  );
}
