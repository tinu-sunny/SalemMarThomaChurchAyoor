
import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './Pages/IndexPage'

function App() {
 

  return (
    <>
 <Routes>
  <Route path='/' element={<IndexPage/>}/>
 </Routes>
    </>
  )
}

export default App
