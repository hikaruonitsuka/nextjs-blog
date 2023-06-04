import { createClient } from 'microcms-js-sdk';

export const client = createClient({
	serviceDomain: 'shelter' || '',
	apiKey: process.env.API_KEY || '',
});
