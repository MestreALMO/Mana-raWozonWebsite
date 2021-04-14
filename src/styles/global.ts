import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
    --backgroundMain: #000;
    --textMain: #000;

		--backgroundMain01: #01023F;
    --textMain01: #f0f2f5;

		--backgroundMain02: #3E41E8;
    --textMain02: #000;

    --contactLink: #555;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%
		}

		@media (max-width: 720px) {
			font-size: 87.5%
		}
	}

	body {
		background: var(--backround);
		-webkit-font-smoothing: antialiased;
    min-width: 270px;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
