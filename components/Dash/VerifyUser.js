import React, { useEffect, useState } from 'react';
import Container from '../util/Container';
import Input from '../util/input/Input';
import styles from './Dash.module.css';
import { useRouter } from 'next/router';
import Box from '../util/Box';
import Flex from '../util/Flex';
import * as lib from '../../lib/constants';
import Button from '../buttons/Button';
import axios from 'axios';
import useGetVerificationService from '../../hooks/useGetVerificationService';
import useGetMyCustomers from '../../hooks/useGetMyCustomers';

const VerifyUser = ({ id }) => {
	const router = useRouter();

	const { data, loading, error } = useGetVerificationService(id);
	const myCustomers = useGetMyCustomers();
	const [useService, setUseService] = useState(false);

	const issueCred = e => {
		e.preventDefault();
		setUseService(true);
	};

	if (loading) return null;

	return (
		<div className={styles.container}>
			<form className={styles.issueForm} onSubmit={issueCred}>
				<Container horizontalFlex shadow>
					<Container flex>
						<h5 className='mb-2'>Verification Service</h5>

						<div className='mt-4 mb-2'>
							<Box horizontal>
								<Flex>
									<h6>{data.name}</h6>
								</Flex>
							</Box>
						</div>

						<div className='mt-4 mb-2'>
							<Box>
								<h6>Authorize Data</h6>
								<p>
									This Organization is requesting for the following informations
								</p>
							</Box>
						</div>
						<div className={styles.reqTags}>
							{data?.attributes?.map((item, i) => (
								<div key={i} className={styles.reqTag}>
									<h6>{item}</h6>
								</div>
							))}
						</div>
						<div style={{ alignSelf: 'flex-end' }} className='mt-3'>
							<Button submit>Use This Service</Button>
							<Button outlined onClick={() => setUseService(false)}>
								Cancel
							</Button>
						</div>
					</Container>
				</Container>

				<Container horizontalFlex shadow>
					{!myCustomers.loading && useService && (
						<Container>
							{myCustomers.data.map((item, i) => (
								<Customer key={i}>{item}</Customer>
							))}
						</Container>
					)}
				</Container>
			</form>
		</div>
	);
};

const Customer = ({ children }) => {
	const [selected, setSelected] = useState(false);
	return (
		<Container
			horizontal
			style={{
				justifyContent: 'space-between',
				alignItems: 'center',
				width: '100%',
			}}>
			<h6>{children}</h6>
			{selected ? (
				<h6>Requested</h6>
			) : (
				<Button onClick={() => setSelected(true)}>Select</Button>
			)}
		</Container>
	);
};

export default VerifyUser;