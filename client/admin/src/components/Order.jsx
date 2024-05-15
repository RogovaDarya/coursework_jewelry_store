import PropTypes from 'prop-types';
import { showDate } from '../utils/utils';

function Order({ order }) {
  const handleOrderDone = async () => {
    const res = await fetch(`http://localhost:3000/orders/${order.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: true }),
    });

    if (res.ok) {
      window.location.reload();
    }
  };

  console.log(order);

  return (
    <div className="flex flex-col w-4/5 border-b border-gray-700 mb-4 mx-auto">
      <div className="flex flex-row w-full justify-between items-center">
        <div>{order.prodInfo}</div>
        <div className="flex flex-row items-center gap-4">
          <span>{order.name}</span>
          <span>{order.phone}</span>
        </div>
      </div>
      <div>
        Тип доставки:{' '}
        {order.obtaining === 'delivery' ? 'Доставка' : 'Самовывоз'}
      </div>
      {order.obtaining === 'delivery' && (
        <div className="flex flex-row gap-4 items-center">
          <span>Улица: {order.street}</span>
          <span>Дом: {order.houseNumber}</span>
          <span>Корпус: {order.corpus}</span>
          <span>Квартира: {order.flat}</span>
        </div>
      )}
      <div>Дата: {showDate(order.date)}</div>
      <div>Выполнен: {order.status === 0 ? 'Не выполнен' : 'Выполнен'}</div>
      {order.status === 0 && (
        <button
          onClick={handleOrderDone}
          className="px-4 py-1 my-2 border border-gray-600 rounded-lg w-64 mx-auto hover:bg-gray-200"
        >
          Пометить как выполненный
        </button>
      )}
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.object,
};

export default Order;
