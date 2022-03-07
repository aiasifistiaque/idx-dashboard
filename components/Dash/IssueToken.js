import React, { useEffect, useState } from 'react';
import Container from '../util/Container';
import Input from '../util/input/Input';
import styles from './Dash.module.css';
import { useRouter } from 'next/router';
import Box from '../util/Box';
import Flex from '../util/Flex';
import * as lib from '../../lib/constants';
import Button from '../buttons/Button';

const IssueToken = () => {
	const router = useRouter();
	const [template, setTemplate] = useState({});
	const [credentials, setCredentials] = useState([]);
	const [issued, setIssued] = useState(false);

	const issueCred = e => {
		e.preventDefault();
		setIssued(true);
	};

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('itentrix_template'));
		setTemplate(data);
		let credValue = [];
		data.attributes.map((attribute, i) => {
			credValue.push({ name: attribute.name, value: '' });
		});
		setCredentials(credValue);
	}, []);
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
								{template.attributes?.map((item, i) => (
									<Input
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
							<Container shadow>
								{credentials?.map((item, i) => (
									<h6 className='mb-2'>
										{item.name}:{' '}
										<span style={{ marginLeft: 4 }}>{item.value}</span>
									</h6>
								))}
								{/* <h6>{JSON.stringify(credentials)}</h6> */}
							</Container>
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
