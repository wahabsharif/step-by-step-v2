import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCartInfo = () => {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const { cart_products } = useSelector((state) => state.cart);

  useEffect(() => {
    let cartTotal = {
      total: 0,
      quantity: 0,
    };

    cart_products.forEach((cartItem) => {
      const { price, orderQuantity } = cartItem;
      const itemTotal = price * orderQuantity;
      cartTotal.total += itemTotal;
      cartTotal.quantity += orderQuantity;
    });

    // Apply 20% discount
    const discountedTotal = cartTotal.total - cartTotal.total * 0.2;
    setQuantity(cartTotal.quantity);
    setTotal(discountedTotal);
  }, [cart_products]);

  return {
    quantity,
    total,
    setTotal,
  };
};

export default useCartInfo;
