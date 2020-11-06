const http = require('http');

const server = http.createServer((req, res) =>{
    // console.log("Request Made");
    //console.log(req);
    console.log(req.url, req.method);


    //setting header content type
    res.setHeader('Content-Type', 'text/html');

    res.write('<head><link rel="styleseet" href="#"></head>');
    res.write('Hellow Mynew localhost 3000');
    res.write('<h2>This is my own server created by NodeJs</h2><p>And running the text from own text content</p>');
    res.end();
});

 server.listen(3000, "localhost", () =>{
     console.log("Listening for request for 3000");
 })

 //after write this file till here need to open browser and localhost:3000



