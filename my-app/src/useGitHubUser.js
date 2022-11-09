//Extract the logic to fetch a Github user's data from the GithubUser component from useEffect 03

//into a custom hook called useGithubUser.

//SWR-01 EX
//Modify the useGithubUser custom hook from Custom Hooks 03
// to use the useSWR hook to fetch the data of a Github user

//SWR-02 EX
//Modify the useGithubUser hook so that, if the username is null, no request is made.

//SWR-03 EX
//Modify the useGithubUser hook so that it returns a function
//to manually refetch the data when invoked.

import useSWR from "swr";
const fetcher = (url) => fetch(url).then((resp) => resp.json());
export function useGitHubUser(username) {
  const { resp, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );
  //FUNCTION TO REFRESH THE FETCHING OF THE DATA
  const mutateData = () => {
    mutate();
  };
  return {
    users: resp,
    error,
    loading: !resp && !error,
    dataMutator: mutateData,
  };
}
/*
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
/*
  return {
    data,
    error,
    loading,
    dataFetcher: fetcher,
  };
}
*/
//custom-hooks-04

//Modify the useGithubUser hook to return the function to fetch the data of a Github user
//along with the data of the user and the error and loading states
