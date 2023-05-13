export default async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products?limit=10")
    if(!res.ok) throw new Error("Somethiing Went Wrong")
    return res.json()
}



