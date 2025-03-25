import path from "path";
import sqlite3 from "sqlite3";
import {v4 as uuidv4} from 'uuid';
import { User } from "./interface";



const dbPath = path.join(process.cwd(), 'database.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("could not open database: ", err.message);
    } else  {
        console.log("connected to sql database");
    }
})
db.run('PRAGMA foreign_keys = ON;', (err) => {
    if (err) {
      console.error('Error enabling foreign keys:', err.message);
    }
});
const createTable = () => {
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS users(
                id INTEGER PRIMARY KEY,
                email TEXT NOT NULL,
                nameFirst TEXT NOT NULL,
                nameLast TEXT NOT NULL,
                zid INTEGER NOT NULL,
                password STRING NOT NULL
            )`);
        db.run(`CREATE TABLE IF NOT EXISTS societies (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                description TEXT NOT NULL,
                arc TEXT NOT NULL,
                facebook TEXT NOT NULL,
                website TEXT NOT NULL
            )`);
        db.run(`CREATE TABLE IF NOT EXISTS events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                description TEXT NOT NULL,
                date INTEGER NOT NULL,
                societyId INTEGER,
                FOREIGN KEY (societyId) REFERENCES societies(id) ON DELETE CASCADE
            )`);
        db.run(`CREATE TABLE IF NOT EXISTS subscribed (
                userId INTEGER,
                eventId INTEGER,
                FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
                FOREIGN KEY (eventId) REFERENCES events(id) ON DELETE CASCADE
            )`)
    })
}

const createUser = (email:string, nameFirst: string, nameLast:string, zid:number, password:string): Promise<any> => {
    return new Promise((resolve, reject) => {
        const id:number = Math.floor(Math.random() * 1000000000);
        const sql: string = `INSERT INTO users (email, nameFirst, nameLast, zid, password, id) VALUES (?, ?, ?, ?, ?, ?)`;
        db.run(sql, [email, nameFirst, nameLast, zid, password, id], (row, err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve({authUserId: id});
            }
        });
    })
}

const getUser = (userId:number) => {
    return new Promise((resolve, reject) => {
        const sql: string = `SELECT * from users WHERE id = ?`;
        db.get(sql, [userId], (row, err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(row)
            }
        })
    });
}

const attemptLogin = (email:string, password: string) => {
    return new Promise((resolve, reject) => {
        const sql: string = `SELECT * from users WHERE email = ? AND password = ?`;
        db.get(sql, [email, password], (row, err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(row);
            }
        })
    })
}
const createSoc = (name:string, description: string, arc: string, facebook: string, website: string) => {
    return new Promise((resolve, reject) => {
        const id = Math.floor(Math.random() * 1000000000);
        const sql: string = `INSERT INTO societies (name, description, arc, facebook, website, id) VALUES (?, ?, ?, ?, ?, ?)`;
        db.run(sql, [name, description, arc, facebook, website, id], (row, err) => {
            if(err) {
                reject(err);
            }else {
                resolve(row);
            }
        });
    })
}

const getSoc = (id:number) => {
    return new Promise((resolve, reject) => {
        const sql: string = `SELECT * from societies WHERE id = ?`;
        db.get(sql, [id], (row, err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(row)
            }
        })
    });
}

const createEvent = (name: string, description: string, date: string, society: number) => {
    return new Promise((resolve, reject) => {
        const unixTime: number = Date.parse(date);
        const sql: string = `INSERT INTO events (name, description, date, societyId) VALUES (?, ?, ?, ?)`;
        db.run(sql, [name, description, unixTime, society], (row, err) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(row);
            }
        })
    })
}

export {db, createTable, createUser, createSoc, getUser, attemptLogin, getSoc, createEvent};