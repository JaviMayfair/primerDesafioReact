import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyHome from './components/MyHome';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <>
     <div>
      <MyNavbar/>
     </div>

     <div>
      <MyHome/>
     </div>
     <div>
      <MyFooter/>
     </div>
     </>
  )
}

export default App;
