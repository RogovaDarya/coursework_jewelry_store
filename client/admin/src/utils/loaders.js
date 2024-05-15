export const loadOrders = async () => {
  const orders = await fetch('http://localhost:3000/orders', {
    method: 'GET',
    mode: 'cors',
  }).then((r) => r.json());

  return { orders };
};
