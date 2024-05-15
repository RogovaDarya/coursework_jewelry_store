import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import Products from '../components/Products';

function Brand() {
  const { products } = useLoaderData();

  return (
    <div className="flex flex-col justify-center w-full items-center mx-auto h-full max-h-full overflow-y-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <Await
          resolve={products}
          errorElement={<div>Could not load data</div>}
          className="w-full"
        >
          {(prods) => <Products products={prods} isBrand={true} />}
        </Await>
      </Suspense>
    </div>
  );
}

export default Brand;
