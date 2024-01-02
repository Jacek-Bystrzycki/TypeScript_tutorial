import { ProductType } from '../context/ProductsProvider';
import { ReducerActionType, ReducerAction } from '../context/CartProvider';
import { ReactElement, memo } from 'react';

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  RECUDER_ACTION: ReducerActionType;
  inCart: boolean;
};

const Product = ({ product, dispatch, RECUDER_ACTION, inCart }: PropsType): ReactElement => {
  //old way for using images (wony work with VITE):
  //   const img: string = require(`../images/${product.sku}.jpg`);
  const img: string = new URL(`../images/${product.sku}.jpg`, import.meta.url).href;

  const onAddToCart = (): void => {
    dispatch({ type: RECUDER_ACTION.ADD, payload: { ...product, qty: 1 } });
  };

  const itemInCart = inCart ? '-->> Item in Cart' : null;

  const content = (
    <article className="product">
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} className="product__img" />
      <p>
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
        {itemInCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );

  return content;
};

const areProductEqual = ({ product: prevProduct, inCart: prevInCart }: PropsType, { product: nextProduct, inCart: nextInCart }: PropsType): boolean => {
  const productIsEqual: boolean = Object.keys(prevProduct).every((key) => {
    return prevProduct[key as keyof ProductType] === nextProduct[key as keyof ProductType];
  });

  const inCartIsEqual: boolean = prevInCart === nextInCart;

  return productIsEqual && inCartIsEqual;
};

const MemoizedProduct = memo<typeof Product>(Product, areProductEqual);

export default MemoizedProduct;
