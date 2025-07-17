export function getAllnotes(req,res)  {
  //get -> send notes
  res.status(200).send("you just fetched the notes");
}
export function createNote(req,res) {
  res.status(201).json({message:"Note created successfully"})
}
export function updateNote(req,res)  {
  res.status(200).json({message:"Post updated successfully"})
}
export function deleteNote(req,res) {
  res.status(200).json({message:"Note deleted"})
}