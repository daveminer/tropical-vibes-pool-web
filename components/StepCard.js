import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";

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

const StepCard = ({ idx }) => {
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
          <Text>{stepContents[idx].title}</Text>
        </HStack>
        <Box
          color="white"
          fontFamily="Montserrat"
          fontSize="14px"
          marginLeft="1.2rem"
          marginRight="1.2rem"
        >
          {stepContents[idx].content}
        </Box>
      </Box>
    </Flex>
  );
};

export default StepCard;
