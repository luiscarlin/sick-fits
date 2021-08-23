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
    font-size: 1.5rem;
    line-height: normal;
  }

  a {
    text-decoration: none;
    color: var(--black);
    transition: all var(--td);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default styles;
