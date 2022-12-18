import { Box, Input } from "@chakra-ui/react";

export function SearchForm() {
  return (
    <Box as="form" width="100%" mt="1rem">
      <Input
        p="12px 16px"
        placeholder="Buscar conteúdo"
        _placeholder={{ color: "gray.400" }}
        background="blue.900"
        focusBorderColor="blue.400"
        borderColor="blue.400"
        color="gray.200"
        size="lg"
      />
    </Box>
  );
}
