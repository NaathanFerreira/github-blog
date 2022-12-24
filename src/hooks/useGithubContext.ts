import { useContext } from "react";
import { GithubContext } from "../context/GithubContext";

export function useGithubContext() {
  const githubContext = useContext(GithubContext);
  return githubContext;
}
