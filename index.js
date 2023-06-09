const express = require("express")
const app = express()

const { PORT } = require("./utils/config")
const { connectToDatabase } = require("./utils/db")

const { errorHandler } = require("./utils/middleware")

const blogsRouter = require("./controllers/blogs")
const usersRouter = require("./controllers/users")
const authorsRouter = require("./controllers/authors")
const sessionsRouter = require("./controllers/session")
const readingListRouter = require("./controllers/readingLists")

app.use(express.json())

app.use("/api/blogs", blogsRouter)
app.use("/api/users", usersRouter)
app.use("/api/authors", authorsRouter)
app.use("/api", sessionsRouter)
app.use("/api/readinglists", readingListRouter)

app.use(errorHandler)

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()
