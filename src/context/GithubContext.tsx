import { createContext, ReactNode, useState } from "react";
import { useGitUser } from "../hooks/useGitUser";
import { usePosts } from "../hooks/usePosts";
import { GithubUserData } from "../types/Github";
import { Post, Posts } from "../types/Blog";

interface GithubContextType {
  user: GithubUserData;
  posts: Posts;
  fetchPosts: (query: string) => Promise<void>;
}

export const GithubContext = createContext({} as GithubContextType);

interface GithubContextProviderProps {
  children: ReactNode;
}

export function GithubContextProvider({
  children,
}: GithubContextProviderProps) {
  const user = useGitUser("naathanferreira");
  const { posts, fetchPosts } = usePosts();

  return (
    <GithubContext.Provider value={{ user, posts, fetchPosts }}>
      {children}
    </GithubContext.Provider>
  );
}
