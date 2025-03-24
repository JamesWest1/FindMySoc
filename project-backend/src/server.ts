import express from 'express';

const app = express();

app.get('/', function (req: express.Request, res: express.Response) {
    res.send('Hello World');
})

app.listen(3000, () => {
    console.log("listening")
});


