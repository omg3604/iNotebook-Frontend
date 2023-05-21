import React from 'react';
import Notes from './Notes';
import { useEffect  , useState} from 'react';
import WithoutLogin from './WithoutLogin';
import Spinner from './Spinner.js';

const Home = (props) => {
  const [isLogin, setisLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setisLogin(true);
    }
  }, [])
  return (
    <div>
      {/* <Spinner/> */}
      {!isLogin && <WithoutLogin></WithoutLogin>}
      <div className='container'>{isLogin && <Notes showAlert={props.showAlert}></Notes>}</div>
    </div>
  )
}
export default Home;