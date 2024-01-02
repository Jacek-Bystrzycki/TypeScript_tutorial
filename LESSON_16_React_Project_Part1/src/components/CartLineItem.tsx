import { ChangeEvent, ReactElement, useMemo, memo } from 'react';
import { ReducerAction, ReducerActionType, CartItemType } from '../context/CartProvider';

type PropsType = {
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTION: ReducerActionType;
  item: CartItemType;
};

const CartLineItem = ({ dispatch, REDUCER_ACTION, item }: PropsType): ReactElement => {
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href;

  const lineTotal: number = useMemo(() => {
    return item.qty * item.price;
  }, [item.qty, item.price]);

  const highestQty: number = 20 > item.qty ? 20 : item.qty;

  const optionValues: number[] = [...Array(highestQty).keys()].map((i) => i + 1);

  const options: ReactElement[] = optionValues.map((value) => {
    return (
      <option key={`opt${value}`} value={value}>
        {value}
      </option>
    );
  });

  const onChangeQty = (ev: ChangeEvent<HTMLSelectElement>): void => {
    dispatch({ type: REDUCER_ACTION.QUANITY, payload: { ...item, qty: Number(ev.target.value) } });
  };

  const onDelete = (): void => {
    dispatch({ type: REDUCER_ACTION.REMOVE, payload: item });
  };

  const pageContent: ReactElement = (
    <li className="cart__item">
      <img src={img} alt={item.name} className="cart_img" />
      <div aria-label="Item name">{item.name}</div>
      <div aria-label="Price per Item">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}</div>
      <label htmlFor="itemQty" className="offscreen">
        Item Quantity
      </label>
      <select className="cart__select" name="itemQty" id="itemQty" value={item.qty} aria-label="Item Quantity" onChange={onChangeQty}>
        {options}
      </select>
      <div className="cart__item-subtotal" aria-label="Line Item Subtotal">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lineTotal)}
      </div>
      <button className="cart__button" onClick={onDelete} aria-label="Remove Item From Cart" title="Remove Item From Cart">
        X
      </button>
    </li>
  );

  return pageContent;
};

const areItemEqual = ({ item: prevItem }: PropsType, { item: nextItem }: PropsType): boolean => {
  return Object.keys(prevItem).every((key) => {
    return prevItem[key as keyof CartItemType] === nextItem[key as keyof CartItemType];
  });
};

const MemoizedCartLineItem = memo<typeof CartLineItem>(CartLineItem, areItemEqual);

export default MemoizedCartLineItem;
