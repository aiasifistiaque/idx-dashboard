import React from 'react';
import IssueCredentials from '../components/Dash/IssueCredentials';
import IssueToken from '../components/Dash/IssueToken';
import LandingPage from '../components/Dash/LandingPage';
import Page from '../components/nav/Page/Page';

const IssuePage = () => {
	return (
		<Page selected='Dashboard'>
			<IssueToken />
		</Page>
	);
};

export default IssuePage;
