import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3000;

app.get("/api/user/list", (req, res) => {
  res.json({
    status: 1,
    data: [
      { id: 1, name: "User 1", age: 25, sex: "male" },
      { id: 2, name: "User 2", age: 30, sex: "female" },
      { id: 3, name: "User 3", age: 28, sex: "male" },
    ],
  });
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
