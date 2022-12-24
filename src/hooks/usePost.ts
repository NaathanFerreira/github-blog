import { useState, useEffect } from "react";
import { api } from "../api/axios";
import { Post } from "../types/Blog";

export function usePost(id: number) {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<Post>({} as Post);

  async function fetchPost() {
    setLoading(true);
    await api
      .get(`/repos/naathanferreira/github-blog/issues/${id}`)
      .then(({ data }) => {
        setPost(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return { post, loading };
}
