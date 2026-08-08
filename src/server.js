import express from 'express'
import {fileURLToPath} from 'url'
import path,{dirname} from 'path'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'

const app = express()

const port = process.env.port || 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

//Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname,"../public")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"public","index.html"))
    
})

// Routes
app.use('/auth',authRoutes)
app.use('/todos',todoRoutes)

//Server is Live
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
