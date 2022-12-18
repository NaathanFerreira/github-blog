import { Box, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PostCard } from "./PostCard";

export function PostList() {
  const fakeArr = [1, 2, 3, 4];

  return (
    <SimpleGrid columns={2} gap={8} my="2rem">
      {fakeArr.map((post) => {
        return (
          <Link to="/post/1">
            <PostCard />
          </Link>
        );
      })}
    </SimpleGrid>
  );
}
