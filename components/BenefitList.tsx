import { Box, Button, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react";

const benefits = ["Reliable Servers", "Single Pool Operator", "Automatic Staking Returns", "Financially Equitable for All"]

const BenefitList = () => {
  return (
    <Grid columns={3} alignContent='center'>
      <GridItem colEnd={2} colStart={2}>
        <Stack>
          {
            benefits.map((benefit, idx) =>

              <Flex justifyContent='left' paddingBottom='2rem'>
                <Flex>
                  <Button
                    background="linear-gradient(125.41deg, #3D6BF5 -4.22%, #C53DF5 120.93%)"
                    borderRadius="25px"
                    marginRight="2rem"
                  />
                </Flex>
                <Text
                  color="#FFFFFF"
                  fontFamily="Montserrat"
                  fontSize="24px"
                  marginBottom="1.5rem"
                >
                  {benefit}
                </Text>
              </Flex>

            )
          }
        </Stack >
      </GridItem>
    </Grid>
  )
};

export default BenefitList;
