import Link from "next/link";

type Props = {
    promise : Promise<Product[]>
}


export default async function ItemList({promise} : Props) {
  const products = await promise;
  const content = products.map((product) => {
    return (
         <div className="text-center mt-14" key={product.id}>
              <Link href={`/product/${product.id}`} >
                <img
                    src={product.image}
                    width={100}
                    height={100}
                    alt="Product"
                    className="mx-auto"
                />
                <p>{product.title}</p>
              </Link>
            </div>
    )
  })
  return content;
}

