import { createElement } from '../framework.js';
import Header from './Header.js';
import Nav from './Nav.js';
import Body from './Body.js';
import Footer from './Footer.js';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Body />
      <Footer />
    </div>
  );
};

export default App;