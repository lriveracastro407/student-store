const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const { NotFoundError } = require("./utils/errors")
const storeRouter = require("./routes/store")

const app = express()

app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())
app.use("/store", storeRouter)

/* takes care of errors in non-existent routes*/
app.use((req, res, next) => { 
  return next(new NotFoundError()) 
})

// app.get("/", async (req, res, next) => {
//     res.status(200).json({ping: "pong"})
// })


/* Generic error handler */
app.use((error, req, res, next) => {
  const status = error.status || 500 
  const message = error.message 

  return res.status(status).json({ 
    error: { message, status }, 
  })
})

const port = 3001

app.listen(port, () => {
  console.log(`🚀 Server listening on port ` + port)
})