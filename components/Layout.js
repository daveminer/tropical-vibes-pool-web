import { Box, Flex} from '@chakra-ui/react';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
      <Flex
        direction="column"
        align="center"
        m="0 auto"
        h="100vh"
      >
        <Box style={{flex:"1 0 auto"}}>
          {children}
        </Box>
        <Footer />
      </Flex>
  )
};

export default Layout;