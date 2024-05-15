import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center font-sans">
      <h1 className="font-bold text-3xl">404. Страница не найдена</h1>
      <h2 className="font-semibold text-2xl text-gray-600">
        Вернуться на{' '}
        <Link to={'/'} className="font-semibold text-black hover:text-purple-700">
          главную
        </Link>
      </h2>
    </div>
  );
}

export default Error;
