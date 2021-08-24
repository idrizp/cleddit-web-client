import { API_ENDPOINT, authenticatedAxios } from "../request_utils";

export interface CreateSubcledditRequest {
	name: string;
	description: string;
}

export function createSubcleddit(name: string, description: string) {
	const payload: CreateSubcledditRequest = {
		name,
		description
	}
	return authenticatedAxios.post(`${API_ENDPOINT}/api/subcleddit/`, payload);
}