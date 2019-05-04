import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import styled from 'styled-components';

const AppDiv = styled.div`
	text-align: center;
`;

const AppHeader = styled.header`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const App = () => (
	<Fragment>
		<Helmet>
			<title>Advisely</title>
		</Helmet>
		<AppDiv>
			<AppHeader />
		</AppDiv>
	</Fragment>
);

export default App;
