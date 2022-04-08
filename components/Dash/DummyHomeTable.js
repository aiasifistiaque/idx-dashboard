import React from 'react';
import { Table, Row, Item } from '../util/table/Table';

const data = [
	{
		id: 'vinay@identrix.io',
		type: 'Gate Check-In',
		date: '13 Dec 2020',
		status: 'PENDING',
	},
	{
		id: 'vinay@identrix.io',
		type: 'Gate Check-In',
		date: '13 Dec 2020',
		status: 'PENDING',
	},
	{
		id: 'vinay@identrix.io',
		type: 'Gate Check-In',
		date: '13 Dec 2020',
		status: 'PENDING',
	},
	{
		id: 'vinay@identrix.io',
		type: 'Gate Check-In',
		date: '13 Dec 2020',
		status: 'PENDING',
	},
	{
		id: 'vinay@identrix.io',
		type: 'Gate Check-In',
		date: '13 Dec 2020',
		status: 'PENDING',
	},
	{
		id: 'vinay@identrix.io',
		type: 'Gate Check-In',
		date: '13 Dec 2020',
		status: 'PENDING',
	},
	{
		id: 'vinay@identrix.io',
		type: 'Gate Check-In',
		date: '13 Dec 2020',
		status: 'PENDING',
	},
	{
		id: 'vinay@identrix.io',
		type: 'Gate Check-In',
		date: '13 Dec 2020',
		status: 'PENDING',
	},
];

const DummyHomeTable = () => {
	return (
		<Table title='Pending Requests'>
			<Row>
				<Item title>User Id</Item>
				<Item title>Credential Type</Item>
				<Item title>Date</Item>
				<Item title>Status</Item>
			</Row>
			{data.map((item, i) => (
				<Row key={i}>
					<Item>{item.id}</Item>
					<Item>{item.type}</Item>
					<Item>{item.date}</Item>
					<Item>{item.status}</Item>
				</Row>
			))}
		</Table>
	);
};

export default DummyHomeTable;
