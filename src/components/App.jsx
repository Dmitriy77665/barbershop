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
import Hairstyle from './pages/hairstyle/Hairstyle.jsx';
import MensHaircut from './pages/mensHaircut/MensHaircut.jsx';
import BlackMask from './pages/blackMask/BlackMask.jsx';
import BeardTrim from './pages/beardTrim/BeardTrim.jsx';
import HeadShave from './pages/headshave/HeadShave.jsx';
import StraightChesterShave from './pages/straightChesterShave/StraightChesterShave.jsx';
import Camouflage from './pages/camouflage/Camouflage.jsx';
import ChildrenHaircut from './pages/childrenHaircut/ChildrenHaircut.jsx';
import FatherSon from './pages/fatherSon/FatherSon.jsx';

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
          <Route path='/men’s-haircut' element={<MensHaircut />} />
          <Route path='/black-mask' element={<BlackMask />} />
          <Route path='/beard-trim' element={<BeardTrim />} />
          <Route path='/headshave' element={<HeadShave />} />
          <Route path='/straight-chester-shave' element={<StraightChesterShave />} />
          <Route path='/camouflage' element={<Camouflage />} />
          <Route path='/children’s-haircut' element={<ChildrenHaircut />} />
          <Route path='/father+son' element={<FatherSon />} />
          <Route path='/hairstyle' element={<Hairstyle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
