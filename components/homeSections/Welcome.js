import { Container, Img, Text } from '@chakra-ui/react';
import PoolToolWidget from './PoolToolWidget';

const Welcome = () => {

  return (
    <Container style={{ textAlign: 'center' }}>
      <Img src='/logo.png' style={{ marginTop: '2rem', marginLeft: 'auto', marginRight: 'auto' }} />
      <Img src='./palm-tree.png' height='30%' width='30%' style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '5rem' }} />
      <Text fontSize='3xl' style={{ marginTop: '5rem', textAlign: 'center' }}>
        Coming soon!
      </Text>
    </Container>
  );
};

export default Welcome;