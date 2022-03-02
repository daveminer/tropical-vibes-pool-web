import { Box, Text } from '@chakra-ui/react'
import Welcome from '../components/homeSections/Welcome'

function HomePage() {
  return (
    <Box >
      <Welcome />
    </Box>
  )
}

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    console.log("PROD");
    return { notFound: true };
  }
  console.log("DEV");
  //return { props: {} };
  return { notFound: true };
};

export default HomePage
