import { Flex, Text } from "@chakra-ui/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import { usePost } from "../../hooks/usePost";
import { PostInfosCard } from "./components/PostInfosCard";

export function Post() {
  const { id } = useParams();

  const { post, loading } = usePost(Number(id));

  return (
    <Flex direction="column" mt="-100px">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <PostInfosCard post={post} />
          <Text fontSize="1rem" fontWeight="700" color="gray.300" mt={10} p={5}>
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </Text>
        </>
      )}
    </Flex>
  );
}
