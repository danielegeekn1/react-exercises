//Create a GithubUser component that fetches the data of the username
// passed as a prop, and renders some of the data within a div tag.
//The API to query is https://api.github.com/users/${username}.

/*import { useEffect, useState } from "react";

export function GitHubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  async function fetchData() {
    try {
      const resp = await fetch(` https://api.github.com/users/${username}`);
      const json = await resp.json();
      setData(json);
    } catch (error) {
      setError(error);
      console.log(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData(username);
  }, [username]);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {data && <p>{data.username}</p>}
    </div>
  );
}
*/
/*
import { useEffect, useState } from "react";
export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  async function fetchData(username) {
    try {
      const resp = await fetch(`https://api.github.com/users/${username}`);
      const data = await resp.json();
      console.log(data);

      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData(username);
  }, [username]);
  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.nodeid}</h2>
    </div>
  );
}
*/
