import express from "express";

const app = express()

app.get("/api/notes", (req,res) => {
  //get -> send notes
  res.status(200).send("you got 5 notes");
});

app.post("/api/notes", (req,res) => {
  //post -> create a notes
  res.status(201).send("you have created notes successfully ");
});

app.put("/api/notes", (req,res) => {
  //put -> update notes
  res.send("you got 5 notes");
});

app.delete("/api/notes", (req,res) => {
  //delete -> delete notes
  res.send("you got 5 notes");
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
