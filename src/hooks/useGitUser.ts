import { useState, useEffect } from "react";
import { api } from "../api/axios";
import { GithubUserData } from "../types/Github";

export function useGitUser(username: string) {
  const [user, setUser] = useState<GithubUserData>({} as GithubUserData);

  async function fetchUser() {
    const { data } = await api.get<GithubUserData>(`/users/${username}`);
    setUser({ ...data });
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return user;
}
