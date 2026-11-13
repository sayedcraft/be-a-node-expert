import { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";
import type { IProduct } from "../type/product";

const productControl = (req: IncomingMessage, res: ServerResponse) => {
  //products=> GET,POST,PUT

  const url = req.url;
  const method = req.method;
  // console.log(url); -> /products/1 -> []

  const urlParam = url?.split("/");
  // console.log(urlParam);

  const id = urlParam && urlParam[1] === "products" ? Number(urlParam[2]) : null;
  console.log(id);

  //! Get all data
  if (url === "/products" && method === "GET") {
    // const products = [
    //   {
    //     id: 1,
    //     name: "a",
    //     price: 10,
    //   },
    //   {
    //     id: 2,
    //     name: "b",
    //     price: 20,
    //   },
    //   {
    //     id: 3,
    //     name: "c",
    //     price: 130,
    //   },
    // ];

    const products = productService();

    res.writeHead(200, { "Content-type": "Application/json" });
    res.end(
      JSON.stringify({
        message: "Products Retrived successfully !",
        data: products,
      }),
    );
  }
  else if(method === "GET" && id !== null){
    const products = productService();
    const product = products.find((p : IProduct) => p.id===id)

    res.writeHead(200, { "Content-type": "Application/json" });
    res.end(
      JSON.stringify({
        message: "Products Retrived successfully !",
        data: product,
      }),
    );
  }
};

export default productControl;
