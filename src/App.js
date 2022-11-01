import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fontawesome/css/all.min.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Cart from './screens/Cart';
import Doctorpage from './screens/Doctorpage';
import Laboratories from './screens/Laboratories';
import Profile from './screens/Profile';
import Favourites from './screens/Favourites';
import Item from './screens/Item';
import Cards from './screens/Cards';
import Addcard from './screens/Addcard';
import Orderhistory from './screens/Orderhistory';
import Dashboard from './screens/Dashboard';
import Products from './screens/Dashboard/Products';
import Order from './screens/Dashboard/Order';
import Payment from './screens/Dashboard/Payment';
import Withdraw from './screens/Dashboard/Withdraw';
import Addproduct from './screens/Dashboard/AddProduct';
import DocDashboard from './screens/Dashboard/Docdashboard';
import Appointment from './screens/Dashboard/Docdashboard/Appointment';
import LabDashboard from './screens/Dashboard/Labdashboard';
import Test from './screens/Dashboard/Labdashboard/Test';
import Addtest from './screens/Dashboard/Labdashboard/AddTest';
import Edittest from './screens/Dashboard/Labdashboard/EditTest';

function App() {
  return (

    <Router>


    <Routes>
 
      
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/doctor" element={<Doctorpage/>} />
        <Route path="/laboratories" element={<Laboratories/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/product" element={<Item/>}/>
        <Route path="/card" element={<Cards/>}/>
        <Route path="/add-new-card" element={<Addcard/>}/>
        <Route path="/order-history" element={<Orderhistory/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/products" element={<Products/>}/>
        <Route path="/dashboard/orders" element={<Order/>}/>
        <Route path="/dashboard/payment" element={<Payment/>}/>
        <Route path="/dashboard/withdraw" element={<Withdraw/>}/>
        <Route path="/dashboard/add-product" element={<Addproduct/>}/>
        <Route path="/dashboard/doctor" element={<DocDashboard/>}/>
        <Route path="/dashboard/appointment" element={<Appointment/>}/>
        <Route path="/dashboard/lab" element={<LabDashboard/>}/>
        <Route path="/dashboard/test" element={<Test/>}/>
        <Route path="/dashboard/add-test" element={<Addtest/>}/>
        <Route path="/dashboard/edit-test" element={<Edittest/>}/>




        




    
  
    </Routes>
    
  </Router>

  );
}

export default App;
