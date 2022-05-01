import { Box, Flex, HStack } from "@chakra-ui/react";

import BurstTwo from "./decorations/BurstTwo";
import StepCard from "./StepCard";

const stakingSteps = ["one", "two", "three"];

const HowItWorks = () => (
  <Box id="about" backgroundColor="#010920" flex={1} paddingTop="4rem">
    <BurstTwo />
    <Flex
      color="#FFFFFF"
      fontFamily="Montserrat"
      fontSize="55px"
      fontWeight="800"
      justifyContent={"center"}
      marginBottom="4rem"
    >
      HOW IT WORKS
    </Flex>
    <HStack justifyContent={"center"} spacing="4rem">
      {stakingSteps.map((step, idx) => (
        <StepCard key={`stake-step-${idx}`} idx={idx} />
      ))}
    </HStack>
  </Box>
);

export default HowItWorks;
