
import { Box } from "@chakra-ui/react";
// import PoolToolWidget from "./PoolToolWidget";

import Banner from '../Banner';
import Benefits from '../Benefits';
//import Blog from '../Blog';
import CallToAction from '../CallToAction';
import Faq from '../Faq';
import Footer from '../Footer';
import HowItWorks from '../HowItWorks';
import TopBar from '../TopBar';

const Welcome = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&display=swap" rel="stylesheet" />
      <Box>
        <TopBar />
        <Banner />
        <HowItWorks />
      </Box>
      <Benefits />
      <Faq />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Welcome;
