export async function load(){
    const request = await fetch('https://dummyjson.com/products')
    const data = await request.json()
    return data
}