import { TableNames } from 'shared/types';
import { API_URL } from './consts';

export async function createTableItem(tableName: TableNames, itemData: {}) {
    const response = await fetch(`${API_URL}/tables/${tableName}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
    });

    if (response.status === 200) {
        return response.json();
    }

    throw Error('Invalid response');
}
