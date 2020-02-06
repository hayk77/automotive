import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';

		@media screen and (max-width: 800px) {
		}
	}

	a {
		text-decoration: none;
		color: #0B0C10;
	}

	* {
		box-sizing: border-box;
	}
`;
