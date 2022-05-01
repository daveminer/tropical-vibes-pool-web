import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const FaqQa = ({ answer, question }) => {
  return (
    <Box>
      <Grid column={2} gap={6}>
        <GridItem
          backgroundColor="#111535"
          borderRadius={"20px"}
          colEnd={2}
          colStart={2}
        >
          <Grid column={2} gap={4}>
            <Text
              color="white"
              fontFamily="Montserrat"
              fontSize="22px"
              marginLeft="30px"
              marginTop="30px"
              marginRight="30px"
            >
              {question}
            </Text>
            <Text
              color="grey"
              fontFamily="Montserrat"
              fontSize="16px"
              marginBottom="30px"
              marginLeft="30px"
              marginRight="50px"
            >
              {answer}
            </Text>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FaqQa;
