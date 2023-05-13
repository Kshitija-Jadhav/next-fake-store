export default async function getSingleProduct(productId : string) {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
    if(!res.ok) throw new Error("Somethiing Went Wrong")
    return res.json()
}
