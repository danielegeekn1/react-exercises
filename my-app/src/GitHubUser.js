//Create a GithubUser component that fetches the data of the username
// passed as a prop, and renders some of the data within a div tag.
//The API to query is https://api.github.com/users/${username}.

import { useEffect, useState } from "react";

/*
import { useEffect, useState } from "react";
export function GithubUser(username) {
  const [data, setData] = useState(null);
  async function fetchData(username) {
    try {
      const resp = await fetch(`https://api.github.com/users/${username}`);
      const json = await resp.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData("gianmarcotoso");
  }, [username]);
  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.nodeid}</h2>
    </div>
  );
}
*/
export function GitHubUser() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, isLoading] = useState(true);
  const fetcher = async (username) => {
    try {
      const resp = await fetch(`https://api.github.com/users/${username}`);
      const json = await resp.json();
      if (resp.status !== 200) {
        setError(new Error("new error"));
      } else {
        setData(json);
        console.log(json);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setData(null);
      isLoading(false);
    }
  };
  useEffect(() => {
    fetcher("gianmarcotoso");
  }, []);
  return (
    <div>
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
