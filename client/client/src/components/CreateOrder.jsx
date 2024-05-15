import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ru';
import dayjs from 'dayjs';

function CreateOrder({ setOpen, onClick, product }) {
  const [obtaining, setObtaining] = useState('pickup');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [err, setErr] = useState('');

  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [corpus, setCorpus] = useState('');
  const [flat, setFlat] = useState('');

  const [date, setDate] = useState(dayjs(Date.now()));

  const handleCreateOrder = async () => {
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      phone.trim() === '' ||
      (obtaining === 'delivery' &&
        (street.trim() === '' || houseNumber.trim() === ''))
    ) {
      setErr(
        'Одно или несколько полей заполнены некорректно. Проверьте корректность и попробуйте снова!'
      );
      return;
    }

    let order = {
      name: name,
      prodInfo: product.art + ' ' + product.brand + ' ' + product.type,
      email: email,
      phone: phone,
      obtaining: obtaining,
      street: obtaining === 'delivery' ? street : null,
      houseNumber: obtaining === 'delivery' ? houseNumber : null,
      corpus: obtaining === 'delivery' ? corpus : null,
      flat: obtaining === 'delivery' ? flat : null,
      date: date.format('YYYY-MM-DD'),
    };

    const res = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      mode: 'cors',
      body: JSON.stringify(order),
    });

    if (res.ok) {
      setOpen(false);
      setErr('');
      onClick();
    }
  };

  return (
    <div className="bg-white flex flex-col w-3/5 my-10 items-center mx-auto text-black gap-4 font-serif">
      <div
        className="flex flex-row w-full justify-end cursor-pointer px-2 py-2"
        onClick={() => {
          setOpen(false);
          setErr('');
        }}
      >
        <HighlightOffIcon />
      </div>
      <h1 className="text-2xl font-bold">Оформление заказа</h1>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2 py-1 w-2/5"
        type="text"
        placeholder="Введите имя"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2 py-1 w-2/5"
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        id="phone-input"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2 py-1 w-2/5"
        pattern="[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
        placeholder="33-333-33-33"
        required
        onChange={(e) => setPhone(e.target.value)}
      />
      <ToggleButtonGroup
        value={obtaining}
        exclusive
        onChange={(e, obt) => setObtaining(obt)}
        aria-label="text alignment"
      >
        <ToggleButton value="pickup" aria-label="left aligned">
          Самовывоз
        </ToggleButton>
        <ToggleButton value="delivery" aria-label="right aligned">
          Доставка
        </ToggleButton>
      </ToggleButtonGroup>

      {obtaining === 'delivery' && (
        <div className="flex flex-col gap-2 w-2/5">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2 py-1"
            placeholder="Улица"
            onChange={(e) => setStreet(e.target.value)}
          />
          <div className="flex flex-row gap-2 items-center">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2 py-1 w-1/4"
              placeholder="Дом"
              onChange={(e) => setHouseNumber(e.target.value)}
            />
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2 py-1 w-1/4"
              placeholder="Корпус"
              onChange={(e) => setCorpus(e.target.value)}
            />
            <input
              type="Квартира"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2 py-1 w-2/3"
              placeholder="Квартира"
              onChange={(e) => setFlat(e.target.value)}
            />
          </div>
        </div>
      )}

      <h2>Выберите дату</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label="Дата"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            minDate={dayjs(Date.now())}
          />
        </DemoContainer>
      </LocalizationProvider>

      {err && (
        <div className="flex flex-row text-red-500 justify-center items-center">
          {err}
        </div>
      )}

      <div
        className="cursor-pointer mb-10 border-2 border-green-700 px-4 py-1 rounded-lg bg-green-300"
        onClick={handleCreateOrder}
      >
        Заказать
      </div>
    </div>
  );
}

CreateOrder.propTypes = {
  setOpen: PropTypes.func,
  onClick: PropTypes.func,
  product: PropTypes.object,
};

export default CreateOrder;
