import express from 'express';
import {createTable} from './databaseHelper.js';
createTable();
const app = express();

app.get('/', function (req: express.Request, res: express.Response) {
    res.send('Hello World');
})


// app.put('/subscribe', (req:express.Request, res:express.Response) => {
// })


app.listen(3000, () => {
    console.log("listening")
});

export default app;
