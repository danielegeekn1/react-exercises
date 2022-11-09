//Create a GithubUser component that fetches the data of the username
// passed as a prop, and renders some of the data within a div tag.
//The API to query is https://api.github.com/users/${username}.

import { useGitHubUser } from "./useGitHubUser";

/*

export function GitHubUser({ username }) {
  const { data, error, loading, dataFetcher } = useGitHubUser();
  const handleGitHubUser = () => {
    dataFetcher(username);
  };
  return (
    <div>
      <button onClick={handleGitHubUser}>Load user data</button>
      {!error && !loading && (
        <div>
          {data.map((users) => (
            <div>
              <p>{users.login}</p>
              <p>{users.id}</p>
            </div>
          ))}
        </div>
      )}
      {loading && <p>Data are still loading, just a little patience</p>}
    </div>
  );
}
*/
export function GitHubUser({ username }) {
  const { data, error, loading, dataMutator } = useGitHubUser(username);
  /*
  const handleGitHubUser = () => {
    dataFetcher(username);
  };
  */
  const handleGitHubUser = () => {
    dataMutator();
  };
  return (
    <div>
      <button onClick={handleGitHubUser}>Load user data</button>
      {!error && !loading && (
        <div>
          {data.map((users) => (
            <ul key={users.id}>
              <li>{users.login}</li>
              <li>{users.id}</li>
            </ul>
          ))}
        </div>
      )}
      {loading && <p>Data are still loading, just a little patience</p>}
    </div>
  );
}
