import { useCart } from '../hooks/useCart';

type PropsType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const details = (
    <>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: {totalPrice}</p>
    </>
  );
  const content = (
    <footer className="footer">
      {!viewCart && details}
      <p>Shopping Cart &copy; {new Date().getFullYear()}</p>
    </footer>
  );

  return content;
};
export default Footer;
