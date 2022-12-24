import { Box, Flex, Text } from "@chakra-ui/react";
import { Post } from "../../../types/Blog";
import { formatDistanceDate } from "../../../utils/Dates";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Flex
      direction="column"
      borderRadius="10px"
      background="blue.500"
      p={10}
      gap={6}
      maxH="260px"
    >
      <Flex gap={3} align="flex-start">
        <Text flex={1} color="gray.100" fontSize="1.1rem" fontWeight="700">
          {post.title}
        </Text>
        <Text color="gray.400" fontSize=".9rem">
          {formatDistanceDate(post.updated_at)}
        </Text>
      </Flex>
      <Box
        height="100%"
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="pre-wrap"
      >
        <Text color="gray.300" fontSize="1rem" pb={4}>
          {post.body}
        </Text>
      </Box>
    </Flex>
  );
}
