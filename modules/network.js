const apiPath = `https://fakestoreapi.com/products/`;

export const FetchProducts = async () => {
    try {
        const res = await fetch(apiPath);
        if (!res.ok) {
            throw new Error(` Something went wrong while we were fetching data! ${res.status} `);
        }
        return await res.json();
    } catch (error) {
        console.log("Unexpected Error:" + error);
    }
};
