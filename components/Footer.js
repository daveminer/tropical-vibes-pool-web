import { Box, Container, Stack, Link, IconButton } from "@chakra-ui/react";

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
    <Box>
      <Container spacing={2} justify={{ md: "space-between" }}>
        <Stack direction={"row"} spacing={6}>
          {socialLinksAndIcons.map(({ link, IconComponent }) => {
            return (
              <Link href={link} isExternal key={link}>
                <IconButton
                  icon={<IconComponent />}
                  bg="white"
                  // size='lg'
                  fontSize={["20px", "25px"]}
                />
              </Link>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
