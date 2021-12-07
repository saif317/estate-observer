/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

import Logo from '../assets/images/estateobserver.png';
import theme from '../theme/theme.js';

const { saffron } = theme.colors;

const Navbar = () => (
  <Flex
    p='2'
    borderBottom='1px'
    backgroundColor='white'
    borderColor={saffron[100]}
    boxShadow='lg'
  >
    <Box>
      <Link href='/' paddingLeft='2'>
        <Image width={50} height={50} src={Logo} />
      </Link>
    </Box>
    <Spacer />
    <Box>
      <Menu autoSelect={false}>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant='outline'
          _hover={{ backgroundColor: saffron[300] }}
          _active={{ backgroundColor: saffron[300] }}
          _selected={{ outline: saffron[300] }}
          _focus={{ boxShadow: saffron[300] }}
        />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem
              _hover={{ backgroundColor: saffron[100] }}
              _highlighted={{ backgroundColor: saffron[100] }}
              color={saffron[500]}
              icon={<FcHome />}
            >
              Home
            </MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem
              color={saffron[500]}
              icon={<BsSearch />}
              _hover={{ backgroundColor: saffron[100] }}
            >
              Search
            </MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem
              _hover={{ backgroundColor: saffron[100] }}
              color={saffron[500]}
              icon={<FcAbout />}
            >
              Buy Property
            </MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem
              _hover={{ backgroundColor: saffron[100] }}
              color={saffron[500]}
              icon={<FiKey />}
            >
              Rent Property
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
