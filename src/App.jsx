import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Contact from './pages/Contact.Page';
import Home from './pages/Home.Page';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    // document.querySelector('html').style.scrollBehavior = 'smooth';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
  );
}

export default App;
