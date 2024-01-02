import { useCart } from '../hooks/useCart';
import { ReactElement, useState } from 'react';
import CartLineItem from './CartLineItem';

const Cart = (): ReactElement => {
  const [confirm, setConfirm] = useState<boolean>(false);
  const { dispatch, REDUCER_ACTION_MEMO, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = (): void => {
    dispatch({ type: REDUCER_ACTION_MEMO.SUBMIT });
    setConfirm(true);
  };

  const pageContent: ReactElement = confirm ? (
    <h2>Thank you for your order!</h2>
  ) : (
    <>
      <h2 className="offscreen">Cart</h2>
      <ul className="cart">
        {cart.map((item) => {
          return <CartLineItem key={item.sku} dispatch={dispatch} REDUCER_ACTION={REDUCER_ACTION_MEMO} item={item} />;
        })}
      </ul>
      <div className="cart__totals">
        <p>Total items: {totalItems}</p>
        <p>Total price: {totalPrice}</p>
        <button disabled={!totalItems} className="cart__submit" onClick={onSubmitOrder}>
          Place order
        </button>
      </div>
    </>
  );

  const content: ReactElement = <main className="main main--cart">{pageContent}</main>;

  return content;
};
export default Cart;
