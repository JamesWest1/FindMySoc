import {
    getData,
    saveData,
} from './dataStore';

import { User, Society } from './interface';

const authRegister = (zId: string, email: string, password: string, nameFirst: string, nameLast: string) => {
    const data = getData();

    const authUserId = Math.floor(Math.random() * 1000000000); // generate 10-digit random authUserId
    
  const newUser: User = {
    authUserId: authUserId,
    zId: zId,
    email: email,
    password: password,
    nameFirst: nameFirst,
    nameLast: nameLast,
    subscribed: [],
    usedPasswords: [],
  };

  data.users.push(newUser);

    return {};
}

const authLogin = (email: string, password: string) => {
    return {};
}

const authLogout = () => {
    return {};
}