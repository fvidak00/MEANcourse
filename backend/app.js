const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
require("dotenv").config()

const Post=require("./models/post")

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

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*")
  res.setHeader("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Comtrol-Allow-Methods",
                  "GET, POST, PATCH, DELETE, OPTIONS")
  next()
})

app.post("/api/posts", (req,res,next)=>{
  const post=new Post({
    title:req.body.title,
    content:req.body.content
  })
  console.log(post)
  res.status(201).json({
    message:"Post added successfully"
  })
})

app.use("/api/posts",(req,res,next)=>{
  const posts=[
    {
      id:"fdhg5476",
      title:"1st server-side post",
      content:"This is coming from the server."
    },
    {
      id:"zuioqwer",
      title:"2nd server-side post",
      content:"This is coming from server"
    }
  ]

  res.status(200).json({
    message:"Posts fetched successully",
    posts:posts
  })
})

module.exports=app
