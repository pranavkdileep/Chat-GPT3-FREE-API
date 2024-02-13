const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
app.use(express.json());

app.get('/', async (req, res) => {
    res.send(await generateContent("What is the meaning of life?"));
    });

app.post('/generate', async (req, res) => {
    const prompt = req.body.prompt;
    res.send(await generateContent(prompt));
    });

const generateContent = async (prompt) => {
    const url = `https://openai-gpt.remixproject.org/`;
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Accept-Language": "en",
        "Connection": "keep-alive",
        "Origin": "https://remix.ethereum.org",
        "Referer": "https://remix.ethereum.org/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134"
    };
    const data={
        "prompt":prompt
    };
    return await axios.post(url, data, {headers: headers})
    .then(response => {
        var bodyy = "";
        for (var i = 0; i < response.data.choices.length; i++) {
            bodyy += response.data.choices[i].message.content;
        }
        console.log(bodyy);
        return bodyy;
    })
    .catch(error => {
        console.log(error);
    });
};

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });