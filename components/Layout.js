import { Flex } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Flex
        direction="column"
        align="center"
        m="0 auto"
      >
        {children}
      </Flex>
    </div>
  )
};

export default Layout;