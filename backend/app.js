const express=require("express")
const bodyParser=require("body-parser")

const app=express()

app.use(bodyParser.json())

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*")
  res.setHeader("Access-Control-Allow-Header",
                "Origin, X-Requested-With, Content-Type, Accept")
  res.setHeader("Access-Comtrol-Allow-Methods",
                  "GET, POST, PATCH, DELETE, OPTIONS")
  next()
})

app.post("/api/posts", (req,res,next)=>{
  const post=req.body
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
