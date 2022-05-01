import BenefitList from "./BenefitList";

import { Image, SimpleGrid } from "@chakra-ui/react";

const Benefits = () => (
  <SimpleGrid
    backgroundColor="#010920"
    columns={2}
    paddingBottom="2rem"
    paddingTop="8rem"
    justifyContent="space-around"
  >
    <Image marginLeft="2rem" src="/techno-piggy-bank.png" />
    <BenefitList />
  </SimpleGrid>
);
export default Benefits;
