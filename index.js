const express = require('express')

const app = express()
const port = 2345

const data_users = [
  { id: 1, name: "Audric Kenny Rizally", alamat: "Cileutik" },
  { id: 2, name: "Ghina Khairunnisa", alamat: "Bandung" },
  { id: 3, name: "Hana Syifa", alamat: "Jakarta" },
  { id: 4, name: "Daehan Ibrahim", alamat: "Bandung" },
];

app.get("/nmaxamg", (req, res) => {
  const data = data_users;

  let result = {
      status: 200,
      data: data,
  };

  res.json(result);
});
  
  app.listen(port, () => console.log(`Server running on port ${port}`));
