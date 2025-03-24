import path from "path";
import sqlite3 from "sqlite3";



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
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL,
                nameFirst TEXT NOT NULL,
                nameLast TEXT NOT NULL,
                zid INTEGER NOT NULL,
                password STRING NOT NULL
            )`);
        db.run(`CREATE TABLE IF NOT EXISTS societies (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
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
                date TEXT NOT NULL,
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

export {db, createTable};