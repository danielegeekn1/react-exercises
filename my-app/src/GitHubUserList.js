//ex useEffect-04
//Create a GithubUserList component that maintains an array of usernames,
//showing a `GithubUser` component for each username entered.
//The usernames should be added to the array using an input field and a button.
import { useEffect, useState } from "react";
export function GitHubUserList() {
  const [data, setData] = useState(null);
  async function fetchUsernames() {
    try {
      const resp = await fetch("https://api.github.com/users");
      const json = await resp.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchUsernames();
  }, []);
  return (
    <div>
      <ul>
        <li>{data.users}</li>
      </ul>
    </div>
  );
}
