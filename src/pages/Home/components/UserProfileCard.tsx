import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from "react-icons/fa";
import { useGithubContext } from "../../../hooks/useGithubContext";

export function UserProfileCard() {
  const { user } = useGithubContext();

  return (
    <Flex
      gap={8}
      p={10}
      background="blue.600"
      borderRadius="10px"
      alignItems="center"
      maxH="220px"
    >
      <Image boxSize="148px" src={user.avatar_url} borderRadius="8px" />
      <Flex flex={1} direction="column" gap={3} height="100%">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="700" fontSize="2rem" color="gray.100">
            {user.name}
          </Text>
          <Text
            as="a"
            color="blue.200"
            fontWeight="700"
            fontSize=".9rem"
            cursor="pointer"
            href={user.html_url}
            target="_blank"
          >
            GITHUB
            <Icon as={FaExternalLinkAlt} ml={2} />
          </Text>
        </Flex>
        <Text fontSize="1rem" color="gray.300">
          {user.bio}
        </Text>
        <Flex gap={8}>
          <Flex alignItems="center" fontSize="1rem" color="gray.100">
            <Icon as={FaGithub} mr={2} />
            {user.login}
          </Flex>
          <Flex alignItems="center" fontSize="1rem" color="gray.100">
            <Icon as={FaBuilding} mr={2} />
            {user.company}
          </Flex>
          <Flex alignItems="center" fontSize="1rem" color="gray.100">
            <Icon as={FaUserFriends} mr={2} />
            {user.followers} followers
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
