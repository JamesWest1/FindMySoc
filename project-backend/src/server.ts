import express from 'express';
import {createTable, createUser, getUser, attemptLogin, getAllSocieties, subscribe, futureEvents, pastEvents, createEvent, createSoc} from './databaseHelper.js';
import { emailSchedulder } from './helper.js';
createTable();
const app = express();

export let sendEmailBool: boolean = false;
emailSchedulder('demo@gmail.com');
app.get('/', function (req: express.Request, res: express.Response) {
    res.send('Hello World');
})

app.get('/createuser', async (req, res) => {
    const email:string = req.body.email;
    const nameFirst:string = req.body.nameFirst;
    const nameLast:string = req.body.nameLast;
    const zid:number = req.body.zid;
    const password:string = req.body.password;
    try {
        const uid = await createUser(email, nameFirst, nameLast, zid, password);
        res.status(200).send({userId: uid});
        console.log(uid);
    } catch (e) {
        res.status(400).send(e.message);
    }
})
app.get('/getuser', async (req, res) => {
    try {
        const users = await getUser(req.body.authUserId);
        res.status(200).send(users);
    } catch(e) {
        res.status(400).send("boo");
    }
})
app.post('/auth/register', async (req, res) => {
    try {
        let zId: number = req.body.zId;
        let email:string = req.body.email;
        let password:string = req.body.password;
        let nameFirst:string = req.body.nameFirst;
        let nameLast:string = req.body.nameLast;
        const authUserId = await createUser(email, nameFirst, nameLast, zId, password);
        res.status(200).send({authUserId: authUserId});
    } catch(e) {
        res.status(400).send({error: e.message});
    }
})
app.get('/auth/login', async (req, res) => {
    try {
        const userObj = await attemptLogin(req.body.email, req.body.password);
        if (userObj.length == 0) res.status(400).send({error: "no user found"});
        res.status(200).send({authUserId: userObj[0].authUserId});
    } catch (e) {
        res.status(400).send({error: e.message});
    }
})
app.delete('/auth/logout', async (req, res) => {
    //
})

app.get('/socities/all', async (req, res) => {
    try {
        const allSoc = await getAllSocieties();
        res.status(200).send({societies: allSoc}); // array of Society
    }catch (e) {
        res.status(400).send({error: e.message});
    }
})
app.get('/user/socities', async (req, res) => {
    try {
        const userId:number = req.body.authUserId;
        const socs = await getAllSocieties();
        res.status(200).send({societies: socs}); // array of Society (that userId is a part of)
    } catch (e) {
        res.status(400).send({error: e.message});
    }
})
app.post('/user/subscribe', async (req, res) => {
    try {
        const userId: number = req.body.authUserId;
        const societyId: number = req.body.societyId;
        const ans = await subscribe(userId, societyId);
        res.status(200).send({});
    } catch (e) {
        res.status(400).send({error: e.message});
    }
})
app.get('/events/future', async (req, res) => {
    try {
        const userId: number = req.body.authUserId;
        const events = await futureEvents(userId);
        res.status(200).send({events: events}) // array of Event (from socities that the user is a part of and are in the future)
    } catch(e) {
        res.status(400).send({error: e.message});
    }
})
app.get('/events/past', async (req, res) => {
    try {
        const userId: number = req.body.authUserId;
        const events = await pastEvents(userId);
        res.status(200).send({events: events}) // array of Event (from socities that the user is a part of and have already passed)
    } catch (e) {
        res.status(400).send({error: e.message});
    }
    
})
app.put('/email/toggle', (req, res) => {
    sendEmailBool = !sendEmailBool;
    res.status(200).send({sendEmails: sendEmailBool});
})
app.listen(3000, () => {
    console.log("listening");
});

export default app;
