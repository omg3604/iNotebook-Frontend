import React from 'react';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';
import About from './components/About';
import VerifyAccount from './components/VerifyAccount';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import UserState from './context/user/UserState';
import Alert from './components/Alert';
import Footer from './components/Footer';
import ResetPassword from './components/ResetPassword';
import ForgetPassword from './components/ForgetPassword';
import SavedNotes from './components/SavedNotes';
import SharedNotes from './components/SharedNotes';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setTimeout(() => {
      setAlert({
        type: type,
        msg: message
      })
      setTimeout(() => {
        setAlert(null);
      }, 4000);
    }, 1000);
  }
  return (
    <UserState>
      <NoteState>
        <Router>
          <div>
            <NavBar showAlert={showAlert}></NavBar>
            <div>
              <Alert alert={alert} ></Alert>
            </div>
            <div>
              <Routes>
                <Route exact path='/' element={<Home showAlert={showAlert}></Home>}></Route>
                <Route exact path='/contact' element={<Contact></Contact>}></Route>
                <Route exact path='/about' element={<About></About>}></Route>
                <Route exact path='/Login' element={<Login showAlert={showAlert}></Login>}></Route>
                <Route exact path='/Signup' element={<Signup showAlert={showAlert}></Signup>}></Route>
                <Route exact path='/Account' element={<Account showAlert={showAlert}></Account>}></Route>
                <Route exact path='/VerifyAccount' element={<VerifyAccount showAlert={showAlert}></VerifyAccount>}></Route>
                <Route exact path='/ResetPassword' element={<ResetPassword showAlert={showAlert}></ResetPassword>}></Route>
                <Route exact path='/ForgetPassword' element={<ForgetPassword showAlert={showAlert}></ForgetPassword>}></Route>
                <Route exact path='/SavedNotes' element={<SavedNotes showAlert={showAlert}></SavedNotes>}></Route>
                <Route exact path='/SharedNotes' element={<SharedNotes showAlert={showAlert}></SharedNotes>}></Route>
              </Routes>
            </div>
            <Footer></Footer>
          </div>
        </Router>
      </NoteState>
    </UserState>
  );
}

export default App;
