const http = require('http');
// const server = http.createServer((req,res)=>{
//   if (req.url === '/') {
//     res.write('Hello world from node.js');
//     res.end();
//   }
//   else {
//     res.write('Using some other domain');
//     res.end();
//   }
// })
//
// server.listen('3000');

//Have server return statc files
// const fs = require('fs');
//
// http.createServer((req,res)=>{
//   const readStream = fs.createReadStream('./static/index.html')
//   res.writeHead(200, {'Content-type' : 'text/html'});
//   readStream.pipe(res);
// }).listen(3000);
