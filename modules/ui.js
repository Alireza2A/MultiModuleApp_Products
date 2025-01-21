import { storeLocally } from "./storage.js";
export const CreateProductCard = (product) => {
    const card = document.createElement("div");
    card.className = "border m-1";
    const productImg = document.createElement("img");
    productImg.src = product.image;
    productImg.className = "object-cover h-56 w-88";
    const container = document.createElement("div");
    container.className = "flex space-between flex-col bg-gray-300";

    //Product Name
    const productTitle = document.createElement("h5");
    productTitle.textContent = product.title;
    productTitle.className = "inline p-2 ";

    //Product info
    const addBtn = document.createElement("button");
    addBtn.setAttribute("id", product.id);
    addBtn.textContent = "Add";
    addBtn.className = "mt-5 px-4 py-2 bg-red-500 hover:bg-green-400 text-white rounded";
    addBtn.addEventListener("click", (e) => storeLocally(product));

    //Adding name and info to container
    container.appendChild(productTitle);
    container.appendChild(addBtn);

    //Adding img and container to the card
    card.appendChild(productImg);
    card.appendChild(container);
    return card;
};
const pockemonContainer = document.getElementById("product-container");
export const RenderProduct = (card) => {
    pockemonContainer.appendChild(card);
};
