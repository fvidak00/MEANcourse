const http=require("http")

const server=http.createServer((req,res)=>{
  res.end("This is my 1st response")
})

server.listen(process.env.PORT||3000)
