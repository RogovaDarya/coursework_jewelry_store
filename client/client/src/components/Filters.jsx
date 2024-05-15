import PropTypes from 'prop-types';
import CheckBox from './CheckBox';
import {
  BRANDS,
  MATERIALS,
  TYPES,
} from '../../../admin/src/data/constants';
import { useState } from 'react';

function Filters({ onFilterChange, setFilters, isBrand }) {
  const [materials, setMaterials] = useState([]);
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);

  const handleMaterialsChange = (material) => {
    setMaterials((prev) =>
      prev.includes(material)
        ? [...prev.filter((mat) => mat !== material)]
        : [...prev, material]
    );
  };

  const handleBrandsChange = (brand) => {
    setBrands((prev) =>
      prev.includes(brand)
        ? [...prev.filter((br) => br !== brand)]
        : [...prev, brand]
    );
  };

  const handleTypesChange = (type) => {
    setTypes((prev) =>
      prev.includes(type)
        ? [...prev.filter((tp) => tp !== type)]
        : [...prev, type]
    );
  };

  const handleFiltersAccept = () => {
    setFilters([]);

    if (types.length !== 0) {
      onFilterChange('type', (prod) => types.includes(prod.type));
    }

    if (materials.length !== 0) {
      onFilterChange('material', (prod) => materials.includes(prod.material));
    }

    if (brands.length !== 0) {
      onFilterChange('brand', (prod) => brands.includes(prod.brand));
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full mx-auto h-full border-r border-gray-600 items-center overflow-y-auto">
      <h1 className="font-bold text-2xl mt-2 py-2 border-b w-4/5 text-center border-gray-600">
        Фильтры
      </h1>
      <h2 className="font-semibold text-xl">Тип украшений</h2>
      <div className="flex flex-col w-full items-start px-6 text-lg">
        {TYPES.map((type, index) => (
          <CheckBox key={index} text={type} onChange={handleTypesChange} />
        ))}
      </div>
      <div className="flex flex-row w-4/5 border-b border-gray-600"></div>
      {!isBrand && (
        <>
          <h2 className="font-semibold text-xl">Производитель</h2>
          <div className="flex flex-col w-full items-start px-6 text-lg">
            {BRANDS.map((type, index) => (
              <CheckBox key={index} text={type} onChange={handleBrandsChange} />
            ))}
          </div>
          <div className="flex flex-row w-4/5 border-b border-gray-600"></div>
        </>
      )}
      <h2 className="font-semibold text-xl">Материал</h2>
      <div className="flex flex-col w-full items-start px-6 text-lg">
        {MATERIALS.map((type, index) => (
          <CheckBox key={index} text={type} onChange={handleMaterialsChange} />
        ))}
      </div>
      <button
        type="submit"
        onClick={handleFiltersAccept}
        className="px-4 py-1 border border-gray-600 rounded-lg"
      >
        Применить
      </button>
    </div>
  );
}

export default Filters;

Filters.propTypes = {
  onFilterChange: PropTypes.func,
  setFilters: PropTypes.func,
  isBrand: PropTypes.bool,
};
