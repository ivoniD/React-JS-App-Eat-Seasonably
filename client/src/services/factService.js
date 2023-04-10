import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/facts';

export const getAll = () => request.get(baseUrl);

export const getOne = (factId) => request.get(`${baseUrl}/${factId}`);

export const create = (factData) => request.post(baseUrl, factData);

export const edit = (factId, factData) => request.put(`${baseUrl}/${factId}`, factData);

export const del = (factId) => request.del(`${baseUrl}/${factId}`);