//new:
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");

// Middleware
app.use(cors());
app.use(express.json());

// Add a user
app.post("/addUser", (req, res) => {
  const username = req.body["username"];
  const password = req.body["password"];
  console.log("username:" + username);
  console.log("password:" + password);

  const insertSTMT = `INSERT INTO accounts (username,password) VALUES ('${username}', '${password}');`;

  pool
    .query(insertSTMT)
    .then((response) => {
      console.log("Data Saved");
      console.log(response);
      res.send("User added successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Server Error");
    });
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM accounts");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

// Get a user by ID
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM accounts WHERE user_id = $1", [
      id,
    ]);
    if (user.rows.length > 0) {
      res.json(user.rows[0]);
    } else {
      return res.status(404).json({ error: "User not found!" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

// Update a user by ID
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;
    const updateSTMT = `UPDATE accounts SET username = '${username}', password = '${password}' WHERE user_id = ${id} RETURNING *`;
    const result = await pool.query(updateSTMT);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      return res.status(404).json({ error: "User not found!" });
    }

    res.json({ message: "User was updated!", data: result.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

// Delete a user by ID
// app.delete("/users/user_id", async (req, res) => {
//   try {
//     const { user_id } = req.params;
//     const deleteSTMT = `DELETE FROM accounts WHERE user_id = ${user_id}`;
//     await pool.query(deleteSTMT);
//     res.json("User was deleted!");
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: 'Server Error' });
//   }
// });
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteSTMT = `DELETE FROM accounts WHERE user_id = ${id} RETURNING *`;
    const result = await pool.query(deleteSTMT);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      return res.status(404).json({ error: "User not found!" });
    }
    res.json({ message: "User was deleted!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

app.listen(4000, () => console.log("Server running on localhost:5000"));
