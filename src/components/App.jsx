import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './header/Header';
import Title from './main/Title.jsx';
import Content from './content/Content.jsx';
import Services from './services/services.jsx';
import OurBarbers from './ourBarbers/OurBrabers.jsx';
import Career from './carrer/Career.jsx';
import Contacts from './contacts/Contacts.jsx';
import Footer from './footer/Footer.jsx';
import School from './pages/school/School.jsx';
import Contact from './pages/contact/Contact.jsx';

const MainPage = () => {
  return (
    <div>
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
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/school" element={<School />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
