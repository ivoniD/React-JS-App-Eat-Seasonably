import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/seasons';

export const getAll = () => request.get(baseUrl);

export const getOne = (productId) => request.get(`${baseUrl}/${productId}`);

export const create = (productData) => request.post(baseUrl, productData);

export const edit = (productId, productData) => request.put(`${baseUrl}/${productId}`, productData);
