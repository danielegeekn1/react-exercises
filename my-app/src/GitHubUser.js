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

import { useEffect, useState } from "react";
export function GithubUser() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchDatas(username) {
    setLoading(true);
    setError(null);
    try {
      const resp = await fetch(`https://api.github.com/users/${username}`);
      const json = await resp.json();
      console.log(json);
      if (resp.status !== 200) {
        setError(new Error("new error"));
      }
      setData(data);
    } catch (error) {
      console.log(error);
      setError(error);
      setData(null);
    }
  }
  useEffect(() => {
    fetchDatas("gianmarcotoso");
  }, []);
  return (
    <div>
      <h1>Github user -useEffect 04 ex</h1>
      {!error && loading && <h1>It is working</h1>}
      {data.map((user) => (
        <ul>
          <li>{user.login}</li>
        </ul>
      ))}
    </div>
  );
}
