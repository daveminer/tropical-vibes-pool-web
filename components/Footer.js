import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Stack,
} from "@chakra-ui/react";

import {
  AiOutlineTwitter,
  AiOutlineMedium,
  AiOutlineMail,
} from "react-icons/ai";

import { FaDiscord, FaTelegramPlane } from "react-icons/fa";

const socialLinksAndIcons = [
  {
    link: "https://twitter.com/TropicPoolADA",
    IconComponent: AiOutlineTwitter,
  },
  {
    link: "https://medium.com/@TropicPoolADA",
    IconComponent: AiOutlineMedium,
  },
  {
    link: "https://discord.gg/S7NNxR2b53",
    IconComponent: FaDiscord,
  },
  {
    link: "http://t.me/tropicpoolada",
    IconComponent: FaTelegramPlane,
  },
  {
    link: "mailto: info@tropicpool.io",
    IconComponent: AiOutlineMail,
  },
];

const Footer = () => {
  return (
    <Flex
      flex={1}
      alignContent="center"
      backgroundColor="#010920"
      justifyContent="center"
      paddingBottom="2rem"
    >
      <Stack direction={"row"} spacing={6}>
        {socialLinksAndIcons.map(({ link, IconComponent }) => {
          return (
            <Link href={link} isExternal key={link}>
              <IconButton
                icon={<IconComponent />}
                bg="linear-gradient(125.41deg, #3D6BF5 -4.22%, #C53DF5 120.93%)"
                color="white"
                size="lg"
                fontSize={["25px"]}
              />
            </Link>
          );
        })}
      </Stack>
    </Flex>
  );
};

export default Footer;
