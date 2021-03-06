import React, { useEffect, useState } from 'react';
import Container from '../util/Container';
import Input from '../util/input/Input';
import styles from './Dash.module.css';
import Button from '../buttons/Button';
import { useRouter } from 'next/router';
import axios from 'axios';
import * as lib from '../../lib/constants';
import useAuth from '../../hooks/useAuth';
import Select from '../util/input/Select';

const catData = [
	'Personal',
	'Assets',
	'Education',
	'License',
	'Healthcare',
	'Bills',
	'Certificates',
	'Web Credentials',
];

const CreateTemplate = () => {
	const router = useRouter();
	const { token } = useAuth();

	const [attributes, setAttributes] = useState([
		{ name: '', type: 'string', description: '' },
	]);
	const [name, setName] = useState();
	const [category, setCategory] = useState(catData[1]);
	const [version, setVersion] = useState();
	const [description, setDescription] = useState();
	const addAttrib = () => {
		const attrib = { name: '', type: 'string', description: '' };
		setAttributes(oldArray => [...oldArray, attrib]);
	};

	const handleRemoveItem = idx => {
		// assigning the list to temp variable
		const temp = [...attributes];

		console.log(idx);

		// removing the element using splice
		temp.splice(idx, 1);

		// updating the list
		setAttributes(temp);
	};

	const submitForm = async e => {
		e.preventDefault();
		const formdata = {};
		formdata.name = name;
		formdata.version = version;
		formdata.description = description;
		formdata.attributes = attributes;
		formdata.category = category;
		const config = {
			headers: {
				'Content-Type': 'application/json',
				authorization: JSON.parse(token),
			},
		};
		try {
			const { data } = await axios.post(
				`${lib.api.backend}/template`,
				{
					data: formdata,
				},
				config
			);
			router.push(`/issue/${data._id}`);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		const attrib = { name: '', type: 'string', description: '' };
		setAttributes(oldArray => [...oldArray, attrib]);
	}, []);
	return (
		<div className={styles.container}>
			<form className={styles.issueForm} onSubmit={submitForm}>
				<Container horizontalFlex shadow>
					<Container>
						<h5 className='mb-2'>New Credential Template</h5>
						<p>
							Start by giving a Name and a Description to your Template. Then
							select the attributes you want to include on the right. You can
							add as many as you want.
						</p>
						<div className='mt-4'>
							<Input
								required
								value={name}
								onChange={e => setName(e)}
								label='Template Name'
								placeholder='University Degree'></Input>
							<div className={styles.select}>
								<Select required label='Category'>
									<select
										className={styles.templateSelect}
										value={category}
										onChange={e => {
											setCategory(e.target.value);
										}}
										style={{ textTransform: 'capitalize' }}>
										{catData.map((option, i) => (
											<option key={i} value={option}>
												{option}
											</option>
										))}
									</select>
								</Select>
							</div>
							<Input
								required
								value={version}
								onChange={e => setVersion(e)}
								label='Version'
								placeholder='2.0'></Input>{' '}
							<Input
								required
								value={description}
								onChange={e => setDescription(e)}
								label='Template Description'
								placeholder='Demo University Degree Certificate'></Input>
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
							<h5>Credential Attributes</h5>

							<div className={styles.add} onClick={addAttrib}>
								<p>Add</p>
							</div>
						</Container>

						<div className={styles.attributes}>
							{attributes.map((attribute, i) => (
								<Credential
									key={i}
									close={() => handleRemoveItem(i)}
									name={attribute.name ? attribute.name : ''}
									setName={e => {
										const temp = [...attributes];
										temp[i].name = e;
										setAttributes(temp);
									}}
									setDescription={e => {
										const temp = [...attributes];
										temp[i].description = e;
										setAttributes(temp);
									}}
									setType={e => {
										const temp = [...attributes];
										temp[i].type = e;
										setAttributes(temp);
									}}
								/>
							))}
						</div>
						<Container horizontal>
							<Button submit>Create Template</Button>
							<Button outlined>Cancel</Button>
						</Container>
					</div>
				</Container>
			</form>
		</div>
	);
};

const Credential = ({
	close,
	name,
	description,
	type,
	setName,
	setDescription,
	setType,
}) => {
	const data = ['string', 'number', 'date'];

	return (
		<div className={styles.attribute}>
			<div className={styles.closeBox}>
				<div className={styles.close} onClick={close}>
					<p>x</p>
				</div>
			</div>

			<div>
				<div className={styles.attributeName}>
					<Input
						required
						value={name}
						onChange={e => setName(e)}
						label='Attribute Name'
						placeholder='e.g. University Degree'></Input>
					<div className={styles.select}>
						<select
							value={type}
							onChange={e => {
								setType(e.target.value);
							}}
							style={{ textTransform: 'capitalize' }}>
							{data.map((option, i) => (
								<option key={i} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
				</div>
				<Input
					required
					value={description}
					onChange={e => setDescription(e)}
					label='Attribute Description'
					placeholder='e.g. Demo University Degree Certificate'></Input>
			</div>
		</div>
	);
};

export default CreateTemplate;
