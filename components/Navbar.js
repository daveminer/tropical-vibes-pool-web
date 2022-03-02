import NextLink from 'next/link';
import { Box, Center, Flex, Img, Link, Spacer, Text } from '@chakra-ui/react'

const NavLink = ({ children, to = "/" }) => {

  return (
    <NextLink href={to}>
      <Link
        py={1}
        px={2}
        mr={5}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: 'white',
        }}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={2}
      bg={"blue.100"}
      h="5em"
    >
      <Flex align="center">
        <NavLink to="/">
          <Img src="/logo.png" />
        </NavLink>
      </Flex>
      <Box
        display={{ base: "block", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex justify={{ base: "space-between", sm: "space-around" }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </Flex>
      </Box>
    </Flex>
  )
};

export default Navbar;