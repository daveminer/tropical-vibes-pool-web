import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";

const stepContents = [
  {
    title: "First",
    content: "Lorem Ipsum",
  },
  {
    title: "Second",
    content: "Lorem Ipsum",
  },
  {
    title: "Third",
    content: "Lorem Ipsum",
  },
];

const StepCard = ({ idx }) => {
  console.log(idx);
  return (
    <Flex marginLeft="2rem" marginRight="2rem">
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
          <Text>{`${stepContents[idx].title} Step`}</Text>
        </HStack>
        <Box
          color="white"
          fontFamily="Montserrat"
          fontSize="14px"
          marginLeft="1.2rem"
          marginRight="1.2rem"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          tortor malesuada vel sed aenean facilisis. In turpis risus phasellus
          lorem. Diam nisl id tristique sit tristique duis. A vel velit habitant
          lectus ornare non sem purus. A vel velit habitant lectus ornare non
          sem purus.
        </Box>
      </Box>
    </Flex>
  );
};

export default StepCard;
