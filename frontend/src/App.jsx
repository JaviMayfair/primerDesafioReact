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
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MyProfile from './pages/MyProfile';
import { UserContext } from './context/UserContext';
import { useContext } from 'react';

function App() {
  const {token} = useContext(UserContext)

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
        <Route path='/Pizza/:id' element= {<MyPizza/>}>
        </Route>
        <Route path='/' element= {<MyHome/>}>
        </Route>
        <Route path='/MyRegister' element= {token ? <Navigate to= "/"/> : <MyRegister/>}>
        </Route>
        <Route path='/MyLogin' element= {token ? <Navigate to= "/"/> : <MyLogin/>}>
        </Route>
        <Route path='/MyCart' element= {<MyCart/>}>
        </Route>
        <Route path='/MyProfile' element={token ? <MyProfile/> : <Navigate to= "/MyLogin"/>}></Route>
      </Routes>
      <div>
        <MyFooter />
      </div>
    </>
  )
}

export default App;
