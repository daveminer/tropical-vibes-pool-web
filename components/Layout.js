import { Flex } from '@chakra-ui/react';
import Navbar from './Navbar';

const Layout = ({children}) => {
  return (
    <div className="content">
      <Flex
        direction="column"
        align="center"
        m="0 auto"
      >
        <Navbar/>
        {children}
      </Flex>
    </div>
  )
};

export default Layout;