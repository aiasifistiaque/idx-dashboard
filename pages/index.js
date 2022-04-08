import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import LandingPage from '../components/Dash/LandingPage';
import PendingRequests from '../components/Dash/PendingRequests';
import Page from '../components/nav/Page/Page';
import DummyHomeTable from '../components/Dash/DummyHomeTable';
import { Contain, Table } from '../components/util/table/Table';

const IndexPage = () => {
	const { isLoggedIn, loading } = useAuth();
	if (loading) return null;
	return (
		<Page selected='Dashboard'>
			<div style={{ marginTop: 72 }} />

			<div
				style={{
					display: 'flex',
					backgroundColor: 'whitesmoke',
					maxHeight: '100vh',
					overflow: 'auto',
					overflow: 'scroll',
				}}>
				<div style={{ flex: 2, marginTop: 32 }}>
					<Contain>
						<img
							src='/livesever.png'
							style={{
								width: '100%',
								height: 'auto',
								objectFit: 'contain',
								borderRadius: 10,
								padding: 0,
							}}
						/>
					</Contain>
					<div style={{ marginTop: 64 }} />

					<LandingPage />
					<DummyHomeTable />
				</div>
				<div style={{ flex: 1 }}>
					<img
						src='/right.png'
						style={{
							width: 'auto',
							sobjectFit: 'contain',
							borderRadius: 10,
							padding: 0,
							height: 600,
						}}
					/>
				</div>
			</div>
		</Page>
	);
};

export default IndexPage;
