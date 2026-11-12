import { IncomingMessage, ServerResponse } from "http";
import productControl from "../controllers/product.controler";

const routeHandler = (req: IncomingMessage,res : ServerResponse)=>{
    const url = req.url;
    const method = req.method;

    if(url === "/"){
        // console.log("This is root route");

        res.writeHead(200, {"Content-type" : "application/json"})
        .end(JSON.stringify({messege:"This is root route"})
        )
    }
    else if(url?.startsWith('/products')){
        productControl(req,res);
    }
    else{
        // console.log("This is not root route");

        res.writeHead(404, {"content-type" : "text/plain"});
        res.end("This is not root route");
    }

}

export default routeHandler;