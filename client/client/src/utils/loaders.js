export const loadProducts = async () => {
  const products = await fetch('http://localhost:3000/products/').then((r) =>
    r.json()
  );

  return { products };
};

export const productLoader = async ({ params: { id } }) => {
  let product = await fetch(`http://localhost:3000/products/${id}`)
    .then((r) => r.json())
    .then((data) => data[0]);

  return { product };
};

export const brandLoader = async ({ params: { brand } }) => {
  const products = await fetch(`http://localhost:3000/products/${brand}`).then(
    (r) => r.json()
  );

  return { products };
};
