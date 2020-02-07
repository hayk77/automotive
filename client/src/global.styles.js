import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Roboto', sans-serif;

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
