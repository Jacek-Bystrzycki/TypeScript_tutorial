import { useProduct } from '../hooks/useProduct';
import { useCart } from '../hooks/useCart';
import { ReactElement } from 'react';
import Product from './Product';

const List = () => {
  const { products } = useProduct();
  const { dispatch, REDUCER_ACTION_MEMO, cart } = useCart();

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;

  if (products?.length > 0) {
    pageContent = products?.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);
      return <Product key={product.sku} product={product} dispatch={dispatch} RECUDER_ACTION={REDUCER_ACTION_MEMO} inCart={inCart} />;
    });
  }

  const main = <main className="main main--products">{pageContent}</main>;

  return main;
};
export default List;
