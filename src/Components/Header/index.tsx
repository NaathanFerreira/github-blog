import { Image } from "@chakra-ui/react";
import HeaderImgCover from "../../assets/imgs/header_cover.png";

export function Header() {
  return <Image src={HeaderImgCover} width="100%" objectFit="contain" />;
}
