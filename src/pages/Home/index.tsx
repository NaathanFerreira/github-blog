import { Flex, Text } from "@chakra-ui/react";
import { useGithubContext } from "../../hooks/useGithubContext";
import { PostList } from "./components/PostList";
import { SearchForm } from "./components/SearchForm";
import { UserProfileCard } from "./components/UserProfileCard";

export function Home() {
  const { posts } = useGithubContext();

  return (
    <Flex direction="column" mt="-100px">
      <UserProfileCard />
      <Flex justifyContent="space-between" mt="3rem">
        <Text fontWeight="700" fontSize="1.1rem" color="gray.100">
          Publicações
        </Text>
        <Text fontSize=".9rem" color="gray.400">
          {posts.total_count} publicações
        </Text>
      </Flex>
      <SearchForm />
      <PostList />
    </Flex>
  );
}
