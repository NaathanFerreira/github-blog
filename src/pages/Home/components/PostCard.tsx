import { Box, Flex, Text } from "@chakra-ui/react";

export function PostCard() {
  return (
    <Flex
      direction="column"
      borderRadius="10px"
      background="blue.500"
      p={10}
      gap={6}
      maxH="260px"
    >
      <Flex gap={1} align="flex-start">
        <Text flex={1} color="gray.100" fontSize="1.1rem" fontWeight="700">
          Javascript data types and data structures
        </Text>
        <Text color="gray.400" fontSize=".9rem">
          Há 1 dia
        </Text>
      </Flex>
      <Box
        height="100%"
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="pre-wrap"
      >
        <Text color="gray.300" fontSize="1rem" pb={4}>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types: let foo = 42; // foo is now a number
          foo = 'bar'; // foo is now a string foo = true; // foo is now a
          boolean
        </Text>
      </Box>
    </Flex>
  );
}
