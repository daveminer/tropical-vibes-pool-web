import BenefitList from "./BenefitList";

import { Image, SimpleGrid } from "@chakra-ui/react";

const Benefits = () => (
  <SimpleGrid
    backgroundColor="#010920"
    columns={{ base: 1, lg: 2 }}
    paddingBottom="2rem"
    paddingTop="8rem"
    paddingLeft="2rem"
    paddingRight="2rem"
    justifyContent="space-around"
  >
    <Image
      marginLeft="2rem"
      src="/techno-piggy-bank.png"
      display={{ base: "none", lg: "flex" }}
    />
    <BenefitList />
  </SimpleGrid>
);
export default Benefits;
