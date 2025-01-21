import { CreateProductCard, RenderProduct } from "./ui.js";
import { fetchProducts } from "./network.js";

const Main = async () => {
    const products = await fetchProducts();
    products.forEach((product) => {
        const productCard = CreateProductCard(product);
        RenderProduct(productCard);
    });
};
Main();
