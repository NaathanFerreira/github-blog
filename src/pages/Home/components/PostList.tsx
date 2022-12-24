import { Box, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useGithubContext } from "../../../hooks/useGithubContext";
import { PostCard } from "./PostCard";

export function PostList() {
  const { posts } = useGithubContext();

  return (
    <SimpleGrid columns={2} gap={8} my="2rem">
      {posts.items?.map((post) => {
        return (
          <Link to={`/post/${post.number}`} key={post.id}>
            <PostCard post={post} />
          </Link>
        );
      })}
    </SimpleGrid>
  );
}
