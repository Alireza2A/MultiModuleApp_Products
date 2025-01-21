export const storeLocally = (product) => {
    const selectedPorducts = JSON.parse(localStorage.getItem("products")) || [];
    const newProd = { id: product.id, name: product.title };
    localStorage.setItem("products", JSON.stringify([newProd, ...selectedPorducts]));
};
