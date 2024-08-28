import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyHome from './components/MyHome';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import MyRegister from './components/MyRegister';
import MyLogin from './components/MyLogin';
import MyCart from './components/MyCart';
import MyPizza from './components/MyPizza';

function App() {
  return (
    <>
      <div>
        <MyNavbar />
      </div>

      <header>
        <MyHeader />
      </header>

      <div>
        <MyPizza/>
      </div>

      {/*<div>
        <MyHome />
      </div>*/}

      {/*<div style={{display: "flex", justifyContent: "center"}}>
      <MyRegister/>
     </div>*/}

      {/*<div style={{display: "flex", justifyContent: "center"}}>
      <MyLogin/>
     </div>*/}

      {/*<div>
      <MyCart/>
     </div>*/}

      <div>
        <MyFooter />
      </div>
    </>
  )
}

export default App;
