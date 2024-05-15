import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row gap-10 w-full h-10 px-10 items-center text-lg font-serif mx-auto">
        <div className="flex flex-row gap-10 w-full h-10 px-10 items-center text-lg font-serif mx-auto">
          <Link
            className="cursor-pointer hover:font-bold w-20 text-center"
            to={'/'}
          >
            Главная
          </Link>
          <Link
            className="cursor-pointer hover:font-bold w-20 text-center"
            to={'/products'}
          >
            Каталог
          </Link>
          <Link
            className="cursor-pointer hover:font-bold w-20 text-center"
            to={'/brand/Pandora'}
          >
            Pandora
          </Link>
          <Link
            className="cursor-pointer hover:font-bold w-20 text-center"
            to={'/brand/Tous'}
          >
            Tous
          </Link>
        </div>
        <Link
          className="cursor-pointer hover:font-bold w-20 text-center"
          to={'/about'}
        >
          О нас
        </Link>
      </div>
      <Link
        to={'/'}
        className="flex flex-row items-center justify-center border-y border-gray-600 h-20 text-4xl font-serif font-bold uppercase"
      >
        Ювелирный магазин
      </Link>
    </div>
  );
}

export default NavBar;
