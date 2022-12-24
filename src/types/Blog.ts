import { GithubUserData } from "./Github";

export type Post = {
  id: number;
  title: string;
  updated_at: string;
  body: string;
  html_url: string;
  user: GithubUserData;
  comments: number;
  number: number;
};

export type Posts = {
  items: Post[];
  total_count: number;
};
