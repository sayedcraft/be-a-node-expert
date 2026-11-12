import { IncomingMessage, ServerResponse } from "http";


const productControl=(req: IncomingMessage,res : ServerResponse)=>{
    res.writeHead(200, {"Content-type" : "Application/json"})
    res.end(JSON.stringify({message : "This is products route"}))
}

export default productControl;