import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server : Server = createServer((req : IncomingMessage,res : ServerResponse)=>{
    // console.log("Request received:", req);
    // console.log("Response sent:", res);

    // console.log("Request received:", req.method, req.url);

    const url = req.url;
    const method = req.method;

    if(url === "/"){
        // console.log("This is root route");

        res.writeHead(200, {"Content-type" : "application/json"})
        .end(JSON.stringify({messege:"This is root route"})
        )
    }
    else if(url?.startsWith('/products')){
        res.writeHead(200, {"Content-type" : "Application/json"})
        res.end(JSON.stringify({message : "This is products route"}))
    }
    else{
        // console.log("This is not root route");

        res.writeHead(404, {"content-type" : "text/plain"});
        res.end("This is not root route");
    }


})

server.listen(5000,()=>{
    console.log("Server is running on port 5000 !");
})