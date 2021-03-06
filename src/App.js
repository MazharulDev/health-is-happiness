import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import CheckOut from './components/CheckOut/CheckOut';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import NotFound from './components/NotFound/NotFound';
import Service from './components/Home/Service/Service';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/checkout/:id' element={
          <RequireAuth>
            <CheckOut />
          </RequireAuth>
        }></Route>
        <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
