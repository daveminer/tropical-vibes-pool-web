import ActionButton from "./ActionButton";
import { Box, Text } from "@chakra-ui/react";

import BurstOne from "./decorations/BurstOne";

const Banner = () => (
  <>
    <Box
      height="820px"
      backgroundImage={"landing.png"}
      backgroundPosition="center"
      backgroundSize="cover"
      opacity={1}
      zIndex={-2}
    >
      <BurstOne />
      <Box
        paddingLeft={{ base: 0, md: "7rem" }}
        paddingTop={{ base: "14rem", md: "14rem" }}
        justifyContent={{ base: "center", md: "inherit" }}
      >
        <Text
          color="#FFFFFF"
          fontFamily="Montserrat"
          fontSize={{ base: "32px", md: "55px" }}
          fontWeight="800"
          marginLeft={{ base: "2rem", md: "0rem" }}
          marginRight={{ base: "2rem", md: "0rem" }}
          textAlign={{ base: "center", md: "inherit" }}
        >
          Invest with ADA
        </Text>
        <Text
          color="#FFFFFF"
          fontFamily="Montserrat"
          fontSize={{ base: "20px", md: "24px" }}
          margin="20px 0px"
          textAlign={{ base: "center", md: "inherit" }}
        >
          For a Balanced, Open and Sustainable Future
        </Text>
        <Box
          display="flex"
          justifyContent={{ base: "center", md: "inherit" }}
          marginTop="4rem"
          marginLeft={{ base: "0rem", md: "2rem" }}
        >
          <ActionButton content="Delegate Now" />
        </Box>
      </Box>
    </Box>
  </>
);

export default Banner;
