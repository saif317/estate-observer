/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

import Property from '../components/Property.jsx';
import { baseUrl, fetchApi } from '../utils/fetchApi.js';

import theme from '../theme/theme.js';

const { saffron } = theme.colors;

export const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='9'>
    <Box
      backgroundImage={imageUrl}
      backgroundSize='cover'
      backgroundRepeat='no-repeat'
      width={600}
      height={{ base: 200, md: 350 }}
      boxShadow='2xl'
      borderTopRadius={{ base: 'md', lg: 'none' }}
      borderLeftRadius={{ base: 'none', lg: 'md' }}
    ></Box>
    <Box
      p='9'
      backgroundColor='white'
      boxShadow='2xl'
      borderBottomRadius={{ base: 'md', lg: 'none' }}
      borderRightRadius={{ base: 'none', lg: 'md' }}
      height={{ lg: 350 }}
      width={{ md: 600 }}
    >
      <Text color={saffron[500]} fontSize='sm' fontWeight='medium'>
        {purpose}
      </Text>
      <Text fontSize='3xl' fontWeight='bold' color={saffron[800]}>
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color={saffron[500]}>
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button
        fontSize='xl'
        bg={saffron[600]}
        color='white'
        _hover={{ backgroundColor: saffron[100], color: saffron[500] }}
      >
        <Link href={linkName}>
          <a>{buttonText}</a>
        </Link>
      </Button>
    </Box>
  </Flex>
);

const Home = ({ propertiesForSale, propertiesForRent }) => {
  const [isLargerThan2560] = useMediaQuery('(min-width: 2560px)');
  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1=' Explore from Apartments, builder floors, villas'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl={propertiesForRent[0].coverPhoto.url}
      />
      <Flex
        flexWrap='wrap'
        justifyContent='center'
        backgroundColor='white'
        boxShadow='2xl'
        paddingTop='5px'
        paddingBottom='25px'
      >
        {propertiesForRent.map((property, idx) => {
          if (!isLargerThan2560 && idx > 5) return <></>;
          return <Property property={property} key={property.id} />;
        })}
      </Flex>
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl={propertiesForSale[0].coverPhoto.url}
      />
      <Flex
        flexWrap='wrap'
        justifyContent='center'
        boxShadow='2xl'
        paddingTop='25px'
        paddingBottom='25px'
        backgroundColor='white'
      >
        {propertiesForSale.map((property, idx) => {
          if (!isLargerThan2560 && idx > 5) return <></>;
          return <Property property={property} key={property.id} />;
        })}
      </Flex>
    </Box>
  );
};

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002,6020&purpose=for-sale&hitsPerPage=10`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002,6020&purpose=for-rent&hitsPerPage=10`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
