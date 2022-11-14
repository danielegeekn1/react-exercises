//ex useEffect-04
//Create a GithubUserList component that maintains an array of usernames,
//showing a `GithubUser` component for each username entered.
//The usernames should be added to the array using an input field and a button.
import { useEffect, useState } from "react";
export function GitHubUserList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchUsernames() {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch("https://api.github.com/users");
      const json = await resp.json();
      if (resp.status === 200) {
        console.log(json);
        setData(json);
      } else {
        setError(new Error("data not fetched"));
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsernames();
  }, []);
  return (
    <div>
      {!error && !loading && (
        <div>
          {data.map((users) => (
            <li>{users.login}</li>
          ))}
        </div>
      )}
      {!error && loading && <p>Data are still loading</p>}
      <input type="text" />
      <button onClick={fetchUsernames}>Add usernames</button>
    </div>
  );
}

//useEffect-04 ex
//Create a GithubUserList component that maintains an array of usernames,
//showing a GithubUser component for each username entered.
//The usernames should be added to the array using an input field and a button
