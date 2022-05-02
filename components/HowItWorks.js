import { Box, Flex, Stack } from "@chakra-ui/react";

import BurstTwo from "./decorations/BurstTwo";
import StepCard from "./StepCard";

const HowItWorks = () => {
  const stepContents = [
    {
      title: "Create a free wallet",
      content:
        "Head to https://yoroi-wallet.com/ and install the wallet for your browser. Once installed, open the Yoroi browser extension and follow the instructions to create your wallet.",
    },
    {
      title: "Get ADA",
      content:
        "You will need to send ADA to your new wallet. The easiest way to get some is to purchase from a centralized exchange such as https://binance.com, https://coinbase.com, or https://kraken.com.",
    },
    {
      title: "Stake ADA on Tropical Vibes",
      content:
        'Open your Yoroi wallet and click on "Delegation List". In the "Search By Id or Name" box, type the pool ticker TROPC. Click on "Delegate" to enter how much ADA you want to stake and you\'re done! Rewards accrue automatically.',
    },
  ];

  return (
    <Box id="about" backgroundColor="#010920" flex={1} paddingTop="4rem">
      <BurstTwo />
      <Flex
        color="#FFFFFF"
        fontFamily="Montserrat"
        fontSize="55px"
        fontWeight="800"
        justifyContent={"center"}
        marginBottom="4rem"
        textAlign="center"
      >
        HOW IT WORKS
      </Flex>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent={"center"}
        marginLeft="1.2rem"
        marginRight="1.2rem"
        spacing="4rem"
      >
        {stepContents.map((stepContent, idx) => (
          <StepCard
            stepContent={stepContent}
            key={`stake-step-${idx}`}
            idx={idx}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default HowItWorks;
