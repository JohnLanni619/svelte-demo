// @ts-ignore
export async function load({ fetch, params }) {
    const { product_id } = params
    const res = await fetch(`https://dummyjson.com/products/${product_id}`);
    const data = await res.json();
    return {
        product: data
    };
}