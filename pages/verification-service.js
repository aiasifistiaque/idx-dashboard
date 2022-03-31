import React from 'react';
import AllVerificationServices from '../components/Dash/AllVerificationServices';
import VerificationHome from '../components/Dash/VerificationHome';
import Page from '../components/nav/Page/Page';

const IssueCredentialsPage = () => {
	return (
		<Page selected='Dashboard'>
			<VerificationHome />
			<AllVerificationServices />
		</Page>
	);
};

export default IssueCredentialsPage;
