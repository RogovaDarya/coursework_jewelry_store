import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

function Product(product) {
  const navigate = useNavigate();

  return (
    <div className="py-2 flex flex-col gap-2 items-center border border-black rounded-xl aspect-square justify-center cursor-pointer hover:border-2 hover z-50 mt-4">
      <div
        className="flex flex-col gap-2 items-center"
        onClick={() => navigate(`/products/${product.product.id}`)}
      >
        <Suspense fallback={<div>Loading..</div>}>
          <img src={product.product.imageurl} className="w-48 aspect-square" />
        </Suspense>
        <h2 className="font-semibold text-sm text-gray-500">
          {product.product.brand}
        </h2>
        <h1 className="font-semibold text-base font-mono">
          {product.product.type} {product.product.brand}/{product.product.art}
        </h1>
        <span className="font-mono">{product.product.coast} Руб.</span>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
