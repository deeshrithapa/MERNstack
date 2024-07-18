// const math = require('./math.js');
// const file = require('./file.js');

// const readfile= file.read;
// console.log(readfile);

const http = require('http');
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("Hello world");
    res.end();
}
)
server.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})



