//Set Up
const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    //Your SQL username (use root),
    user: "root",
    //Your MySQL password,
    password: "54De90ffcf!",
    database: "election",
  },
  console.log("Connected to the election database.")
);
//====================================================

//query database to View All Candidates
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   console.log("List of all candidates: ", rows);
// });

//query database to View a Specific Candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("A Single Candidate: ", row);
// });

//query database to Delete a Specific Candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

//query database to Add a New Candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
// VALUES (?,?,?,?)`;
// const params = [1, "Ronald", "Firbank", 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

//======================================================

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
