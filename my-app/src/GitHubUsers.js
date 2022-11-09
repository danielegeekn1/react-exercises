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
        <div>
          {users.map((user) => (
            <ul key={user.login}>
              <li>
                <Link to={`/users/${user.login}`}>{user.login}</Link>
              </li>
            </ul>
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
}
