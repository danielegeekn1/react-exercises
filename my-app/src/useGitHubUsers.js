import useSWR from "swr";
const fetcher = (url) => fetch(url).then((resp) => resp.json());

export function useGitHubUsers() {
  const { data, error, mutate } = useSWR(
    "http://api.github.com/users",
    fetcher
  );
  function onHandleRefreshUser() {
    mutate();
  }
  return {
    users: data,
    error,
    isLoading: !data && !error,
    onRefresh: onHandleRefreshUser,
  };
}
