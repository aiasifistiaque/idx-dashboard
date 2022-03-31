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
import useAuth from '../../hooks/useAuth';

const IssueToken = ({ id }) => {
	const router = useRouter();
	const [template, setTemplate] = useState({});
	const [credentials, setCredentials] = useState([]);
	const [issued, setIssued] = useState(false);
	const [loading, setLoading] = useState(false);
	const [token, setToken] = useState();
	const [result, setResult] = useState({});
	const [user, setUser] = useState();
	const [pageLoading, setPageLoading] = useState(true);
	const auth = useAuth();

	const issueCred = e => {
		e.preventDefault();
		issueTokenFunction(e);
		setIssued(true);
	};

	const getTemplate = async () => {
		setPageLoading(true);
		try {
			const { data } = await axios.get(`${lib.api.backend}/template/${id}`);

			setTemplate(data);
			let credValue = [];
			data.attributes.map((attribute, i) => {
				credValue.push({ name: attribute.name, value: '' });
			});
			setCredentials(credValue);
			setPageLoading(false);
		} catch (e) {
			console.log(e);
		}
	};

	const issueTokenFunction = async e => {
		e.preventDefault();
		setLoading(true);

		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					authorization: JSON.parse(auth.token),
				},
			};

			console.log(credentials);

			const { data } = await axios.post(
				`${lib.api.backend}/issue`,
				{
					data: credentials,
					user,
					template,
				},
				config
			);

			setResult(data.body);
			setToken(data.token);
			setLoading(false);

			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		getTemplate();
	}, [id]);
	if (pageLoading) return null;
	return (
		<div className={styles.container}>
			<form className={styles.issueForm} onSubmit={issueCred}>
				<Container horizontalFlex shadow>
					<Container flex>
						<h5 className='mb-2'>Issue Credential</h5>

						<div className='mt-4 mb-2'>
							<Box horizontal>
								<Flex>
									<h6>Template Name</h6>
								</Flex>
								<Flex>
									<h6 style={{ color: lib.colors.primary }}>{template.name}</h6>
								</Flex>
							</Box>
						</div>
						<div className='mt-4 mb-2'>
							<Box>
								<Input
									required
									value={user}
									onChange={e => setUser(e)}
									label='User email'
									type='text'
									placeholder='email of the target user'></Input>
								{template.attributes?.map((item, i) => (
									<Input
										key={i}
										required
										value={credentials[i].value}
										onChange={e => {
											const temp = [...credentials];
											temp[i].value = e;
											setCredentials(temp);
										}}
										label={item.name}
										type={item.type == 'date' ? 'date' : 'text'}
										placeholder={item.description}></Input>
								))}
							</Box>
						</div>
						<div style={{ alignSelf: 'flex-end' }}>
							<Button submit>Issue Credential</Button>
						</div>
					</Container>
				</Container>

				<Container horizontalFlex shadow>
					<Container>
						{/* <h6>{JSON.stringify(template)}</h6> */}
						{/* <h3>Value</h3> */}

						{issued ? (
							<div
								style={{
									display: 'flex',
									flex: 1,
									justifyContent: 'center',
									flexDirection: 'column',
								}}>
								{loading ? (
									<h3>processing...</h3>
								) : (
									<>
										<Container shadow>
											{Object.keys(result).map((item, i) => (
												<div
													style={{
														display: 'flex',
														justifyContent: 'space-between',
													}}
													key={i}>
													<div style={{ flex: 1 }}>
														<h6>{item}:</h6>
													</div>
													<div style={{ flex: 1 }}>
														<h6>{result[item]}</h6>
													</div>
												</div>
											))}

											{/* <h6>{JSON.stringify(credentials)}</h6> */}
										</Container>
										<Container shadow>
											<h6 style={{ wordBreak: 'break-word' }}>
												Token: {token}
											</h6>
										</Container>
									</>
								)}
							</div>
						) : (
							<div></div>
						)}
					</Container>
				</Container>
			</form>
		</div>
	);
};

export default IssueToken;
