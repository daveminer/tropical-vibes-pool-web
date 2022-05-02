import { Box, Button, HStack, Text } from "@chakra-ui/react";

const StepCard = ({ stepContent, idx }) => {
  return (
    <Box>
      <HStack
        color="#FFFFFF"
        fontFamily="Montserrat"
        fontSize="24px"
        marginBottom="2rem"
      >
        <Button
          background="linear-gradient(125.41deg, #3D6BF5 -4.22%, #C53DF5 120.93%)"
          borderRadius="25px"
          marginRight="1rem"
        >
          {idx + 1}
        </Button>
        <Text>{stepContent.title}</Text>
      </HStack>
      <Box color="white" fontFamily="Montserrat" fontSize="14px">
        {stepContent.content}
      </Box>
    </Box>
  );
};

export default StepCard;
