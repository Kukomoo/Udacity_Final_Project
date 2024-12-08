import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
dotenv.config();



dotenv.config();

const app = express();



app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);




app.get('/', function (req, res) {
    res.send("This is the server API page, you may access its services via the client app.");
});







app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});

// POST Route
app.post('/analyze', async (req, res) => {
    console.log('Request body:', req.body);
    const text = req.body.text;


    if (!text) {
        return res.status(400).send({ error: 'Txt input is required' });
    }

    const apiKey = process.env.API_KEY;
    const url = `https://api.meaningcloud.com/sentiment-2.1`;

    const body = new URLSearchParams();
    body.append('key', apiKey);
    body.append('txt', text);
    body.append('lang', 'en');

    try {

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: body,
        });

        const data = await response.json();


        res.send(data);
    } catch (error) {
        console.error('Error calling MeaningCloud API:', error);
        res.status(500).send({ error: 'Failed to process the request' });
    }
});

