import { createContext, ReactElement, useReducer, useMemo } from 'react';
import { ChildrenType } from './ProductsProvider';

export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  qty: number;
};

type CartStateType = { cart: CartItemType[] };
const initCartState: CartStateType = { cart: [] };

const RECUDER_ACTION_TYPE = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  QUANITY: 'QUANTITY',
  SUBMIT: 'SUBMIT',
};
export type ReducerActionType = typeof RECUDER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
  switch (action.type) {
    case RECUDER_ACTION_TYPE.ADD: {
      if (!action.payload) throw new Error('"action.payload" is missing in "ADD" action');
      const { sku, name, price } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter((item) => item.sku !== sku);
      const isExisting: CartItemType | undefined = state.cart.find((item) => item.sku === sku);
      const qty: number = isExisting ? isExisting.qty + 1 : 1;
      return { ...state, cart: [...filteredCart, { sku, name, price, qty }] };
    }

    case RECUDER_ACTION_TYPE.REMOVE: {
      if (!action.payload) throw new Error('"action.payload" is missing in "REMOVE" action');
      const { sku } = action.payload;
      const filteredCart: CartItemType[] = state.cart.filter((item) => item.sku !== sku);
      return { ...state, cart: filteredCart };
    }

    case RECUDER_ACTION_TYPE.QUANITY: {
      if (!action.payload) throw new Error('"action.payload" is missing in "QUANTITY" action');
      const { sku, qty } = action.payload;
      const isExists: CartItemType | undefined = state.cart.find((item) => item.sku === sku);
      if (!isExists) throw new Error('Item must exist in order to update quantity');
      const filteredCart: CartItemType[] = state.cart.filter((item) => item.sku !== sku);
      return { ...state, cart: [...filteredCart, { ...isExists, qty }] };
    }

    case RECUDER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }

    default:
      throw new Error('Wrong action in reducer!!!');
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTION_MEMO = useMemo(() => {
    return RECUDER_ACTION_TYPE;
  }, []);

  const totalItems: number = state.cart.reduce((total, cartItem) => {
    return (total += cartItem.qty);
  }, 0);

  const totalPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
    state.cart.reduce((total, cartItem) => {
      return (total = total + cartItem.price * cartItem.qty);
    }, 0)
  );

  const cart = state.cart.sort((a, b) => {
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));
    return itemA - itemB;
  });

  return { dispatch, REDUCER_ACTION_MEMO, totalItems, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTION_MEMO: RECUDER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: '',
  cart: [],
};

export const CartContext = createContext<UseCartContextType>(initCartContextState);

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return <CartContext.Provider value={useCartContext(initCartState)}>{children}</CartContext.Provider>;
};
