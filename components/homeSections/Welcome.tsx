import { ReactNode } from 'react';
import { Box, Button, Flex, Grid, GridItem, HStack, Image, Link, SimpleGrid, Spacer, Text, useColorModeValue } from "@chakra-ui/react";
// import PoolToolWidget from "./PoolToolWidget";
import ActionButton from '../ActionButton';
import BenefitList from '../BenefitList';
import BlogCard from '../BlogCard';
import FaqQa from '../FaqQa';
import Footer from '../Footer';
import StepCard from '../StepCard';

const blogs = [
  {
    title: 'Egestas Tortor Velit',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tortor malesuada vel sed aenean facilisis. In turpis risus phasellus lorem. Diam nisl id tristique sit tristique duis. A vel velit'
  },
  {
    title: 'Diam Nisl Id Tristique',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tortor malesuada vel sed aenean facilisis. In turpis risus phasellus lorem. Diam nisl id tristique sit tristique duis. A vel velit'
  },
  {
    title: 'Risus Phasellus',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tortor malesuada vel sed aenean facilisis. In turpis risus phasellus lorem. Diam nisl id tristique sit tristique duis. A vel velit'
  }
];
const links = ['Home', 'About', 'Blog', 'FAQ'];
const stakingSteps = ['one', 'two', 'three'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    textColor={'white'}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

const Welcome = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&display=swap" rel="stylesheet" />
      <Box>
        <Box>
          <Flex padding='2rem' position={'absolute'} w='full'>
            <HStack>
              <Box
                boxSize='48px'
                marginRight='1rem'
                minHeight='48px'
                minWidth='48px'>
                <Image src='dot-logo.png' alt='dot-logo' />
              </Box>
              <Text
                color='white'
                fontFamily='Montserrat'
                fontSize='32px'
                fontStyle='italic'
              >
                Tropical Vibes Stake Pool
              </Text>
            </HStack>
            <Spacer />
            <Box>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {links.map((link) => (
                  <NavLink key={link} children={{}}>{link}</NavLink>
                ))}
                <ActionButton content='Start Staking' />
              </HStack>
            </Box>
          </Flex>
        </Box>
        <Box
          width='100%'
          height='825px'
          backgroundImage='landing.png'
          backgroundRepeat='no-repeat'
          backgroundPosition='center'
          backgroundSize='cover'
          opacity={1}
          top='0px'
          overflow='hidden'
          zIndex={-1}>
        </Box>
        <Box
          left='150px'
          position='absolute'
          top='262px'
        >
          <div>
            <Box
              color='#FFFFFF'
              fontFamily='Montserrat'
              fontSize='55px'
              fontWeight='800'
            >
              Invest in a balanced
            </Box>
            <Box
              color='#FFFFFF'
              fontFamily='Montserrat'
              fontSize='24px'
              margin='20px 0px'
              width='404px'
            >
              Open and Sustainable Financial World with Cardano
            </Box>
          </div>
          <div className="v2_26">
            <div className="">
            </div>
            <ActionButton content='Delegate Now' />
          </div>
        </Box>
        <Box
          backgroundColor='#010920'
          flex={1}
          paddingTop='4rem'
        >
          <Flex
            color='#FFFFFF'
            fontFamily='Montserrat'
            fontSize='55px'
            fontWeight='800'
            justifyContent={'center'}
            marginBottom='4rem'
          >
            HOW IT WORKS
          </Flex>
          <HStack
            justifyContent={'center'}
            spacing='4rem'
          >
            {stakingSteps.map((step, idx) =>
              <StepCard key={`stake-step-${idx}`} idx={idx} />
            )}
          </HStack>
        </Box>
      </Box>
      <SimpleGrid backgroundColor='#010920' columns={2} paddingBottom='2rem' paddingTop='8rem' justifyContent='space-around'>
        <Image marginLeft='2rem' src='/techno-piggy-bank.png' />
        <BenefitList />
      </SimpleGrid>
      <Box
        backgroundColor='#0f133c'
        flex={1}
        paddingTop='4rem'
        paddingBottom='2rem'
      >
        <Flex
          color='#FFFFFF'
          fontFamily='Montserrat'
          fontSize='55px'
          fontWeight='800'
          justifyContent={'center'}
        >
          BLOG
        </Flex>
        <Box margin='4rem'>
          <Grid column={3} gap={12} margin='4rem' >
            {blogs.map((blog, idx) => (
              <GridItem
                backgroundColor='#010920'
                borderRadius={'40px'}
                colEnd={idx + 1}
                colStart={idx + 1}
                key={`blog-${idx}`}
              >
                <Box margin='2rem'>
                  <BlogCard key={idx} blog={blog} idx={idx} />
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box
        backgroundColor='#010920'
      >
        <Flex
          color='#FFFFFF'
          fontFamily='Montserrat'
          fontSize='55px'
          fontWeight='800'
          justifyContent={'center'}
          marginBottom='4rem'
          paddingTop='4rem'
        >
          FAQ
        </Flex>
        <Grid column={2} gap={68} marginLeft='4rem' marginRight='4rem' paddingBottom='4rem'>
          <GridItem backgroundColor="#111535" borderRadius={"20px"} colEnd={1} colStart={1}>
            <FaqQa />
          </GridItem>
          <GridItem backgroundColor="#111535" borderRadius={"20px"} colEnd={2} colStart={2}>
            <FaqQa />
          </GridItem>
        </Grid>
      </Box>
      <Box backgroundColor='#010920' h='225px'>
        <HStack
          alignItems='center'
          background='linear-gradient(125.41deg, #3D6BF5 -4.22%, #C53DF5 120.93%)'
          height='120px'
          justifyContent={'space-around'}
        >
          <Text color='white' fontSize='40px' fontWeight='bold'>
            Discover a new way to invest
          </Text>
          <Button backgroundColor='#010920' size='lg' textColor='white'>
            Start Staking Now
          </Button>
        </HStack>
      </Box>
      <Box backgroundColor='#0f133c' minHeight='150px'>
        <HStack alignContent='center' paddingTop='3rem' justifyContent='space-around'>
          <HStack>
            <Box
              boxSize='48px'
              marginRight='1rem'
              minHeight='48px'
              minWidth='48px'>
              <Image src='dot-logo.png' alt='dot-logo' />
            </Box>
            <Text
              color='white'
              fontFamily='Montserrat'
              fontSize='32px'
              fontStyle='italic'
            >
              Tropical Vibes Stake Pool
            </Text>
          </HStack>
          <Text color='white' fontFamily='Montserrat'>&copy; Copyright 2022 tropicpool.io All rights reserved.</Text>
          <Footer />
        </HStack>
      </Box>
    </>
  );
};

export default Welcome;
