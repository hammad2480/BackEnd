const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
const url='mongodb+srv://hammadkhalid2480:SZrUhhihvGaR693z@mycluster.e7wpn.mongodb.net/?retryWrites=true&w=majority&appName=myCluster'

app.use(cors)
app.use(express.json())

const userRoutes=require('./routes/users')
app.use('/api/users',userRoutes)

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('MongoDB Connected'))
.catch(err=>console.log(err))

app.get('/',(req,res)=>res.send("Backend is running"))

app.listen(3000, () => console.log(`Server is running on port ${3000}`));