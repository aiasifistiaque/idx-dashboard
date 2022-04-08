import { useRouter } from 'next/router';
import React from 'react';
import IssueToken from '../../components/Dash/IssueToken';
import ServiceData from '../../components/Dash/ServiceData';
import VerifyUser from '../../components/Dash/VerifyUser';
import Page from '../../components/nav/Page/Page';

const VerifiedDataPage = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<Page selected='Dashboard'>
			<div style={{ height: 78 }} />
			<ServiceData id={id} />
		</Page>
	);
};

export default VerifiedDataPage;
