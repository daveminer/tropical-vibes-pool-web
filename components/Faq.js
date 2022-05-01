import FaqQa from "./FaqQa";

import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

const faqContent = [
  {
    question:
      "Do I need to buy anything to stake with Tropical Vibes Stake Pool?",
    answer:
      "Only ADA cryptocurrency. Once you have ADA in your wallet you are able to delegate your stake. Your ADA never leaves your wallet!",
  },
  {
    question: "Are there any fees?",
    answer:
      "Tropical Vibes pool has a 2% fee on rewards; all of the proceeds go to pool maintenance, pool infrastructure upgrades and Plutus App development to support the Cardano ecosystem. Besides this there is also a one-time network fee of 2 ADA to join the pool.",
  },
  {
    question: "Are there any risks involved in staking with Tropcial Vibes",
    answer:
      "No - your funds always remain safe in your wallet. Never send your ADA to anyone for any reason related to staking! We apply industry standards and work dilligently to continually improve the security posture of Tropical Vibes Stake Pool.",
  },
  {
    question: "How do I claim my rewards?",
    answer:
      "Rewards are paid out to your wallet once every epoch (5 days). These rewards will show up in the account you are staking from.",
  },
];

const Faq = () => {
  return (
    <Box id="faq" backgroundColor="#010920">
      <Flex
        color="#FFFFFF"
        fontFamily="Montserrat"
        fontSize="55px"
        fontWeight="800"
        justifyContent={"center"}
        marginBottom="4rem"
        paddingTop="4rem"
      >
        FAQ
      </Flex>
      <Grid
        column={{ base: 1, md: 2 }}
        gap={68}
        marginLeft="4rem"
        marginRight="4rem"
        paddingBottom="4rem"
      >
        {faqContent.map((topic, idx) => (
          <GridItem
            backgroundColor="#111535"
            borderRadius={"20px"}
            colEnd={{ base: 1, md: (idx % 2) + 1 }}
            colStart={{ base: 1, md: (idx % 2) + 1 }}
            key={`faq-${idx}`}
            display="inline-flex"
          >
            <FaqQa answer={topic.answer} question={topic.question} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Faq;
