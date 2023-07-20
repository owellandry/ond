import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Nav from './Nav';

const App = () => {
  return [
    Header(),
    Nav(),
    Body(),
    Footer()
  ];
};

export default App;