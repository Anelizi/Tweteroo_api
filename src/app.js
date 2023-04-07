import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

const user = [
  {
    username: "bobesponja",
    avatar:
      "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
  },
];

const tweet = [
  {
    username: "bobesponja",
    tweet: "Eu amo hambúrguer de siri!",
  },
];

app.post("/sign-up", (req, res) => {
    const { username, avatar} = req.body;
    console.log(req.body)
    const users ={
        username,
        avatar
    }
    user.push(users);
    res.send("OK");
});

app.get("/tweets", (req, res) => {
  res.send(tweet);
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
