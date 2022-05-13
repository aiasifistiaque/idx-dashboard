import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import LandingPage from '../components/Dash/LandingPage';
import Page from '../components/nav/Page/Page';
import DummyHomeTable from '../components/Dash/DummyHomeTable';
import { Contain, Table } from '../components/util/table/Table';
import { useRouter } from 'next/router';
import Button from '../components/buttons/Button';
import Link from 'next/link';

const IndexPage = () => {
	const { isLoggedIn, loading, token } = useAuth();
	const router = useRouter();

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
					<div style={{ marginTop: 64 }} />
					<Contain>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								flexDirection: 'column',
								padding: '32px 24px',
							}}>
							<h4 style={{ marginBottom: 32 }}>An error Occured</h4>
							<Link href='/'>
								<Button>Go back home</Button>
							</Link>
						</div>
					</Contain>
				</div>
			</div>
		</Page>
	);
};

export default IndexPage;
