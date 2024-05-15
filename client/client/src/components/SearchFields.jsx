import { PropTypes } from 'prop-types';
import { useState } from 'react';

function SearchFields({ onFilterChange }) {
  const [name, setName] = useState('');
  const [art, setArt] = useState('');

  const handleBtnClick = () => {
    if (name.trim() === '') {
      onFilterChange('name', (prod) =>
        prod.type.toLocaleLowerCase().includes(name)
      );
    }

    if (art.trim() === '') {
      onFilterChange('art', (prod) =>
        prod.art.toLocaleLowerCase().includes(art)
      );
    }

    if (name.trim() !== '') {
      if (name.split(' ').length === 2)
        onFilterChange(
          'name',
          (prod) =>
            name.toLocaleLowerCase().includes(prod.type.toLocaleLowerCase()) &&
            name.toLocaleLowerCase().includes(prod.brand.toLocaleLowerCase())
        );
      else
        onFilterChange(
          'name',
          (prod) =>
            name.toLocaleLowerCase().includes(prod.type.toLocaleLowerCase()) ||
            name.toLocaleLowerCase().includes(prod.brand.toLocaleLowerCase())
        );
    }

    if (art.trim() !== '') {
      onFilterChange('art', (prod) =>
        prod.art.toLocaleLowerCase().includes(art.toLocaleLowerCase())
      );
    }
  };

  return (
    <div className="flex flex-row w-full gap-2 h-10 items-center">
      <input
        type="text"
        className="border border-gray-600 rounded-lg w-full h-min px-2"
        placeholder="Что вы ищете?"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="border border-gray-600 rounded-lg w-full h-min px-2"
        placeholder="Артикул"
        onChange={(e) => setArt(e.target.value)}
      />
      <button
        className="border border-gray-600 rounded-lg h-min px-4 w-min"
        onClick={handleBtnClick}
      >
        Найти
      </button>
    </div>
  );
}

export default SearchFields;

SearchFields.propTypes = {
  onFilterChange: PropTypes.func,
};
