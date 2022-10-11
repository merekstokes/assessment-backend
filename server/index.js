const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const controller = require('./controller');

app.get("/api/compliment", controller.getCompliment);

app.get("/api/fortune", controller.getFortune);

app.get("/api/goal", controller.addGoal);

app.get("/api/chooseGoal", controller.chooseGoal);

app.get("/api/quote", controller.getQuote)

app.listen(4000, () => console.log("Server running on 4000"));
