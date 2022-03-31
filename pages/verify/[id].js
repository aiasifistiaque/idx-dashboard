import { useRouter } from 'next/router';
import React from 'react';
import IssueToken from '../../components/Dash/IssueToken';
import VerifyUser from '../../components/Dash/VerifyUser';
import Page from '../../components/nav/Page/Page';

const VerifyPage = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<Page selected='Dashboard'>
			<VerifyUser id={id} />
		</Page>
	);
};

export default VerifyPage;
