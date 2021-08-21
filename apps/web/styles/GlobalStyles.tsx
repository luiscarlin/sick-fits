import { createGlobalStyle } from 'styled-components';
import reset from './_reset';
import styles from './_styles';
import variables from './_variables';

const GlobalStyles = createGlobalStyle`
  ${variables}
  ${reset}
  ${styles}
`;

export default GlobalStyles;
