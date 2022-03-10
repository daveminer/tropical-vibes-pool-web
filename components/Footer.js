import {
  Box,
  Container,
  Stack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        pt={12}
        pb={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'https://twitter.com/TropicPoolADA'} isExternal>Twitter</Link>
          <Link href={'https://medium.com/@TropicPoolADA'} isExternal>Blog</Link>
          <Link href={'https://discord.gg/S7NNxR2b53'} isExternal>Discord</Link>
          <Link href={'http://t.me/tropicpoolada'} isExternal>Telegram</Link>
          <Link href={'mailto: info@tropicpool.io'} isExternal>Email Us</Link>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;