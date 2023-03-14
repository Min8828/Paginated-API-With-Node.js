const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./user-model");

mongoose
  .connect("mongodb://127.0.0.1/pagination")
  .then(() => {
    console.log("Connect Successfully");
  })
  .catch((err) => {
    console.log("Connect Failed");
    console.log(err);
  });

const db = mongoose.connection;
db.once("open", async () => {
  if ((await User.count().exec()) > 0) return;

  Promise.all([
    User.create({ name: "User 1" }),
    User.create({ name: "User 2" }),
    User.create({ name: "User 3" }),
    User.create({ name: "User 4" }),
    User.create({ name: "User 5" }),
    User.create({ name: "User 6" }),
    User.create({ name: "User 7" }),
    User.create({ name: "User 8" }),
    User.create({ name: "User 9" }),
    User.create({ name: "User 10" }),
    User.create({ name: "User 11" }),
    User.create({ name: "User 12" }),
  ]).then(() => console.log("Added Users"));
});

app.get("/users", paginatedResults(User), async (req, res) => {
  if (!res.paginatedResults) res.json(await User.find().exec());
  res.json(res.paginatedResults);
});

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    if (!page || !limit) next();

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};

    if (endIndex < (await model.count().exec())) {
      results.next = {
        page: page + 1,
        limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit,
      };
    }
    try {
      results.results = await model.find().limit(limit).skip(startIndex).exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}

app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});
