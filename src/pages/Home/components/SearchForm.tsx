import { Box, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useGithubContext } from "../../../hooks/useGithubContext";

type searchFormData = {
  postTitle: string;
};

export function SearchForm() {
  const { register, handleSubmit } = useForm<searchFormData>();

  const { fetchPosts } = useGithubContext();

  async function handleSearchPost(data: searchFormData) {
    await fetchPosts(data.postTitle);
  }

  return (
    <Box
      as="form"
      width="100%"
      mt="1rem"
      onSubmit={handleSubmit(handleSearchPost)}
    >
      <Input
        p="12px 16px"
        placeholder="Buscar conteúdo"
        _placeholder={{ color: "gray.400" }}
        background="blue.900"
        focusBorderColor="blue.400"
        borderColor="blue.400"
        color="gray.200"
        size="lg"
        {...register("postTitle")}
      />
    </Box>
  );
}
