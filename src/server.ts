import { createServer, IncomingMessage, Server, ServerResponse } from "http";
import routeHandler from "./routes/route";

const server : Server = createServer((req : IncomingMessage,res : ServerResponse)=>{
    // console.log("Request received:", req);
    // console.log("Response sent:", res);

    // console.log("Request received:", req.method, req.url);

    routeHandler(req,res);

})

server.listen(5000,()=>{
    console.log("Server is running on port 5000 !");
})