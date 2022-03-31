import React, { useEffect, useState } from 'react';
import Container from '../util/Container';
import Input from '../util/input/Input';
import styles from './Dash.module.css';
import Button from '../buttons/Button';
import { useRouter } from 'next/router';
import axios from 'axios';
import * as lib from '../../lib/constants';
import useGetTemplates from '../../hooks/useGetTemplates';
import useAuth from '../../hooks/useAuth';

const CreateVerification = () => {
	const router = useRouter();

	const [attributes, setAttributes] = useState([
		{ name: '', type: 'string', description: '' },
	]);
	const [name, setName] = useState();
	const [description, setDescription] = useState();
	const [endpoint, setEndpoint] = useState();
	const [key, setKey] = useState();
	const [template, setTemplate] = useState({});
	const auth = useAuth();

	const submitForm = async e => {
		e.preventDefault();
		const formdata = {};
		formdata.name = name;
		formdata.description = description;
		formdata.endpoint = endpoint;
		formdata.key = key;
		let attribArr = [];
		template?.attributes?.map(item => {
			attribArr.push(item.name);
		});
		formdata.attributes = attribArr;
		console.log(formdata);
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: JSON.parse(auth.token),
			},
		};
		try {
			const { data } = await axios.post(
				`${lib.api.backend}/verify`,
				{ data: formdata },
				config
			);
			router.push(`/verify/${data._id}`);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className={styles.container}>
			<form className={styles.issueForm} onSubmit={submitForm}>
				<Container horizontalFlex shadow>
					<Container>
						<h5 className='mb-2'>New Verification Services</h5>

						<p>Start by giving a Name and a Description to your Service.</p>
						<div className='mt-4'>
							<Input
								required
								value={name}
								onChange={e => setName(e)}
								label='Service Name'
								placeholder='Name of your service'></Input>
							<Input
								required
								value={description}
								onChange={e => setDescription(e)}
								label='Description'
								placeholder='Description of your service'></Input>{' '}
							<Input
								required
								value={endpoint}
								onChange={e => setEndpoint(e)}
								label='Your API endpoint'
								placeholder='e.g https://test-job.tech/api/verified'></Input>
							<Input
								required
								value={key}
								onChange={e => setKey(e)}
								label='Your API key'
								placeholder='e.g cvdvb873bwikscn902nd'></Input>
						</div>
					</Container>
				</Container>

				<Container horizontalFlex shadow>
					<div>
						<Container
							horizontalFlex
							style={{
								justifyContent: 'space-between',
								alignItems: 'center',
							}}>
							<h5>Select verified data required</h5>

							{/* <div className={styles.add} onClick={addAttrib}>
								<p>Add</p>
							</div> */}
						</Container>

						<div className={styles.attributes}>
							<VerifySelect attrib={template} setAttrib={e => setTemplate(e)} />
						</div>
						<Container horizontal>
							<Button submit>Create Verificaction Service</Button>
							<Button outlined onClick={() => router.back()}>
								Cancel
							</Button>
						</Container>
					</div>
				</Container>
			</form>
		</div>
	);
};

const VerifySelect = ({ attrib, setAttrib }) => {
	const { loading, data, error } = useGetTemplates();
	const [template, setTemplate] = useState(0);

	useEffect(() => {
		setAttrib(data[parseInt(template)]);
	}, [template]);

	if (loading) return null;
	return (
		<div>
			<div className={styles.attributeName}>
				<div className={styles.select}>
					<select
						className={styles.templateSelect}
						//value={attrib?.name}
						onChange={e => {
							setTemplate(e.target.value);
						}}
						style={{ textTransform: 'capitalize' }}>
						{data.map((option, i) => (
							<option key={i} value={i}>
								{option.name}
							</option>
						))}
					</select>
				</div>
				<h6 className='mt-3'>Attributes</h6>
				<div className={styles.tags}>
					{data[parseInt(template)]?.attributes?.map((item, i) => (
						<div className={styles.tag} key={i}>
							<p>{item.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CreateVerification;
