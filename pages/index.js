import React from 'react';
import LandingPage from '../components/Dash/LandingPage';
import Page from '../components/nav/Page/Page';

const index = () => {
	return (
		<Page selected='Dashboard'>
			<LandingPage />
		</Page>
	);
};

export default index;
