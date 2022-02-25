var express = require("express");
var router = express.Router();
const db = require("../model/helper");

function getUsers(req, res) {
  db("SELECT * FROM users ORDER BY id ASC;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
}
//dont need
// router.get("/", (req, res) => {
//   res.send("Welcome to the API");
// });

router.get("/", getUsers);

router.post("/", (req, res) => {
  const { username, email, city, age, photo, activity } = req.body;
  db(
    `INSERT INTO users (username, email, city, age, photo, activity) VALUES ("${username}", "${email}", "${city}", ${age}, "${photo}", "${activity}");`
  )
    .then((results) => {
      getUsers(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

// router.put("/todos/:todo_id", (req, res) => {
//   db(`UPDATE items SET complete = !complete WHERE id = ${req.params.todo_id};`)
//     .then((results) => {
//       getItems(req, res);
//     })
//     .catch((err) => res.status(500).send(err));
// });

// router.delete("/todos/:todo_id", (req, res) => {
//   db(`DELETE FROM items WHERE id = ${req.params.todo_id};`)
//     .then((results) => {
//       getItems(req, res);
//     })
//     .catch((err) => res.status(500).send(err));
// });

module.exports = router;
