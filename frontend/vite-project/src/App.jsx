import { BrowserRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Root from "./router/Root";
import Header from '@components/Header';
import Footer from '@components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Root />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
