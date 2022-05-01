import { Box } from "@chakra-ui/react";
// import PoolToolWidget from "./PoolToolWidget";

import Benefits from "../components/Benefits";
//import Blog from '../Blog';
import CallToAction from "../components/CallToAction";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import TopBar from "../components/TopBar";

function HomePage() {
  return (
    <Box overflow="auto">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&display=swap"
        rel="stylesheet"
      />
      <TopBar />
      <HowItWorks />
      <Benefits />
      <Faq />
      <CallToAction />
      <Footer />
    </Box>
  );
}

export default HomePage;
