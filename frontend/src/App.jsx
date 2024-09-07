import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyHome from './pages/MyHome';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MyRegister from './pages/MyRegister';
import MyLogin from './pages/MyLogin';
import MyCart from './pages/MyCart';
import MyPizza from './pages/MyPizza';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <>
        <div>
            <MyNavbar />
        </div>
        <header>
          <MyHeader />
        </header>
      <Routes>
        <Route path='*' element= {<NotFound/>}></Route>
        <Route path='/Pizza/p001' element= {<MyPizza/>}>
        </Route>
        <Route path='/' element= {<MyHome/>}>
        </Route>
        <Route path='/MyRegister' element= {<MyRegister/>}>
        </Route>
        <Route path='/MyLogin' element= {<MyLogin/>}>
        </Route>
        <Route path='/MyCart' element= {<MyCart/>}>
        </Route>
        <Route path='/MyProfile' element={<MyProfile/>}></Route>
      </Routes>
      <div>
        <MyFooter />
      </div>
    </>
  )
}

export default App;
