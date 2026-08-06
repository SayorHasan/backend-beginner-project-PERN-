const express = require("express")
const app = express()

const port = 3000

// Variables
let data = {
    user: ["Astrid"]
}


//middleware
app.use(express.json())



app.get('/',(req,res)=>{
    res.send(`
        <body>
            <P>
                ${JSON.stringify(data)}
            </P>
        </body>
        `) 
})


app.post('/',(req,res)=>{
    const newEntry = req.body
    console.log(newEntry)
    data.user.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/',(req,res)=>{
    data.user.pop()
    console.log("Last entry is deleted from the data!")
})


//Server is Live
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
