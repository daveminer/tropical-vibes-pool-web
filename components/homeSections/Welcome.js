import { Container, Img, Text } from "@chakra-ui/react";

const Welcome = () => {

  return (
    <Container>
      <Img src='./palm-tree.png' boxSize='xs' />
      <Text fontSize="3xl" p={4}>
        Your vacation destination for staking Cardano
      </Text>
    </Container>
  );
};

export default Welcome;