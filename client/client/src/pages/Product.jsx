import { Backdrop } from '@mui/material';
import { Suspense, useState } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import CreateOrder from '../components/CreateOrder';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Product() {
  const { product } = useLoaderData();
  const [open, setOpen] = useState(false);

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: 'Спасибо!',
      text: 'Ваш заказ успешно оформлен!',
      icon: 'success',
    });
  };

  return (
    <div className="grid grid-cols-2 gap-10 px-4 items-center w-4/5 mx-auto">
      <div className="flex flex-col w-full items-center justify-center">
        <Suspense fallback={<div>Loading..</div>}>
          <Await resolve={product}>
            <img src={product.imageurl} className="w-full aspect-square" />
          </Await>
        </Suspense>
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <h1 className="text-3xl font-bold">
          {product.type} {product.brand} / {product.art}
        </h1>
        <h2 className="text-xl">Тип: {product.type}</h2>
        <h2 className="text-xl">Бренд: {product.brand}</h2>
        <h2 className="text-xl">Материал: {product.material}</h2>
        <h2 className="text-xl">Артикул: {product.art}</h2>
        <h2 className="text-xl my-2">Цена: {product.coast} Руб.</h2>
        <div
          className="cursor-pointer px-4 border-2 border-green-700 bg-green-300 w-min rounded-lg text-lg font-bold hover:bg-green-400"
          onClick={() => setOpen(true)}
        >
          Заказать
        </div>

        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CreateOrder setOpen={setOpen} onClick={showSwal} product={product} />
        </Backdrop>
      </div>
    </div>
  );
}

export default Product;
