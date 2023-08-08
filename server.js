import "dotenv/config";
import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});