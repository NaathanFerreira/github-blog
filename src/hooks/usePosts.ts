import { useState, useEffect } from "react";
import { api } from "../api/axios";
import { Posts } from "../types/Blog";

export function usePosts() {
  const [posts, setPosts] = useState<Posts>({} as Posts);

  async function fetchPosts(query?: string) {
    const { data } = await api.get(
      `/search/issues?q=${query || ""}%20repo:naathanferreira/github-blog`
    );
    const posts: Posts = {
      items: data.items,
      total_count: data.total_count,
    };
    setPosts(posts);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, fetchPosts };
}
