
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './Component/Sidebar';
// import Resetpassword from './Pages/Resetpassword/Resetpassword';
// import MainLayout from './Component/MainLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Listscomponents from './Pages/Listscomponents/Listscomponents';
import Ticket from './Pages/Ticket/Ticket';
import Register from './Pages/Register/Register';
import Menu from './Pages/Menu/Menu';
import Login from './Pages/Login/Login';
import Dropdown from './Pages/Dropdown';
import IncDec from './Pages/IncDec';
import Both from './Pages/Both';
import DropdownPerson from './Pages/DropdownPerson';
import NumberDropdown from './Pages/NumberDropdown';
import PasswordReset from './Pages/Forgotpassword/PasswordReset';
// import MainLayout from './Component/MainLayout';
// import Orders from './Pages/Orders/Orders';
// import RegisteredData from './Pages/RegisteredData/RegisteredData';
// import Home from './Pages/Home/Home';

function App() {
  return (
  <BrowserRouter>

{/* <Sidebar/> */}

  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    {/* <Route path="/registereddata" element={<RegisteredData/>} /> */}
    <Route path="/ticket" element={<Ticket/>} />
    <Route path="/passwordreset" element={<PasswordReset/>} />
    {/* <Route path="/resetpassword" element={<Resetpassword/>} /> */}
    <Route path="/listscomponents" element={<Listscomponents/>} />
    <Route path="/dropdown" element={<Dropdown/>} />
    <Route path="/incdec" element={<IncDec/>} />
    <Route path="/menuu" element={<Both/>} />
    <Route path="/dropdownperson" element={<DropdownPerson/>} />
    <Route path="/numberdropdown" element={<NumberDropdown/>} />
    
    {/* <Route path="/home" element={<Home/>} /> */}
    {/* <Route path="/orders" element={<Orders/>} /> */}
    <Route path="/dashboard" element={<Dashboard/>} />
    {/* <Route path="/admin" element={<MainLayout/>}/> */}
    <Route path="/menu" element={<Menu/>}/>
    
    {/* <Route index element={<Dashboard/>} /> */}
    
    
    {/* </Route> */}
  </Routes>
  </BrowserRouter>
  );
}

export default App;
