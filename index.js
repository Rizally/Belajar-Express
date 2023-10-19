const express = require('express')

const app = express()
const port = 2345

app.get("/", (req, res) => {
    res.json({
      message: "HEllo There",
    });
  });
  
  app.get("/users", (req, res) => {
    const data = data_users;
  
    let result = {
      status: 200,
      data: data,
    };
  
    res.json(result);
  });
  
  app.get("/users/:id", (req, res) => {
    let id = parseInt(req.params.id);
  
    let result;
    const user = data_users.find((user) => user.id === id);
    if (user) {
      result = {
        status: 200,
        data: user,
      };
    } else {
      res.status(404).json({ error: "User not found" });
    }
    res.json(result);
  });
  
  app.listen(port, () => console.log(`Server running on port ${port}`));
