import { Flex } from '@chakra-ui/react';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Flex
        direction="column"
        align="center"
        m="0 auto"
      >
        {children}
        <Footer />
      </Flex>
    </div>
  )
};

export default Layout;