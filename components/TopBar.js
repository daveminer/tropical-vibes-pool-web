import ActionButton from "./ActionButton";
import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const links = ["Home", "About", "Blog", "FAQ"];

const NavLink = ({ children }) => (
  <Link
    textColor={"white"}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const TopBar = () => (
  <Box>
    <Flex padding="2rem" position={"absolute"} w="full">
      <HStack>
        <Box boxSize="48px" marginRight="1rem" minHeight="48px" minWidth="48px">
          <Image src="dot-logo.png" alt="dot-logo" />
        </Box>
        <Text
          color="white"
          fontFamily="Montserrat"
          fontSize="32px"
          fontStyle="italic"
        >
          Tropical Vibes Stake Pool
        </Text>
      </HStack>
      <Spacer />
      <Box>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <NavLink key={link} children={{}}>
              {link}
            </NavLink>
          ))}
          <ActionButton content="Start Staking" />
        </HStack>
      </Box>
    </Flex>
  </Box>
);

export default TopBar;
