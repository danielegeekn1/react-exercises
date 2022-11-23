import { Outlet, useParams } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";

export function ShowGitHubUser() {
  const { username } = useParams();
  return (
    <div>
      <GitHubUser username={username} />
      <Outlet />
    </div>
  );
}
