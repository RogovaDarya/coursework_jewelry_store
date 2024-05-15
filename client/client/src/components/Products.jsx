import PropTypes from 'prop-types';
import Product from './Product';
import { useState } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import Filters from './Filters';
import SearchFields from './SearchFields';
export default function Products({ products, isBrand }) {
  const [filters, setFilters] = useState([]);

  const handleFilterChange = useCallback((key, fn) => {
    setFilters((filters) =>
      fn
        ? [...filters.filter((f) => f.key !== key), { key, fn }]
        : filters.filter((f) => f.key !== key)
    );
  }, []);

  const productsToDisplay = useMemo(
    () =>
      products.filter((product) =>
        filters.every((filter) => filter.fn(product))
      ),
    [filters, products]
  );

  return (
    <div className="grid grid-cols-5 w-full gap-4 px-2 py-2 h-full">
      <Filters
        onFilterChange={handleFilterChange}
        setFilters={setFilters}
        isBrand={isBrand}
      />
      <div className="col-span-4 grid gap-1 px-2 grid-cols-4 overflow-y-auto py-2">
        <div className="col-span-4 flex flex-row border-b border-gray-600 pb-2">
          <SearchFields onFilterChange={handleFilterChange} />
        </div>
        <div className="col-span-4 grid gap-4 px-2 grid-cols-4 overflow-y-auto py-2">
          {productsToDisplay.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.array,
  isBrand: PropTypes.bool,
};
