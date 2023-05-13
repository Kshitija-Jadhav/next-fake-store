import getProducts from "@/lib/getProducts";
import getSingleProduct from "@/lib/getSingleProduct"
import Link from "next/link";

type Params = {
    params : {
        productId : string
    }
}

export default async function ProductPage({params : {productId}}  : Params) {
  const res : Promise<Product> = getSingleProduct(productId);
  const product = await res;
  return (
    <>
        <div className="m-10">
        <Link href={"/"} className="bg-black text-2xl text-white rounded-md text-center px-6 py-2">Home</Link>
        </div>
        <div className="flex gap-10 max-w-4xl justify-center h-[80vh] mx-auto items-center">
            <div>
                <img
                    src={product.image}
                    alt="Image"
                    width={500}
                    height={500}
                />
            </div>
            <div>
                <p className="text-2xl my-4">{product.title}</p>
                <p className="text-gray-500">{product.description}</p>
                <p className="my-4 border border-black-3 inline-block p-2">{product.category.toUpperCase()}</p>
                <p className="text-green-500">${product.price}</p>
            </div>
        </div>
    </>
  )
}
export async function generateStaticParams() {
    const productData : Promise<Product[]> = getProducts()
    const products = await productData;
  
    return products.map(product => ({ 
        productId : product.id.toString()
    }))
  
}
