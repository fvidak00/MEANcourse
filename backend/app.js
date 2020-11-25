const express=require("express")

const app=express()

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
    message:"Posts fetched succesfully",
    posts:posts
  })
})

module.exports=app
