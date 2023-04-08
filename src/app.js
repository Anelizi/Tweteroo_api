import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
let userLocalhost;

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  console.log(req.body);
  userLocalhost = req.body;

  if(!username || !avatar){
    return res.status(400).send("BAD REQUEST");
  }

  const user = {
    username,
    avatar,
  };

  users.push(user);
  res.status(200).send("OK");
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;
  console.log(req.body);

  if (!username || !tweet) {
    return res.status(400).send("BAD REQUEST");
  }

  if (!userLocalhost){
    return res.status(401).send("UNAUTHORIZED")
  }

  const newTweets = { ...req.body, avatar: userLocalhost.avatar };

  tweets.push(newTweets);
  res.status(200).send("OK");
});

app.get("/tweets", (req, res) => {
  const tweetsLast = [...tweets].reverse().slice(0,[10])
  res.send(tweetsLast);
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
