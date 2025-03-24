import app from './server.ts'
import {Society, Event, User} from './interface.ts'
import fs from 'fs/promises';
import path from 'path';
const getSociety = async (id: number): Society | null => {
   const dataStr:string = await fs.readFile("../data.json", 'utf-8');
   const data = JSON.parse(dataStr);
   const society:Society | undefined = data.societies.find((soc: Society) => {
        soc.id == id;
   })
    if (society === undefined) return null;
    return society;
}

const subscribe = (societyId: number, userId: number): bool => {
   const soc:Society|null = getSociety(societyId);
   if (soc === null) return false;
   :
}
