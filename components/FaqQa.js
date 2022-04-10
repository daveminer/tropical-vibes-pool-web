import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const FaqQa = () => {
  return (
    <Box>
      <Grid column={2} gap={6}>
        <GridItem colEnd={1} colStart={1}>
          <Image
            color="linear-gradient(125.41deg, #3D6BF5 -4.22%, #C53DF5 120.93%)"
            height="35px"
            marginLeft="30px"
            marginTop="18px"
            src="/plus-sign.png"
          />
        </GridItem>
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
              marginTop="20px"
              marginRight="30px"
            >
              How long until we deliver your first blog post?
            </Text>
            <Text
              color="grey"
              fontFamily="Montserrat"
              fontSize="16px"
              marginBottom="25px"
              marginRight="50px"
            >
              It takes 2-3 weeks to get your first blog post ready. That
              includes the in-depth research & creation of your monthly content
              marketing strategy that we MUST do before writing your first blog
              post.
            </Text>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FaqQa;
