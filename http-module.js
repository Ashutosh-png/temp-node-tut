const http = require ('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
       return  res.end('welcome to the homepage')  }
    if (req.url === '/about'){
        return res.end ('here is our short history')}
    
     return res.end(`<h1>Oops</h1>`)
    
})

server.listen(5000);