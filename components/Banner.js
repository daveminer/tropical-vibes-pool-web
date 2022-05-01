import ActionButton from "./ActionButton";
import { Box } from "@chakra-ui/react";

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
    />
    <BurstOne />
    <Box left="150px" position="absolute" top="262px">
      <div>
        <Box
          color="#FFFFFF"
          fontFamily="Montserrat"
          fontSize="55px"
          fontWeight="800"
        >
          Invest in a balanced
        </Box>
        <Box
          color="#FFFFFF"
          fontFamily="Montserrat"
          fontSize="24px"
          margin="20px 0px"
          width="404px"
        >
          Open and Sustainable Financial World with Cardano
        </Box>
      </div>
      <div className="v2_26">
        <div className=""></div>
        <ActionButton content="Delegate Now" />
      </div>
    </Box>
  </>
);

export default Banner;
