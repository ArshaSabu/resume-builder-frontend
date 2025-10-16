import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Form from './pages/Form';
import History from './Pages/History';
import pageNotFound from './pages/pageNotFound';
import ResumeGenerator from './pages/ResumeGenerator';

function App() {


  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/resume' element={<ResumeGenerator />}></Route>
        <Route path='/form' element={<Form />}></Route>
        <Route path='/history' element={<History />}></Route>
        <Route path='/*' element={<pageNotFound />}></Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
