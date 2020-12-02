const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
require("dotenv").config()
const path=require("path")

const postsRoutes=require("./routes/posts")
const userRoutes=require("./routes/user")

const app=express()

const connectURI=process.env.DB_URI
const connectConfig={
  useNewUrlParser:true,
  useUnifiedTopology: true
}
mongoose.connect(connectURI,connectConfig)
  .then(()=>{
    console.log("Connected to database")
  })
  .catch(()=>{
    console.log("Connection failed")
  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use("/images",express.static(path.join("backend/images")))

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*")
  res.setHeader("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Control-Allow-Methods",
                  "GET, POST, PATCH, DELETE, OPTIONS, PUT")
  next()
})

app.use("/api/posts",postsRoutes)
app.use("/api/user",userRoutes)


module.exports=app
