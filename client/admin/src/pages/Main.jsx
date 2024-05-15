import { useEffect } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import Order from '../components/Order';

function Main() {
  const navigate = useNavigate();

  const { orders } = useLoaderData();

  useEffect(() => {
    if (!localStorage.getItem('isLogin')) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-row w-4/5 justify-between h-16 items-center text-xl">
        <div className="cursor-pointer" onClick={() => navigate('/main')}>
          Заказы
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            localStorage.removeItem('isLogin');
            navigate('/');
          }}
        >
          Выход
        </div>
      </div>
      <div className="flex flex-row w-full border-b border-gray-700"></div>
      <h1 className="text-3xl font-bold font-serif py-4">Заказы</h1>
      {orders.map((order, index) => (
        <Order key={index} order={order} />
      ))}
    </div>
  );
}

export default Main;
