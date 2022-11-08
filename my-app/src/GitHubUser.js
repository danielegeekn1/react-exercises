//Create a GithubUser component that fetches the data of the username
// passed as a prop, and renders some of the data within a div tag.
//The API to query is https://api.github.com/users/${username}.
import { useEffect, useState } from "react";
export function GithubUser({ username }) {
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
      <h1>{data.login}</h1>
      <h2>{data.nodeid}</h2>
    </div>
  );
}
