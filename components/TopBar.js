import ActionButton from "./ActionButton";
import Banner from "../components/Banner";
import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const links = [
  { name: "About", href: "about" },
  { name: "FAQ", href: "faq" },
];

const NavLink = ({ children, href }) => (
  <Link
    textColor={"white"}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={href}
  >
    {children}
  </Link>
);

const TopBar = () => (
  <Box>
    <Flex padding="2rem" position={"absolute"} w="full">
      <HStack justifyContent={{ base: "center", md: "inherit" }}>
        <Box
          boxSize="48px"
          marginRight="1rem"
          minHeight="48px"
          minWidth="48px"
          display={{ base: "none", md: "flex" }}
        >
          <Image src="dot-logo.png" alt="dot-logo" />
        </Box>
        <Text
          color="white"
          fontFamily="Montserrat"
          fontSize={{ base: "28px", md: "32px" }}
          fontStyle="italic"
          textAlign="center"
          overflow="visible"
        >
          Tropical Vibes
        </Text>
        <Text
          color="white"
          fontFamily="Montserrat"
          fontSize={{ base: "28px", md: "32px" }}
          fontStyle="italic"
          textAlign="center"
          overflow="visible"
          display={{ base: "none", lg: "flex" }}
        >
          Stake Pool
        </Text>
      </HStack>
      <Spacer display={{ base: "none", md: "flex" }} />
      <Box>
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <NavLink key={link.name} href={`#${link.href}`}>
              {link.name}
            </NavLink>
          ))}
          <ActionButton
            content="Get Started"
            onClick="window.location.href='#about'"
          ></ActionButton>
        </HStack>
      </Box>
    </Flex>
    <Banner />
  </Box>
);

export default TopBar;
