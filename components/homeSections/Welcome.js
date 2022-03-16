import { Flex, Img, Text } from '@chakra-ui/react';
import PoolToolWidget from './PoolToolWidget';

const Welcome = () => {

  return (
    <Flex 
      align="center" 
      direction="column"
    >
      <Img 
        src='/logo.png'
        mx="auto"
        mt="2rem"
      />
      <Img 
        src='./palm-tree.png' 
        height={['25%', '25%', '25%', '20%']}
        width={['25%', '25%', '25%', '20%']} 
        mx="auto"
        mt="4rem"
      />
      <Text 
        fontSize='3xl' 
        mt="5rem"
        align="center"
      >
        Coming soon!
      </Text>
    </Flex>
  );
};

export default Welcome;