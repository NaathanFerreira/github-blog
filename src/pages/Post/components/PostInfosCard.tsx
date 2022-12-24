import { Flex, Icon, Text } from "@chakra-ui/react";
import {
  FaCalendarDay,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useGitUser } from "../../../hooks/useGitUser";
import { Post } from "../../../types/Blog";
import { formatDistanceDate } from "../../../utils/Dates";

interface PostInfosCardProps {
  post: Post;
}

export function PostInfosCard({ post }: PostInfosCardProps) {
  const author = useGitUser(post.user.login);

  return (
    <Flex
      direction="column"
      gap={5}
      p={10}
      background="blue.600"
      borderRadius="10px"
      maxH="220px"
    >
      <Flex
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        color="blue.200"
        fontSize=".8rem"
        fontWeight="700"
      >
        <Link to="/">
          <Flex alignItems="center">
            <Icon as={IoIosArrowBack} mr={2} fontSize="1rem" />
            VOLTAR
          </Flex>
        </Link>
        <Flex
          alignItems="center"
          as="a"
          href={post.html_url}
          target="_blank"
          cursor="pointer"
        >
          VER NO GITHUB
          <Icon as={FaExternalLinkAlt} ml={2} fontSize="1rem" />
        </Flex>
      </Flex>
      <Text fontSize="1.2rem" color="gray.100" fontWeight="700">
        {post.title}
      </Text>
      <Flex gap={8}>
        <Flex alignItems="center" fontSize="1rem" color="gray.400">
          <Icon as={FaGithub} mr={2} />
          {author.name}
        </Flex>
        <Flex alignItems="center" fontSize="1rem" color="gray.400">
          <Icon as={FaCalendarDay} mr={2} />
          {formatDistanceDate(post.updated_at)}
        </Flex>
        <Flex alignItems="center" fontSize="1rem" color="gray.400">
          <Icon as={FaComment} mr={2} /> {post.comments} comentários
        </Flex>
      </Flex>
    </Flex>
  );
}
