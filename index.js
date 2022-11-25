import express from 'express'

const app = express()

app.use(express.static("public")) // commentaire

app.get("/", (req, res) => {
  res.send("<h1>Bonjour :D</h1>" + Date())
})


app.listen(3000, () => console.log("Le serveur tourne !"))
