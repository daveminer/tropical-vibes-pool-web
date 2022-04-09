import { ReactNode } from 'react';
import { Box, Flex, HStack, Image, Link, SimpleGrid, Spacer, Text, useColorModeValue, VStack } from "@chakra-ui/react";
// import PoolToolWidget from "./PoolToolWidget";
import ActionButton from '../ActionButton';
import BenefitList from '../BenefitList.tsx';
import StepCard from '../StepCard';

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
          <Flex padding='2rem' position={'absolute'}>
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
              <StepCard idx={idx} />
            )}
          </HStack>
        </Box>
      </Box>
      <SimpleGrid backgroundColor='#010920' columns={2} paddingTop='8rem' justifyContent='space-around'>
        <Image marginLeft='2rem' src='/techno-piggy-bank.png' />
        <BenefitList />
      </SimpleGrid>
    </>
  );
};

export default Welcome;
