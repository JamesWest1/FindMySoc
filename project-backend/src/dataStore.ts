import fs from 'fs';
import path from 'path';

import { User, Society } from './interface';

const data: {users: User[], society: Society[]} = {
    users: [],
    society:[]
};

const DATA_STORE_PATH = path.join(process.cwd(), 'src', 'datastore.json');

export function saveData(): void {
    fs.writeFileSync(DATA_STORE_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

export function getData(): { users: User[]; society: Society[] } {
    if (fs.existsSync(DATA_STORE_PATH)) {
        const fileData = fs.readFileSync(DATA_STORE_PATH, 'utf-8');
        const parsedData = JSON.parse(fileData);
        data.users = parsedData.users || [];
        data.society = parsedData.quizzes || [];
    }
    return data;
}

export function clear(): Record<string, never> {
    data.users = [];
    data.society = [];
    saveData();
    return {};
}


