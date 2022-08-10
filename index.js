import express from 'express'
import bodyParser from 'body-parser'
import usersRoute from './routes/users.js'
const app=express();

const PORT =5000;
//adding middle wares to our mmain file
app.use(bodyParser.json());
app.use('/users',usersRoute)

app.get('/',(req,res)=>{
    res.send('Hello From Homepage')
})


app.listen(PORT,()=>
    console.log(`server rinning on port :http://localhost:${PORT}`)
)