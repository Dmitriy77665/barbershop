import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './header/Header';
import Title from './main/Title.jsx';
import Content from './content/Content.jsx';
import Services from './services/services.jsx';
import OurBarbers from './ourBarbers/OurBrabers.jsx';
import Career from './carrer/Career.jsx';
import Contacts from './contacts/Contacts.jsx';
import Footer from './footer/Footer.jsx';

const MainPage = () => {
  return (
    <div>
      <Header />
      <Title />
      <Content />
      <Services />
      <OurBarbers />
      <Career />
      <Contacts />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
