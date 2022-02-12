import { Container, Img, Text } from "@chakra-ui/react";
import PoolToolWidget from "./PoolToolWidget";

const Welcome = () => {

  return (
    <Container>
      <Img src='./palm-tree.png' boxSize='xs' />
      <Text fontSize="3xl" p={4}>
        Your vacation destination for staking Cardano
      </Text>
      <PoolToolWidget />
    </Container>
  );
};

export default Welcome;