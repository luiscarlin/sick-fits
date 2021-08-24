import { css } from 'styled-components';

const styles = css`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Lato', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    line-height: normal;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: var(--black);
    transition: all var(--td);

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: 'Lato', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default styles;
