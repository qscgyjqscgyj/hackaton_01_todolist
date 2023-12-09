import { TableNames } from 'shared/types';
import { paramsToQuery } from '../utils/network';
import { API_URL } from './consts';

export async function getTableItems(tableName: TableNames, filter?: {}) {
    const queryString = filter ? paramsToQuery(filter) : '';
    const response = await fetch(`${API_URL}/tables/${tableName}?${queryString}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.json();
}
