import { ReactElement, createContext, useEffect, useState } from 'react';

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

//V1 - HARDCODING READING DATA FROM JSON FILE
// const initProducts: ProductType[] = [
//   {
//     sku: 'item0001',
//     name: 'Widget',
//     price: 9.99,
//   },
//   {
//     sku: 'item0002',
//     name: 'Premium Widget',
//     price: 19.99,
//   },
//   {
//     sku: 'item0003',
//     name: 'Deluxe Widget',
//     price: 29.99,
//   },
// ];

export type UseProductContextType = {
  products: ProductType[];
};
const initContextState: UseProductContextType = { products: [] };
export const ProductsContext = createContext<UseProductContextType>(initContextState);

export type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

//V1 - CREATE COMPONENT WITH HARDCODED DATA FROM FILE (WITHOUT USESTATE USEEFFECT DATA)
// export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
//   return (
//     <ProductsContext.Provider value={ {products:initProducts} }>
//       {children}
//     </ProductsContext.Provider>
//   );
// };
//V2 - CREATE COMPONENT WITH FETCHED DATA FROM FILE (WITH USESTATE USEEFFECT DATA)
export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<ProductType[]> => {
      const data = fetch('http://localhost:3500/products')
        .then((resp) => resp.json())
        .then((data) => data)
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
        });
      return data;
    };

    fetchData().then((resp) => setProducts(resp));
  }, []);
  return <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>;
};
