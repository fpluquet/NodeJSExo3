import express from 'express'

const app = express()

app.use(express.static("public")) // commentaire dsfjshdfkjsdhfkj

// jhsjdh

app.get("/", (req, res) => {
  res.send("<h1>Bonjour :D :D</h1>" + Date())
})

app.get("/test/{id}", (req, res) => {
  res.send(req.params)
})



app.listen(3000, () => console.log("Le serveur tourne !"))
