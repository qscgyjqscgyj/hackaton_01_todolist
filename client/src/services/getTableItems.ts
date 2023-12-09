import { paramsToQuery } from '../utils/network';

export async function getTableItems(tableName: string, filter: {}) {
    const queryString = paramsToQuery(filter);
    const response = await fetch(`/tables/${tableName}?${queryString}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.json();
}
