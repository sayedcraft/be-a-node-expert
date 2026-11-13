import { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";

const productControl = (req: IncomingMessage, res: ServerResponse) => {
  //products=> GET,POST,PUT

  const url = req.url;
  const method = req.method;

  if (url === "/products" && method === "GET") {
    const products = [
      {
        id: 1,
        name: "a",
        price: 10,
      },
      {
        id: 2,
        name: "b",
        price: 20,
      },
      {
        id: 3,
        name: "c",
        price: 130,
      },
    ];

    productService();

    res.writeHead(200, { "Content-type": "Application/json" });
    res.end(
      JSON.stringify({
        message: "Products Retrived successfully !",
        data: products,
      }),
    );
  }
};

export default productControl;
