import Calculator from './Calculator';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Navigation from './Navigation';
import './App.css';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
// import ThankYou from './ThankYou';
const App = () => {
  return (
    <div className='bg'>
    <div className='navigation'>
      <Navigation/>
    </div>
    <BrowserRouter>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
    <Link to="/cal">Calculator</Link>
    <Routes>
      <Route path="/" element={<Navigation/>} />
      <Route path="/register" element={<SignUp/>}/ >
      <Route path="/login" element={<LoginPage/>}/ >
      <Route path="/cal" element={<Calculator/>}/ >
    </Routes>
    </BrowserRouter>
   </div>
    );
}
 
export default App;