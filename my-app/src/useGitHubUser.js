//Extract the logic to fetch a Github user's data from the GithubUser component from useEffect 03

import { useState } from "react";

//into a custom hook called useGithubUser.
export function useGitHubUser() {
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
  /*
  useEffect(() => {
    fetcher("gianmarcotoso");
  }, []);
  */
  return {
    data,
    error,
    loading,
    dataFetcher: fetcher,
  };
}
//custom-hooks-04

//Modify the useGithubUser hook to return the function to fetch the data of a Github user
//along with the data of the user and the error and loading states
