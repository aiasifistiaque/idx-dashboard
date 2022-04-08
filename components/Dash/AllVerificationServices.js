import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Row, Item } from '../util/table/Table';
import * as lib from '../../lib/constants';
import useGetVerificationServices from '../../hooks/useGetVerificationServices';

const AllVerificationServices = () => {
	const { data, loading, error } = useGetVerificationServices();

	if (loading) return null;
	return (
		<Table title='Verification Services'>
			<Row>
				<Item title>Name</Item>
				<Item title>Created By</Item>
				<Item title>Created</Item>
			</Row>
			{!loading &&
				data.map((item, i) => (
					<Row key={i} href={`/verify/${item._id}`}>
						<Item>{item.name}</Item>
						<Item>{item.issuer.name}</Item>
						<Item date>{item.createdAt}</Item>
					</Row>
				))}
		</Table>
	);
};

export default AllVerificationServices;
