import express from 'express'
import {fileURLToPath} from 'url'
import path,{dirname} from 'path'

const app = express()

const port = process.env.port || 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.use(express.static(path.join(__dirname,"../public")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"public","index.html"))
})


//Server is Live
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
