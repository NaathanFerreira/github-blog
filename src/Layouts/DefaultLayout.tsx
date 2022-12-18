import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Header } from "../Components/Header";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Box width="100%" maxW={1360} mx="auto" px="2">
        <Outlet />
      </Box>
    </>
  );
}
