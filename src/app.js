import express from 'express';
import USER from './user';
import TWEET from './tweet';

const app = express();

app.listen(5000, () => console.log(`Servidor rodando na porta 5000`));