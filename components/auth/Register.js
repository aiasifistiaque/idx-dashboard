import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Button from '../buttons/Button';
import AuthContainer from './AuthContainer';
import AuthInput from './AuthInput';
import * as lib from '../../lib/constants';
import axios from 'axios';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const registerClick = async e => {
		e.preventDefault();
		setLoading(true);
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const { data } = await axios.post(
				`${lib.api.backend}/auth/register`,
				{
					name,
					email,
					password,
					role: 'organization',
				},
				config
			);

			console.log(data);

			localStorage.setItem(lib.tokenName, JSON.stringify(data));
			setLoading(false);
		} catch (error) {
			console.log(error);
			setError(error);
			setLoading(false);
		}
	};
	return (
		<AuthContainer>
			<form onSubmit={registerClick}>
				<AuthInput
					value={name}
					onChange={e => setName(e)}
					label='Name of organization'
					placeholder='Name of your organization'
					required
				/>
				<AuthInput
					label='email'
					value={email}
					onChange={e => setEmail(e)}
					placeholder='Your Email'
					required
				/>
				<AuthInput
					value={password}
					onChange={e => setPassword(e)}
					label='password'
					placeholder='Your Password'
					required
					password
				/>
				<AuthInput
					value={confirm}
					onChange={e => setConfirm(e)}
					label='confirm passowrd'
					placeholder='Confirm Password'
					required
					password
				/>
				<div>
					{loading ? <Button>loading</Button> : <Button submit>Sign Up</Button>}
				</div>
			</form>

			<div className='mt-3 ml-2'>
				<h6>Already have an account?</h6>
				<Link href='/login'>
					<Button text>Log In</Button>
				</Link>
			</div>
		</AuthContainer>
	);
};

export default Register;
