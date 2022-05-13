import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as lib from '../../lib/constants';

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${lib.api.backend}/`,
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.token;
			if (token) {
				headers.set('authorization', token);
			}
			return headers;
		},
	}),
	tagTypes: [],

	endpoints: builder => ({
		getVerificationService: builder.query({
			query: id => `/verify/${id}`,
			providesTags: [],
		}),
		getPendingRequests: builder.query({
			query: status => `/issue?status=${status}`,
			providesTags: [],
		}),
		getTransactionReceipt: builder.query({
			query: id => `/transactions/${id}`,
			providesTags: [],
		}),

		// addBrand: builder.mutation({
		// 	query(body) {
		// 		return {
		// 			url: `/brands`,
		// 			method: 'POST',
		// 			body,
		// 		};
		// 	},
		// 	invalidatesTags: ['Brands', 'Dashboard'],
		// }),
	}),
});

export const {
	useGetVerificationServiceQuery,
	useGetPendingRequestsQuery,
	useGetTransactionReceiptQuery,
} = productsApi;
