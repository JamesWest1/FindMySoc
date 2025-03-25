import nodemailer from 'nodemailer';
import schedule from 'node-schedule';
import * as dotenv from 'dotenv';
import { futureEvents } from './databaseHelper';
import { sendEmailBool } from './server.js';
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${process.env.GMAIL_NAME}`,
        pass: `${process.env.GMAIL_PASSWORD}`
    }
})

const sendEmail = (from: string, to: string, subject: string, text: string) => {
    transporter.sendMail({from, to, subject, text}, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log('email sent ' + info.response);
        }
    })
}

// '0 9 * * 6'
export const emailSchedulder = (email: string) => {
    schedule.scheduleJob('*/1 * * * *', async () => {
        const eventsStr: string = `Upcoming Event for Devsoc
        When: 24 Mar at 11:00 - 26 Mar at 00:00
        Link: https://www.facebook.com/events/2851307125046408/
        
        
        Upcoming Event for Devsoc
        When: Monday 31 March 2025 from 14:00-17:00
        Link: https://www.google.com`;
        if (sendEmailBool) {
            sendEmail(`${process.env.GMAIL_NAME}`, email, 'New events upcoming this week!', `${eventsStr}`);
        }
    });
}