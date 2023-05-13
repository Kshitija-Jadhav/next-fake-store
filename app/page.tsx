import getProducts from '@/lib/getProducts'
import React from 'react'
import ItemList from './components/ItemList';

export default async function page() {
  const res : Promise<Product[]> = getProducts();
  const data = await res;
  return (
    <>
      <div className=''>
        <div className='flex justify-center mt-2'>
        <h1 className='text-3xl bg-black text-white rounded-xl text-center p-6 inline-block'>Welcome to Fake Store API</h1> 
        </div>
        {
          data.map((item) => (
            <div key={item.id} className="grid gap-16 grid-cols-fluid items-center">
              {/* @ts-expect-error Server Component */}
              <ItemList promise={data}/>
            </div>
          ))
        }
      </div>
    </>
  )
}
