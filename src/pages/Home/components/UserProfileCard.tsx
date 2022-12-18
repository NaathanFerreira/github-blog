import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from "react-icons/fa";

export function UserProfileCard() {
  return (
    <Flex
      gap={8}
      p={10}
      background="blue.600"
      borderRadius="10px"
      alignItems="center"
      maxH="220px"
    >
      <Image
        boxSize="148px"
        src="https://avatars.githubusercontent.com/u/35970600?v=4"
        borderRadius="8px"
      />
      <Flex flex={1} direction="column" gap={3} height="100%">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontWeight="700" fontSize="2rem" color="gray.100">
            Nathan Ferreira
          </Text>
          <Text
            as="a"
            color="blue.200"
            fontWeight="700"
            fontSize=".9rem"
            cursor="pointer"
            href="https://github.com/NaathanFerreira"
            target="_blank"
          >
            GITHUB
            <Icon as={FaExternalLinkAlt} ml={2} />
          </Text>
        </Flex>
        <Text fontSize="1rem" color="gray.300">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </Text>
        <Flex gap={8}>
          <Text fontSize="1rem" color="gray.100">
            <Icon as={FaGithub} mr={2} />
            NaathanFerreira
          </Text>
          <Text fontSize="1rem" color="gray.100">
            <Icon as={FaBuilding} mr={2} />
            PCA ltda
          </Text>
          <Text fontSize="1rem" color="gray.100">
            <Icon as={FaUserFriends} mr={2} />
            24 seguiroes
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
