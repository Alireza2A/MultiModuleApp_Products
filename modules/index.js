import { CreateProductCard, RenderProduct } from "./ui.js";
import { FetchProducts } from "./network.js";

const Main = async () => {
    const products = await FetchProducts();
    products.forEach((product) => {
        const productCard = CreateProductCard(product);
        RenderProduct(productCard);
    });
};
Main();
