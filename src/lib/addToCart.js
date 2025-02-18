export const addToCard = (product) => {
  let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const formatedProduct = {
    title: product?.title,
    price: product?.price,
    image: product?.thumbnail,
    id: product?.id,
    quantity: 1,
  };
  const existProduct = cart?.find((item) => item.id === product.id);

  const cartCount = cart?.reduce((acc, item) => {
    return acc + parseInt(item.quantity);
  }, 0);
  console.log(cartCount);

  if (existProduct) {
    const filterdCart = cart.filter((item) => item.id !== product.id);
    cart = [
      { ...existProduct, quantity: ++existProduct.quantity },
      ...filterdCart,
    ];
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    cart.push(formatedProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};
