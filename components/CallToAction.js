import { Box, Button, HStack, Link, Text } from "@chakra-ui/react";

const CallToAction = () => {
  return (
    <Box backgroundColor="#010920" h="180px">
      <HStack
        alignItems="center"
        background="linear-gradient(125.41deg, #3D6BF5 -4.22%, #C53DF5 120.93%)"
        height="120px"
        justifyContent={"space-around"}
      >
        <Text color="white" fontSize="40px" fontWeight="bold">
          Discover a new way to invest
        </Text>
        <Button backgroundColor="#010920" size="lg" textColor="white">
          <Link href="#about">Start Staking Now</Link>
        </Button>
      </HStack>
    </Box>
  );
};

export default CallToAction;
