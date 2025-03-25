import express from 'express';
import {createTable, createUser, getUser, attemptLogin} from './databaseHelper.js';
import { User } from './interface.js';
createTable();
const app = express();

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
        res.status(200).send({authUserId: userObj.authUserId});
    } catch (e) {
        res.status(400).send({error: e.message});
    }
})
app.delete('/auth/logout', async (req, res) => {
    
})

app.get('/socities/all', async (req, res) => {
    res.status(200).send({societies: []}) // array of Society
})
app.get('/society/subscribed', async (req, res) => {
    const userId:number = req.body.authUserId;
    res.status(200).send({societies: []}) // array of Society (that userId is a part of)
})
app.get('/events/future', async (req, res) => {
    const userId: number = req.body.authUserId;
    res.status(200).send({events: []}) // array of Event (from socities that the user is a part of and are in the future)
})
app.get('/events/past', async (req, res) => {
    const userId: number = req.body.authUserId;
    res.status(200).send({events: []}) // array of Event (from socities that the user is a part of and have already passed)
})
app.listen(3000, () => {
    console.log("listening");
});

export default app;
