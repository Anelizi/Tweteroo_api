import express from 'express';

const PORT = 5000;
const user = [];
const tweet = [];

const app = express();

app.get("/tweets", (req, res) => {
    res.send("oi")
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));