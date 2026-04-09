
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './Pages/IndexPage'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LoaderWithIcon from './Loader/LoaderWithIcon';
import AboutPage from './Pages/AboutPage';
import PNF from './Pages/PNF';
function App() {
 
 const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);
  return (
    <>
     {loading && <LoaderWithIcon />}
 <Routes>
  <Route path='/' element={<IndexPage/>}/>
  <Route path='/about' element={<AboutPage/>}/>
  <Route path='*' element={<PNF/>}/>
 </Routes>
    </>
  )
}

export default App
