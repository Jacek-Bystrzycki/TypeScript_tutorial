import { useState } from 'react';
import List from './components/List';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <List />;

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  );

  return <div className="App">{content}</div>;
};

export default App;
