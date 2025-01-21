const apiPath = `https://fakestoreapi.com/products/`;

export const fetchProducts = async () => {
    try {
        const res = await fetch(apiPath);
        if (!res.ok) {
            throw new Error(`${res.status} Something went wrong while we were fetching data!  `);
        }
        return await res.json();
    } catch (error) {
        console.log("Unexpected Error:" + error);
    }
};
