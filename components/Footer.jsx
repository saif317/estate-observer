import { Box } from '@chakra-ui/layout';

import theme from '../theme/theme';

const { white, saffron } = theme.colors;

const Footer = () => (
  <Box
    textAlign='center'
    p='5'
    color={white}
    borderTop='1px'
    borderColor='gray.100'
    backgroundColor={saffron[500]}
    boxShadow='xs'
  >
    © 2021 Estate Observer, Inc.
  </Box>
);

export default Footer;
